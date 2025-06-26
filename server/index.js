const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS: restrict to your deployed frontend
app.use(cors({
  origin: 'https://mounika-portfolio.vercel.app',
  methods: ['POST','GET'],
}));

app.use(express.json());

// Root route to verify service is live
app.get('/', (req, res) => {
  res.send('✅ Portfolio backend is running.');
});

// Contact route
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body; // match form fields

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact from ${firstName} ${lastName}`,
    text: `📧 Name: ${firstName} ${lastName}\n📞 Phone: ${phone}\n✉️ Message:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
