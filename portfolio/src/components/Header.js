import React from 'react';
import '../styles/styles.css';

const Header = () => {
  const title = "S. Ali Ashrafizadeh";
  const subtitle = "Energy System Simulator & Software Developer";

  const headerStyle = {
    backgroundImage: 'url("/images/Header2.jpg")', // Replace with the correct path to your image
    backgroundSize: '', // Use 'cover' to ensure the background image covers the entire header
    backgroundPosition: '',
    backgroundRepeat: 'no-repeat',
    height: '350px', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column', // Display elements in a column
    justifyContent: 'flex-start', // Move content to the top of the header
    alignItems: 'flex-end', // Move content to the right of the header
    padding: '20px', // Add padding to create some space from the edges
    color: '#fff', // Set text color to white or another contrasting color
    textAlign: 'right', // Align text to the right
  };

  const titleStyle = {
    marginBottom: '0px', // Add some space between the title and image
    marginRight: '100px',
    padding: '20px'
  };

  const subtitleStyle = {
    fontSize: '1.2em', // Adjust the font size as needed
    fontWeight: 'bold', // Make the subtitle bold
    marginLeft: '100px',
  };

  return (
    <header style={headerStyle}>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div >
        <h1 style={titleStyle}>{title}</h1>
        <p style={subtitleStyle}>{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
