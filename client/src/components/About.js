import React, { useState } from "react";
import "./About.css";
import profileImage from "../assets/mp3.jpg";
import { FaLinkedin, FaGithub, FaInstagram,FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Image on left */}
          <div className="about-image fade-in-left">
            <img src={profileImage} alt="Profile" />
          </div>

          {/* Text on right */}
          <div className="about-text fade-in-right">
            <h2>About Me</h2>
            <p>
            <p>
  Hi! I'm <strong>Mounika Patharlapalli</strong>, currently pursuing Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at SRKR Engineering College. I have a strong passion for machine learning, full-stack development, and editing. My strengths include excellent communication skills, active teamwork, and a drive to continuously learn and innovate. I am actively preparing for campus placements and eager to contribute meaningfully to impactful projects while growing professionally.
</p>


            </p>

            <button className="education-btn" onClick={toggleModal}>
              View My Education
            </button>
            
            <h4 align="center">My Profiles</h4>
            <div className="profile-icons">
              <a href="https://www.linkedin.com/in/mounika-patharlapalli-a3a21b283" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" /> 
              </a>
              <a href="https://github.com/mounikapatharlapalli" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> 
              </a>
              <a href="https://leetcode.com/mounikapatharlapalliN6moJ0" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="icon" />
              </a>
              <a href="https://instagram.com/mounika_patharlapalli" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" /> 
              </a>
              <a href="https://youtube.com/channel/UCGY25EmwHvdesHmLyoY0Tsw" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon" /> 
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Education & Profiles */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Education</h3>
            <ul>
              <li><strong>B.Tech:</strong> SRKR Engineering College (AIML) – 9CGPA</li>
              <li><strong>Intermediate:</strong> Sasi Junior College (MPC) – 96.6%</li>
              <li><strong>Schooling:</strong> Sri Chaitanya School – 97%</li>
            </ul>


            <button className="close-btn" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )
      }
    </section>
  );
};

export default About;
