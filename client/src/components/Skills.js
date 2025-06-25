import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaLinux,
  FaCode,
  FaVideo, FaFilm ,
  FaLaptopCode,
  FaCloud,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiFirebase,
  SiKubernetes,
  SiGooglecloud,
  SiJira,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import "./Skills.css";

const skillCategories = {
  "Development": [
    { name: "HTML", icon: <SiHtml5 />, level: 90 },
    { name: "CSS", icon: <SiCss3 />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript />, level: 80 },
    { name: "PHP", icon: <SiPhp />, level: 60 },
    { name: "React (MERN)", icon: <FaReact />, level: 75 },
    { name: "Node.js (MERN)", icon: <FaNodeJs />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb />, level: 65 },
    { name: "Express", icon: <SiFirebase />, level: 55 },
    { name: "MEAN Stack", icon: <FaLaptopCode />, level: 50 },
    { name: "Django", icon: <FaLaptopCode />, level: 50 },
  ],
  "DevOps & Tools": [
    { name: "AWS", icon: <FaAws />, level: 65 },
    { name: "Google Cloud", icon: <SiGooglecloud />, level: 60 },
    { name: "Docker", icon: <FaDocker />, level: 70 },
    { name: "Kubernetes", icon: <SiKubernetes />, level: 55 },
    { name: "Jira", icon: <SiJira />, level: 65 },
    { name: "Postman", icon: <SiPostman />, level: 75 },
    { name: "Git & GitHub", icon: <FaGitAlt />, level: 85 },
    { name: "VS Code", icon: <FaCode />, level: 80 },
  ],
  Programming: [
    { name: "C", icon: <FaCode />, level: 70 },
    { name: "Python", icon: <FaPython />, level: 75 },
    { name: "Java", icon: <FaCode />, level: 65 },
    { name: "Data Structures", icon: <FaLaptopCode />, level: 70 },
    { name: "DBMS", icon: <FaDatabase />, level: 60 },
    { name: "SDLC", icon: <FaLaptopCode />, level: 55 },
    { name: "Operating Systems", icon: <FaLinux />, level: 60 },
    { name: "Computer Networks", icon: <FaCloud />, level: 55 },
  ],
  "ML": [
    { name: "Data Science", icon: <FaLaptopCode />, level: 65 },
    { name: "Deep Learning", icon: <FaLaptopCode />, level: 50 },
    { name: "Machine Learning", icon: <FaCode />, level: 80 },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb />, level: 75 },
    { name: "Firebase", icon: <SiFirebase />, level: 70 },
    { name: "SQL", icon: <FaDatabase />, level: 85 },
  ],

  "Soft Skills": [
    { name: "Communication", icon: <FaLaptopCode />, level: 80 },
    { name: "Teamwork", icon: <FaLaptopCode />, level: 85 },
    { name: "Adaptability", icon: <FaLaptopCode />, level: 75 },
    { name: "Figma", icon: <SiFigma />, level: 60 },
  ],
  OperatingSystems: [
    { name: "Windows", icon: <FaLaptopCode />, level: 85 },
    { name: "Linux", icon: <FaLinux />, level: 70 },
    { name: "Kali Linux", icon: <FaLinux />, level: 60 },
  ],
  "Editing & Design": [
    { name: "DaVinci Resolve", icon: <FaVideo />, level: 70 },
    { name: "VN Video Editor", icon: <FaFilm />, level: 65 },
    { name: "CapCut", icon: <FaVideo />, level: 60 },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, level: 75 },
  ],

};

const Skills = () => {
  const categories = Object.keys(skillCategories);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>

      {/* Tabs */}
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-btn ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="skills-container">
        {skillCategories[activeTab].map(({ name, icon, level }) => (
          <div key={name} className="skill-card" style={{ animationDelay: "0.3s" }}>
            <div className="skill-header">
              <span className="icon">{icon}</span>
              <h3>{name}</h3>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${level}%` }}></div>
            </div>
            <small>{level}% Proficient</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
