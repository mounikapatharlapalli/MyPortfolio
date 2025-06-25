import React from 'react';

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    footer: {
      width: '100%',
      padding: isMobile ? '20px 15px' : '30px 20px',
      background: 'linear-gradient(to right,rgb(9, 57, 77), #203a43,rgb(43, 82, 99))',
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      lineHeight: '1.6',
      boxSizing: 'border-box',
    },
    linksWrapper: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
      gap: isMobile ? '6px' : '10px',
      flexWrap: 'wrap',
    },
    link: {
      color: '#90cdf4',
      textDecoration: 'none',
    },
  };

  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mounika Patharlapalli. All rights reserved.</p>
      <div style={styles.linksWrapper}>
        <a href="mailto:mounika212325@gmail.com" style={styles.link}>Email</a>
        <span style={{ color: '#90cdf4' }}>|</span>
        <a href="https://github.com/mounikapatharlapalli" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
