// About.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/styles.css';

const About = () => {
  const jobImagePaths = [
    '/images/dezfulearth.jpg',
    '/images/dezful.jpg',
    '/images/primarySchool.jpg',
    '/images/bombing.jpg',
    '/images/DezfulUniversity.jpg',
    '/images/MassEnergyCourse.png',
    '/images/ThermodynamicCourse.webp',
    '/images/heat_transferCourse.png',
    '/images/exergy.png',
    '/images/programming.jpg',
    '/images/waterlooUniversity.jpg',
    '/images/Header1.jpg',
    '/images/Mybook.jpg',
    '/images/Vaniercollege.webp',
    '/images/software-development-specialist.jpg',
  ];

  const jobExplanations = [
    'Born in the Dezful city, located in the southwest of Iran',
    'Favorite sport: Swimming. ...Most teenagers and young people in Dezful get used to swimming in this beautiful river.',
    'Elementary, middle and high school education in Dezful',
    'From the third year of elementary to the third year of high school, during the war between Iran and Iraq and the bombing of cities',
    'University of Dezful... as Lecturer and Researcher',
    'Mass and Energy Balances attracted my attention from the first years in the University',
    'Thermodynamics... one of my favorite fields',
    'Heat Transfer is another of my favorite fields',
    'Combination of Thermodynamics and Heat Transfer led me to exergy during my PhD.',
    'During the Master project, I realized the importance of Modeling and Simulation using Softwares',
    'Sabbatical at the University of Waterloo became the basis for immigration to Canada',
    'At the University of Waterloo, I was able to work on my passion.',
    'Publishing my book during the sabbatical',
    'Continuing education in Software Development at Vanier college',
    'Working as an Energy Simulator & Software Developer',
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
          <h2>Welcome to About page</h2>

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

          {/* Button container */}
          <div className="button-container">
            <button onClick={prevJobImage}>Previous</button>
            <button onClick={nextJobImage}>Next</button>
          </div>
        </div>

        <div className="right-content">
          <p>{jobExplanations[currentJobImage]}</p>
        </div>
      </div>

      <br />
      <br />
      <p className="paragraphStyle">
        I am S. Ali Ashrafizadeh. Being the only child of my mother created a unique and profound bond between us. I fondly recall her unwavering support and heartfelt wishes for my success and respectability. Despite losing her in 2002, I carry her spirit with me, constantly striving to fulfill the vision she had for me.
      </p>
  
      <p className="paragraphStyle"> My belief in the paramount importance of environmental issues, particularly global warming, has been a driving force in my life. Influenced by a high school chemistry teacher and captivated by the subject, I pursued Chemical Engineering in university. However, I soon realized the distinctions between "Chemical Engineering" and "Chemistry." Concerned about pollution from chemical industries, I delved into areas like Thermodynamics and Heat Transfer. </p>
  
      <p className="paragraphStyle"> My academic journey took a pivotal turn during a course on "Basic Principles and Calculation in Chemical Engineering," where my interest in calculating combustion gases' environmental impact ignited. This curiosity eventually led to the publication of a book on <a href="https://g.co/kgs/nKY3S5" target="_blank" rel="noopener noreferrer" style={{ color: 'red', textDecoration: 'underline' }}>
        Mass and Energy Balances
      </a>,
      during my time in Canada.</p>
  
      <p className="paragraphStyle"> Focused on addressing environmental challenges, my Bachelor's project centered on "Waste Water Treatment," while my Master's work delved into the environmental impact of Cement industries. It was during my Master of Science that I recognized the potential of software in Modeling, Simulation, and Optimization to reduce energy consumption and greenhouse effects.</p>
  
      <p className="paragraphStyle"> In realizing my mother's aspirations, I discovered that my expertise in Energy and Software could significantly contribute to helping people. As a university lecturer and researcher, my primary goal was to impart knowledge to the next generation. It was during this phase that I crossed paths with my now-wife, marking the commencement of a significant chapter in my life. With her unwavering support, she became a source of encouragement and hope, guiding me through the subsequent stages of my journey. Concurrently, I embarked on an<a href="https://www.zigurat-energy.com/ziguratnewen/" target="_blank" rel="noopener noreferrer" style={{ color: 'red', textDecoration: 'underline' }}> entrepreneurial venture,</a>, collaborating with my wife and friends, focusing on Energy Optimization and renewable solutions.
      </p>
    </div>
  );
};

export default About;
