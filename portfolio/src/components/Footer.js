import React from 'react';

const Footer = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column', // Adjust to column layout
    alignItems: 'right',
  };

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row-reverse', // Align images in a row and reverse the order
  };

  const imageStyle = {
    width: '2%',
    height: 'auto',
    marginRight: '30px',
  };

  return (
    <footer style={containerStyle}>
      <div>
        <p>&copy; S.Ali Ashrafizadeh_ASA</p>
      </div>
      
      <div style={imageContainerStyle}>
        <img src="/images/icon-email.png" alt="Instagram_Icon" style={imageStyle} />
        <img src="/images/icon-github.png" alt="GitHub_Icon" style={imageStyle} />
        <img src="/images/icon-facebook.svg.png" alt="Facebook_Icon" style={imageStyle} />
        <img src="/images/icon-Instagram.svg.png" alt="Instagram_Icon" style={imageStyle} />
        <img src="/images/icon-LinkedIn.svg.png" alt="LinkedIn_Icon" style={imageStyle} />
        
      </div>
    </footer>
  );
};

export default Footer;
