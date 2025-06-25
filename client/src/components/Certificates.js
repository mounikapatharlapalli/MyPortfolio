import React, { useEffect, useState } from 'react';
import pc1 from '../assets/pc1.png';
import pc2 from '../assets/pc2.png';
import pc3 from '../assets/pc3.png';
import pc5 from '../assets/pc5.png';
import pc6 from '../assets/pc6.jpg';
import pc7 from '../assets/pc7.jpg';
import pc8 from '../assets/pc8.png';
import pc9 from '../assets/pc9.png';
import pc10 from '../assets/pc10.png';
import pc11 from '../assets/pc11.png';
import pc12 from '../assets/pc12.jpeg';
import pc13 from '../assets/pc13.jpeg';
import pc14 from '../assets/pc14.jpeg';
import pc15 from '../assets/pc15.jpeg';
import pc16 from '../assets/pc16.jpeg';
import pc17 from '../assets/pc17.jpeg';
import pc18 from '../assets/pc18.png';
import pc19 from '../assets/pc19.png';
import pc20 from '../assets/pc20.png';

const certificateData = [
  {
    image: pc1,
    title: "GROWTHEXPO Workshop – SRKR Engineering College (August 2023)",
    description: "I participated in GROWTHEXPO, a workshop conducted by the Department of Computer Science and Engineering at SRKR Engineering College on 24th August 2023. The session focused on career growth strategies and creating ATS-friendly resumes, providing insights into building effective, professional profiles for job applications.",
  },
  {
    image: pc2,
    title: "Introduction to Artificial Intelligence – Infosys Springboard (August 2023)",
    description: "I successfully completed the Introduction to Artificial Intelligence course offered by Infosys Springboard on 22nd August 2023. This program covered the fundamentals of AI, including key concepts such as machine learning, neural networks, and real-world AI applications. It helped build a strong foundational understanding of AI technologies and their impact across industries.",
  },
  {
    image: pc3,
    title: "Introduction to Cybersecurity – Cisco Networking Academy (December 2023)",
    description: "I completed the Introduction to Cybersecurity course from Cisco Networking Academy on 22nd December 2023. This course provided comprehensive knowledge about cyber threats, network vulnerabilities, and defensive strategies. It also covered the global importance of cybersecurity and potential career opportunities in the field, enriching my awareness and skill set in cybersecurity.",
  },
 
  {
    image: pc5,
    title: " Cisco Networking Academy – JavaScript Essentials 1",
    description: "I achieved student-level credentials for completing the JavaScript Essentials 1 course offered by Cisco Networking Academy in collaboration with OpenEDG JS Institute. She learned JavaScript syntax, flow control, and problem-solving through programming. This course strengthened her ability to write and debug basic JavaScript programs effectively.",
  },
  {
    image: pc6,
    title: "Ministry of Parliamentary Affairs – Quiz Participation",
    description: "I received a Certificate of Participation from the Ministry of Parliamentary Affairs for taking part in the national-level online quiz titled Bharat - Loktantra ki Janani held on 27th November 2023. This shows her enthusiasm for civic knowledge and active engagement in governmental awareness programs.",
  },
  {
    image: pc7,
    title: "Kaggle – Intro to Machine Learning Certificate",
    description: "Awarded by Kaggle, this certificate confirms Mounika’s successful completion of the “Intro to Machine Learning” course on 3rd November 2023. The course, guided by renowned instructors Dan Becker and Alexis Cook, strengthened her understanding of machine learning algorithms and practical implementation.",
  },
  {
    image: pc8,
    title: "NPTEL Certificate – Computer Vision and Image Processing (IIT Guwahati)",
    description: "I completed the NPTEL course on Computer Vision and Image Processing – Fundamentals and Applications with a consolidated score of 50%. She gained fundamental knowledge in image processing concepts and tools, enhancing her understanding of visual data analysis in real-world applications.",
  },
  {
    image: pc9,
    title: "All India NCAT – Participation Certificate",
    description: "I received a participation certificate from All India NCAT conducted by Naukri Campus. Her involvement demonstrated exceptional enthusiasm and dedication toward competitive assessments, showcasing her readiness to engage with industry-relevant challenges.",
  },
  {
    image: pc10,
    title: "Internship Certificate – MNK Techfocus Pvt Ltd (Data Science & Gen AI)",
    description: "I completed a one-month internship in Data Science & Generative AI from MNK Techfocus Pvt Ltd. Despite being unpaid, she showed great dedication and professionalism, completing the project on time and meeting all requirements. This experience enhanced her practical knowledge in AI technologies.",
  },
  {
    image: pc11,
    title: "be10x – AI Tools Workshop Completion",
    description: "I participated in a 1-day AI Tools Workshop conducted on 10th March 2024 by be10x. She explored various AI-based tools useful in enhancing productivity and automating tasks. The session gave her practical exposure to the rapidly growing world of AI utilities. ",
  },
  {
    image: pc12,
    title: "Hexart.In AI Foundation Certificate",
    description: "This certificate acknowledges Mounika’s completion of the foundational training on Artificial Intelligence on 26th January 2024, also conducted by Hexart.In. It marks her strong interest in AI and lays the groundwork for deeper explorations in machine learning and intelligent systems.",
  },
  {
    image: pc13,
    title: "Hexart.In AI Advance Certificate",
    description: "I successfully completed the advanced training on Artificial Intelligence through Hexart.In on 26th January 2024. This course was supported by organizations such as Hexagon, Li2 Technologies, and NASSCOM Foundation. The training enhanced her AI knowledge and advanced her technical competencies in the field.",
  },
  {
    image: pc14,
    title: "SRKR Orator Championship – Semifinalist Certificate (2023)",
    description: "I  secured a position as a semifinalist in the SRKR Orator Championship 2023. This certificate was awarded for her impressive performance in the contest, organized by Language Nest and S.R.K.R. Toastmasters Club. Her selection among the top contestants showcases her refined communication and oratory skills.",
  },
  {
    image: pc15,
    title: "SRKR Orator Championship – Semifinalist Certificate (2023)",
    description: "I qualified as a participant in the prestigious Master Orator Championship organized by District 126. The event was held at SRKR College on 8th September 2023. Her qualification highlights her public speaking potential and willingness to compete at a higher level in oratory challenges.",
  },
  {
    image: pc16,
    title: "Design Thinking Fundamentals Certificate",
    description: "I  participated in the “Design Thinking Fundamentals” workshop conducted by The Institution of Engineers (India), Bhimavaram Local Centre, in association with AICTE IDEALab and SRKR Engineering College. Held on 16th September 2023, this workshop provided her with essential problem-solving and creative thinking skills important in engineering and innovation.",
  },
  {
    image: pc17,
    title: "SRKR Orator Championship Certificate (2023-2024)",
    description: "I was recognized for her impressive performance in the SRKR Orator Championship for the academic year 2023–2024. This honor was granted by the Department of English and the Training and Placement Cell in association with the SRKR Toastmasters Club, further validating her consistent excellence in public speaking.",
  },
  {
    image: pc18,
    title: "ExcelR – Git and GitHub Training",
    description: "I completed a 20-hour live training program on Git and GitHub from ExcelR between 24th Jan to 7th Feb 2024. The course provided her with essential version control skills and hands-on experience with repositories, commits, and collaboration using GitHub.",
  },
  {
    image: pc19,
    title: "ICONCODERZ-2K24 – Coding Competition Participation",
    description: "I participated actively in the internal coding competition ICONCODERZ-2K24, organized by SRKR Coding Club. This certificate reflects her enthusiasm for coding challenges and her involvement in campus-level tech events aimed at skill enhancement.",
  },
  {
    image: pc20,
    title: "ML-CONNECT Workshop – SRKR College (Machine Learning)",
    description: "I participated in a two-day Machine Learning Workshop (ML-CONNECT) organized by the Department of CSE at SRKR Engineering College. Her keen understanding and practical implementation of ML concepts were acknowledged, and her contribution helped make the workshop a success.",
  }
];


const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificateData.length);
    }, 5000);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificateData.length) % certificateData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificateData.length);
  };

  const { image, title, description } = certificateData[currentIndex];

  const styles = {
    section: {
      width: '100%',
      padding: isMobile ? '40px 20px' : '80px 30px',
      background: 'linear-gradient(to right, #e0f2fe, #f0f9ff)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      overflowX: 'hidden',
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : '2.8rem',
      color: '#333',
      marginBottom: isMobile ? '30px' : '60px',
      fontWeight: '800',
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: isMobile ? 'center' : 'left',
    },
    text: {
      flex: 1,
      minWidth: '280px',
      paddingRight: isMobile ? '0' : '20px',
    },
    title: {
      fontSize: isMobile ? '1.4rem' : '1.8rem',
      color: '#1e3a8a',
      marginBottom: '12px',
      fontWeight: '700',
    },
    description: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#334155',
      lineHeight: '1.7',
    },
    imageWrapper: {
      flex: 1,
      minWidth: '280px',
      maxWidth: '500px',
      textAlign: 'center',
    },
    certImg: {
      width: '100%',
      maxWidth: isMobile ? '300px' : '500px',
      maxHeight: '320px',
      borderRadius: '10px',
      objectFit: 'cover',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    },
    arrows: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px',
      gap: '20px',
    },
    arrowBtn: {
      fontSize: '1rem',
      backgroundColor: '#bfdbfe',
      color: '#1e40af',
      padding: '10px 22px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>MY CERTIFICATIONS</h2>
      <div style={styles.content}>
        <div style={styles.text}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.description}>{description}</p>
        </div>
        <div style={styles.imageWrapper}>
          <img src={image} alt={title} style={styles.certImg} />
        </div>
      </div>
      <div style={styles.arrows}>
        <button onClick={prevSlide} style={styles.arrowBtn}>← Previous</button>
        <button onClick={nextSlide} style={styles.arrowBtn}>Next →</button>
      </div>
    </section>
  );
};

export default Certificates;