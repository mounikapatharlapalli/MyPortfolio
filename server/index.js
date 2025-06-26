// server/index.js

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS: allow only your deployed frontend (update URL as needed)
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// Root route to verify service is live
app.get('/', (req, res) => {
  res.send('✅ Portfolio backend is running.');
});

// Contact route:
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact from ${firstName} ${lastName || ''}`.trim(),
      text: `📧 Name: ${firstName} ${lastName || ''}
📞 Phone: ${phone || 'N/A'}
✉️ Message:
${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail send error:', error);
    res.status(500).json({ success: false, error: 'Unable to send email' });
  }
});

// Dynamic port binding for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server started on port ${PORT}`);
});
