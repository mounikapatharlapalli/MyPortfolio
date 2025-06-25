import React, { useEffect, useState } from 'react';
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';
import e4 from '../assets/e4.png';
import e5 from '../assets/e5.png';
import e6 from '../assets/e6.png';

const experienceData = [
  {
    image: e1,
    title: "Cyber Security Internship – APSCHE & IIDT (2024)",
    description: "I successfully completed an 8-week internship in Cyber Security conducted by the Andhra Pradesh State Council of Higher Education (APSCHE) in collaboration with the International Institute of Digital Technologies (IIDT), Tirupati, and Blackbuck Engineers Pvt. Ltd. This internship equipped me with practical knowledge in cybersecurity principles, threat detection, and protection mechanisms. My performance was graded as Excellent, reflecting a strong understanding and dedication throughout the program.",
  },
  {
    image: e2,
    title: "Data Engineering Virtual Internship – EduSkills & AWS Academy (Jan–Mar 2024)",
    description: "From January to March 2024, I participated in a 10-week virtual internship on Data Engineering, organized by EduSkills and supported by AWS Academy under the APSCHE initiative. This internship allowed me to gain hands-on experience in building data pipelines, working with cloud-based data tools, and understanding data warehousing concepts. It provided valuable exposure to data handling and processing in real-world scenarios."
  },
  {
    image: e4,
    title: "Elsoftron Internship (2024)",
    description: "In 2024, I worked as an ML Intern at Elsoftron, where I focused on applying machine learning techniques to solve practical problems. This internship provided valuable hands-on experience in data preprocessing, model training, and evaluation. It also helped me strengthen my understanding of core ML concepts and workflows, while collaborating with a team in a real-world development environment.",
  },
  {
    image: e3,
    title: "AI-ML Virtual Internship – EduSkills & AWS Academy (Sep–Nov 2023)",
    description: "During September to November 2023, I successfully completed a 10-week virtual internship in Artificial Intelligence and Machine Learning (AI-ML) offered by EduSkills and supported by AWS Academy in association with APSCHE. The program emphasized machine learning model development, data preprocessing, and deployment using AWS tools. It helped enhance my practical knowledge and confidence in building and evaluating AI models.",
  },
  {
    image: e5,
    title: "Viswam.AI – Summer of AI Internship (2025)",
    description: "I am currently engaged with Viswam.AI as part of their Summer of AI 2025 Internship. This internship focuses on advanced AI research and practical applications in real-world projects. It has allowed me to contribute to innovation-driven tasks, further strengthening my knowledge in AI tools, ethics, and solution design.",
  },
  {
    image: e6,
    title: "Blackbuck Education – Summer Internship (May–July 2025)",
    description: "I am currently working as a Java Full Stack Intern at Blackbuck Education from May to July 2025. During this internship, I am gaining hands-on experience in developing full-stack web applications using Java, Spring Boot, and modern frontend tools, while also improving my skills in real-time project development and teamwork.",
  }
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experienceData.length);
    }, 5000);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % experienceData.length
    );
  };

  const { image, title, description } = experienceData[currentIndex];

  const styles = {
    section: {
      padding: isMobile ? '40px 15px' : '80px 30px',
      background: 'linear-gradient(to right, rgb(189, 229, 255), #dbeafe)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      color: '#333',
      textAlign: 'center',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.8rem',
      marginBottom: isMobile ? '30px' : '60px',
      fontWeight: '800',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: isMobile ? '20px' : '30px',
    },
    arrow: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      cursor: 'pointer',
      background: '#1e3a8a',
      color: 'white',
      borderRadius: '50%',
      width: isMobile ? '36px' : '40px',
      height: isMobile ? '36px' : '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
    },
    imageWrapper: {
      maxWidth: isMobile ? '320px' : '400px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '12px',
      objectFit: 'cover',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'opacity 0.6s ease-in-out',
    },
    title: {
      fontSize: isMobile ? '1.4rem' : '1.8rem',
      color: '#1e40af',
      marginBottom: '12px',
      marginTop: isMobile ? '20px' : '0',
    },
    description: {
      maxWidth: '700px',
      margin: '0 auto',
      fontSize: isMobile ? '0.95rem' : '1rem',
      color: '#374151',
      lineHeight: '1.6',
      padding: '0 10px',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>MY EXPERIENCE</h2>
      <div style={styles.imageContainer}>
        <div style={styles.arrow} onClick={handlePrev}>&lt;</div>
        <div style={styles.imageWrapper}>
          <img src={image} alt={title} style={styles.image} />
        </div>
        <div style={styles.arrow} onClick={handleNext}>&gt;</div>
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </section>
  );
};

export default Experience;