import React, { useEffect, useState } from 'react';
import ce3 from '../assets/ce3.jpeg';
import ce2 from '../assets/ce2.jpeg';
import ce1 from '../assets/ce1.jpeg';
import pc4 from '../assets/pc4.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const achievementData = [
  {
    image: ce1,
    title: "Best Implementation Award – Prajwalan 2K24 Hackathon",
    description:
      "Me along with her team HiveForFem, received the Best Implementation Award at Prajwalan 2K24...",
  },
  {
    image: ce3,
    title: "CRUX 2025 – Hardware Project Expo (Runner-Up)",
    description:
      "I was awarded a Certificate of Appreciation for securing the Runner-Up position in CRUX 2025...",
  },
  {
    image: pc4,
    title: "NPTEL Elite Certificate – The Joy of Computing Using Python",
    description:
      "Mounika Patharlapalli successfully completed the NPTEL course titled The Joy of Computing Using Python...",
  },
  {
    image: ce2,
    title: "Internal Smart India Hackathon 2024",
    description:
      "I participated in the Internal Smart India Hackathon (SIH) 2024 as a member of Team Tech4Earth...",
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievementData.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementData.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievementData.length) % achievementData.length);
  };

  const { image, title, description } = achievementData[currentIndex];

  const styles = {
    section: {
      width: '100%',
      padding: '60px 20px',
      background: 'linear-gradient(to right, #dbeafe, #e0f2fe)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : '2.8rem',
      color: '#333',
      marginBottom: '40px',
      fontWeight: '800',
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      transition: 'all 0.5s ease',
    },
    imageWrapper: {
      flex: 1,
      minWidth: '280px',
      maxWidth: isMobile ? '90%' : '500px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      maxHeight: isMobile ? '250px' : '320px',
      borderRadius: '12px',
      objectFit: 'cover',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    textWrapper: {
      flex: 1,
      minWidth: '280px',
      textAlign: isMobile ? 'center' : 'left',
    },
    title: {
      fontSize: isMobile ? '1.4rem' : '1.8rem',
      color: '#1e40af',
      marginBottom: '12px',
    },
    description: {
      fontSize: isMobile ? '0.95rem' : '1rem',
      color: '#374151',
      lineHeight: '1.6',
    },
    arrows: {
      textAlign: 'center',
      marginTop: '30px',
    },
    icon: {
      fontSize: '1.5rem',
      color: '#1e3a8a',
      margin: '0 15px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>MY ACHIEVEMENTS & ACTIVITIES</h2>
      <div style={styles.content}>
        <div style={styles.imageWrapper}>
          <img src={image} alt={title} style={styles.image} />
        </div>
        <div style={styles.textWrapper}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
      <div style={styles.arrows}>
        <FaArrowLeft onClick={goPrev} style={styles.icon} />
        <FaArrowRight onClick={goNext} style={styles.icon} />
      </div>
    </section>
  );
};

export default Achievements;
