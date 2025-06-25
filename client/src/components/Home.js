import React from "react";
import "./Home.css";
import profilePic from "../assets/mp1.jpg";
import { FaEnvelope } from "react-icons/fa"; // added for email icon

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-container">
          <h1>Hello, I'm Mounika</h1>
          <h2>Aspiring Software Engineer & Tech Enthusiast</h2>
          <p>
            Passionate about solving real-world problems through technology. Skilled in full-stack development, ML, and data-driven solutions. I strive to build impactful, scalable, and user-centric applications across diverse domains.
          </p>

          {/* Email with icon */}
          <div className="email-line">
            <FaEnvelope className="email-icon" />
            <a href="mailto:mounika212325@gmail.com">mounika212325@gmail.com</a>
          </div>

          {/* Button Group */}
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
            <a
              href="https://drive.google.com/file/d/1gM4tgY-JZ0v_yN3jHWHfvYleZqfAuB4q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className="photo-container">
          <img src={profilePic} alt="Mounika" />
        </div>
      </div>
    </section>
  );
};

export default Home;
