import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  // Updated 20 project entries (documentationUrl removed)
  {
    id: 1,
    title: "Portfolio",
    category: "Full Stack",
    shortDesc:
      "Tourism Booking Platform 🌍 Anveshana is a simple, static website designed to help you explore travel destinations 🏖️ and book your next adventure ✈️.",
    videoUrl:
      "https://drive.google.com/file/d/17DXTrfRgEOu2mL4CRJJmhsOyq_4yYFvX",
    githubUrl: "https://github.com/mounikapatharlapalli/MyPortfolio",
  },
  {
    id: 2,
    title: "Anveshana",
    category: "Web Development",
    shortDesc:
      "Tourism Booking Platform 🌍 Anveshana is a simple, static website designed to help you explore travel destinations 🏖️ and book your next adventure ✈️.",
    videoUrl:
      "https://drive.google.com/file/d/1xUZhMqm4EkudzGvM65bGsfv2ZZHdtBgj",
    githubUrl: "https://github.com/mounikapatharlapalli/Anveshana",
  },
  {
    id: 3,
    title: "Sorting Visualizer",
    category: "Web Development",
    shortDesc:
      "Interactive sorting algorithm visualizer designed for educational purposes, allowing users to learn and teach sorting techniques.",
    videoUrl:
      "https://drive.google.com/file/d/1fMR0Ho3n71Zb8CZZuU1ttBmmurpKxjfy",
    githubUrl: "https://github.com/mounikapatharlapalli/Sorting_Visualizer",
  },
  {
    id: 4,
    title: "Amazon Clone ",
    category: "Web Development",
    shortDesc:
      "A front-end Amazon Clone built using React that replicates the user interface of the popular e-commerce platform.",
    videoUrl:
      "https://drive.google.com/file/d/1nymJ-fBpcjGwImnkFAJY16pu7F6cqwTB",
    githubUrl: "https://github.com/mounikapatharlapalli/AmazonCloneMERN",
  },
  {
    id: 5,
    title: "Prajwalan 2024",
    category: "Web Development",
    shortDesc:
      "PRAJWALAN 2K24 is an official event website designed to provide information about the annual technical fest.",
    videoUrl:
      "https://drive.google.com/file/d/1-oawxfF4A1c5jHvtSekGIIGsGOWNwZIA",
    githubUrl: "https://github.com/mounikapatharlapalli/Prajwalan2024",
  },
  {
    id: 6,
    title: "AmrutAahar",
    category: "Full Stack",
    shortDesc:
      "An e-commerce platform for healthy groceries with filters, wishlist, Razorpay integration.",
    videoUrl:
      "https://drive.google.com/file/d/1hw_wUQV8jx_5zuTiWDLUWb7DjFO59bTf",
    githubUrl: "https://github.com/mounikapatharlapalli/AmrutAahar",
  },
  {
    id: 7,
    title: "PranaKshetra",
    category: "Full Stack",
    shortDesc:
      "A wellness LMS platform for yoga and meditation built using the MEAN stack.",
    videoUrl:
      "https://drive.google.com/file/d/1nOa__nJhQejglSlaCXxe0amMbndPRrOJ",
    githubUrl: "https://github.com/mounikapatharlapalli/PranaKshetra-MEAN",
  },
  {
    id: 8,
    title: "Eco Mine",
    category: "Full Stack",
    shortDesc: "Platform to monitor carbon emissions in coal mining.",
    videoUrl:
      "https://drive.google.com/file/d/1x2tHq2qqrotwMsyFBhLGiRZYjG1kfs3e",
    githubUrl:"https://github.com/mounikapatharlapalli",
  },
  {
    id: 9,
    title: "Eva Cure",
    category: "Full Stack",
    shortDesc: "Health record management system.",
    videoUrl: "https://drive.google.com/file/d/1_hxKlB7NGvsE_9Yaiv1b0FwVZTD-lnpd",
    githubUrl:"https://github.com/mounikapatharlapalli",
  },
  {
    id: 10,
    title: "Smart Home Security",
    category: "IoT",
    shortDesc: "ESP32-CAM-based home monitoring with image capture and deep sleep mode.",
    videoUrl: "",
    githubUrl: "https://github.com/mounikapatharlapalli/Smart_Home_security",
  },
  {
    id: 11,
    title: "Automatic Plant Watering System",
    category: "IoT",
    shortDesc: "Uses Arduino to water plants based on soil moisture sensor.",
    videoUrl:
      "https://drive.google.com/file/d/19Yeg9PreMF59QlO36EVvwCej0sO2UyYn",
    githubUrl: "https://github.com/mounikapatharlapalli/Automatic-Plant-Watering-System",
  },
  {
    id: 12,
    title: "Deep Fake Detection",
    category: "Machine Learning",
    shortDesc: "Detect fake generated human faces using CNN models.",
    videoUrl:
      "https://drive.google.com/file/d/1cQc5DgwWV04rQH6KvVXCpiM9atc6ljch",
    githubUrl: "https://github.com/mounikapatharlapalli/Deepfake-image-detection",
  },
  {
    id: 13,
    title: "Real Time Animation",
    category: "Machine Learning",
    shortDesc: "Facial landmark detection to animate faces from static images.",
    videoUrl:
      "https://drive.google.com/file/d/1nBJhGHFkzY8tGo7Ji_yB5XiCNpYTj8Yh",
    githubUrl: "https://github.com/mounikapatharlapalli/Animation",
  },
  {
    id: 14,
    title: "Object Detection",
    category: "Machine Learning",
    shortDesc: "YOLO-based object detection model.",
    videoUrl:
      "https://drive.google.com/file/d/1lDktar-_6kKu_jEPJYxD5Y0EWlI9AL9l",
    githubUrl: "https://github.com/mounikapatharlapalli/",
  },
  {
    id: 15,
    title: "Pneumonia Detection",
    category: "Machine Learning",
    shortDesc: "Detect pneumonia from chest X-rays using deep learning.",
    videoUrl:
      "https://drive.google.com/file/d/1GJ_qKkEeIzxyZ76YbzXlo0Wlef1LBmJn",
    githubUrl: "https://github.com/mounikapatharlapalli/pneumonia",
  },
  {
    id: 16,
    title: "Car Accident Detection",
    category: "Machine Learning",
    shortDesc: "Sensor-based accident detection with alert mechanism.",
    videoUrl: "https://drive.google.com/file/d/1dzrFepIKH7pOrQP5VlTaOglHGrhWmsud",
    githubUrl: "https://github.com/mounikapatharlapalli/Accident_Detection",
  },
  {
    id: 17,
    title: "Hand Gesture Recognition",
    category: "Machine Learning",
    shortDesc: "Recognize hand gestures using OpenCV and CNNs.",
    videoUrl: "",
    githubUrl: "https://github.com/mounikapatharlapalli/Hand_Gesture",
  },
  {
    id: 18,
    title: "Symmetric Encryption using Mcrypt in Kali Linux",
    category: "Other",
    shortDesc: "Encrypt files using mcrypt on Linux system.",
    videoUrl: "",
    githubUrl:
      "https://github.com/mounikapatharlapalli/Symmetric-Encryption-using-Mcrypt-in-Kali-Linux",
  },
  {
    id: 19,
    title: "Editing",
    category: "Other",
    shortDesc:
      "Mana Chinni Kalalu – A creative corner for crafts, vlogs, rangolis, and cooking.",
    videoUrl:
      "https://www.youtube.com/shorts/znMBGKLEuuw?feature=share",
    githubUrl: "https://instagram.com/manachinnikalalu?igsh=OWlwNGQ5b2t5M3F6",
  },
];

const categories = ["All", "Web Development", "Machine Learning", "Full Stack", "IoT", "Other"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <nav className="categories-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <div className="btn-group">
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🎬 Demo
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
