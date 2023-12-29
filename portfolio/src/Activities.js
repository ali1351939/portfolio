import React, { useState } from 'react';
import './styles/styles.css';

const Activities = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleDivClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const jobImagePaths = [
    '/images/KoreanIcon.webp',
    '/images/DesalinationIcon.jpg',
    '/images/JapanIcon.jpg',
    '/images/Mybook.jpg',
    '/images/ChemicalPhysicsLetterIcon.jpg',
    '/images/EntropyIcon.jpg',
    '/images/PirastehIcon.jpg',
    '/images/LandSlideIcon.jpg',
  ];

  const explanations = [
    'Exergetic and environmental performance improvement in cement ...',
    'Exergy analysis of humidification_dehumidification_desalination ...',
    'Exergy Analysis of Distillation Column ...',
    'Mass & Energy Balances (Text book)',
    'Thermodynamic paths for calculating energy balance ...',
    'Application of Second Law Analysis in Heat Exchanger ...',
    'Green House Gases Emission Reduction in Cement ... ',
    'Developing an algorithm for automated geometric analysis ...',
  ];

  const fileNames = [
    'Korean Journal.pdf',
    'Desalination.pdf',
    'JAPAN-JOURNAL.pdf',
    'Seyed_Ali_Ashrafizadeh,Zhongchao_Tan_(auth.)_Mas.pdf',
    'Chemical Physics Letter-2018.pdf',
    'entropy-21-00606.pdf',
    'JAPAN-JOURNAL.pdf',
    'LandSlide.pdf',
  ];

  const handleClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleDownload = (fileName) => {
    // Replace 'server/uploads/' with the actual path where your files are stored
    const downloadLink = `/server/uploads/${fileName}`;
    // Create an anchor element
    const anchor = document.createElement('a');
    // Set the href attribute to the file URL
    anchor.href = downloadLink;
    // Set the download attribute to specify the file name
    anchor.download = fileName;
    // Append the anchor to the document body
    document.body.appendChild(anchor);
    // Trigger a click on the anchor to start the download
    anchor.click();
    // Remove the anchor from the document body
    document.body.removeChild(anchor);
  };

  return (
    <div className="about-container">
      <div className="image-and-text-container">
        <div className="right-content"></div>
      </div>

      {/* Display circular images arranged in a circle around the page */}
      <div className="circle-container">
        {jobImagePaths.map((imagePath, index) => (
          <div key={index} className="custom-div" onClick={() => handleClick(index)}>
            <img src={imagePath} alt={`Div Image ${index + 1}`} className="div-image" />
            {selectedImageIndex === index && (
              <div className="explanation-modal">
                <p>{explanations[index]}</p>
                {fileNames[index] && (
                  <button onClick={() => handleDownload(fileNames[index])}>Download</button>
                )}
                <button onClick={handleCloseModal}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
