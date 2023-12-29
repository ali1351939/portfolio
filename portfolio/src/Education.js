// Education.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/styles.css';

const Education = () => {
  const jobImagePaths = [
    '/images/Vaniercollege.webp',
    '/images/waterlooUniversity.jpg',
    '/images/Header1.jpg',
    '/images/AzadTehran.jpg',
    '/images/SceinceAndTechUniversity.jpg',
    '/images/IsfahanUniversity.jpg',
  ];

  const jobExplanations = [
    'Vanier College, Software Development',
    'University of Waterloo(UW), Sabatical ',
    'Energy Research Center(Located in UW),Sabatical ',
    'Tehran University of Science & Research ,Energy Engineering, Ph.D',
    'Iran University of Science and Technology,Chemical Engineering, M.Sc ',
    'Isfahan University of Science & Technology, Chemical Engineering, B.Sc',
  ];

  const [currentJobImage, setCurrentJobImage] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const jobImageSlideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 10000 },
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
          <h2>Welcome to Education page</h2>

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

export default Education;
