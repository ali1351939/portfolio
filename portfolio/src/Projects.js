// Projects.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/styles.css';

const Projects = () => {
  const jobImagePaths = [
    '/images/DatabaseProject.png',
    '/images/WebServicesProject.png',
    '/images/TWA_Project.png',
    '/images/HeatTransferLabIsfahan.jpg',
    '/images/wasteWaterTreatment.jpg',
    '/images/burningZoneCement.jpg',
    '/images/DeltaLab.jpg',
    '/images/Gronoble.jpg',
    '/images/UnitOpDez.jpg',
    '/images/HeatLabDeaz.jpg',
    '/images/OilLabDez.jpg',
    '/images/ControlLabDez.jpg',
    '/images/software-development-specialist.jpg',
  ];

  const jobExplanations = [
    'Environmental and Economic Impact of Power Plants using Database Analysis ',
    'Design a Server for Cryptocurrency Services ',
    'Design an E-Commerce Website for Optimize Heating and Cooling ',
    'Setting up of Heat Transfer Laboratory',
    'Waste Water Treatment of waters containing formaldehyde',
    'Modeling and Designing of cement burning zone',
    'DeltaLab company cooperation to design unit operation devices',
    'DeltaLab company is located in Grenoble city in France',
    'Setting up and installation of unit operation Laboratory',
    'Setting up and installation of Heat transfer Laboratory',
    'Setting up and installation of Oil Laboratory',
    'Setting up and installation of process control Laboratory',
    'Modeling & Simulating of several projects',
  ];

  const [currentJobImage, setCurrentJobImage] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const jobImageSlideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 3000 },
  });

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const nextJobImage = () => {
    setCurrentJobImage((prevIndex) => (prevIndex + 1) % jobImagePaths.length);
  };

  const prevJobImage = () => {
    setCurrentJobImage((prevIndex) =>
      prevIndex === 0 ? jobImagePaths.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isMouseOver) {
        nextJobImage();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isMouseOver]);

  return (
    <div className="about-container">
      <div className="image-and-text-container">
        <div className="left-content">
          <h2>Welcome to Projects page</h2>

          {/* Animated job image slideshow */}
          <animated.div
            style={jobImageSlideAnimation}
            className="job-image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-wrapper">
              <img
                className="job-image"
                src={jobImagePaths[currentJobImage]}
                alt={`Job Slide ${currentJobImage + 1}`}
              />
            </div>
          </animated.div>

          <div className="button-container">
            <button onClick={prevJobImage}>Previous</button>
            <button onClick={nextJobImage}>Next</button>
          </div>
        </div>

        <div className="right-content">
          <p>{jobExplanations[currentJobImage]}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
