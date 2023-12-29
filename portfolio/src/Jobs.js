import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/styles.css';

const Jobs = () => {
  const jobImagePaths = [
   
    
    '/images/CRC.jpg',
    '/images/DezfulUniversity.jpg',
    '/images/zigurat.png',
    '/images/waterlooUniversity.jpg',
    '/images/Header1.jpg',
    '/images/Dollarama.jpg',
   
  ];

  const jobExplanations = [
    'Researcher at the Cement Research Center of Iran University of Science and Technology'
  ,'Lecturer and researcher at Azad University of Dezful','Managing Director and R&D Manager at Behsazan Energy Ziggurat Company',
    'Sabbatical leave at University of Waterloo ','Energy Research Center of University of Waterloo',
    'Coordinator at Dollarama Co.',
  ];

  const [currentJobImage, setCurrentJobImage] = useState(0);

  const jobImageSlideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 3000 },
  });

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
      nextJobImage();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-container">
      <div className="image-and-text-container">
        <div className="left-content">
          <h2>Welcome to About page</h2>
          <animated.div style={jobImageSlideAnimation} className="job-image-container">
            <div className="image-wrapper">
              <img
                className="job-image"
                src={jobImagePaths[currentJobImage]}
                alt={`Job Slide ${currentJobImage + 1}`}
              />
            </div>
            <button onClick={prevJobImage}>Previous</button>
            <button onClick={nextJobImage}>Next</button>
          </animated.div>
        </div>

        <div className="right-content">
          <p>{jobExplanations[currentJobImage]}</p>
        </div>
      </div>
  <br></br>
      {/* Divide the page into four columns */}
      <div className="four-columns">
      <div className="column"><h4> Dollarama Co.</h4><h5>Coordinator</h5><h6>- Software Control Quantity Usage </h6>
        <h6>- Sampling - Control Quality</h6> <h6>- Team Members Control and Management</h6> </div>
        <div className="column"><h4>Zigurat Energy Optimization Co.</h4><h5>R & D and project manager</h5> 
        <h6>- Website Design of the Company. (Figma, HTML, CSS, JavaScript) </h6><h6>- Financial Analyzing and  Market Research.</h6>
        <h6> - Team Managing. (Microsoft Project, Mio)</h6><h6>- Analysis of Design Components Performed by Technical Department. (AutoCAD, BMS) </h6>
        <h6> - Preliminary Estimation of Prices. </h6><h6>- Order the Devices from Relevant Companies and Issue Contracts with Contractors.</h6> 
        <h6>- Monitoring and managing the Progress of Projects. (Microsoft Project, Mio)</h6><h6> - Financial Tracking of Projects. </h6>
        <h6>- Follow up to do Warranty and After Sales Service Matters.</h6></div>
        <div className="column"><h4>University of  Waterloo</h4><h5>Researcher</h5>
        <h6>- Simulate of Heat Exchangers Systems to Apply the Second Law of Thermodynamics.</h6>
        <h6> - Modeling of Thermodynamic paths for calculating energy balance in systems containing nanoparticles.</h6>
        <h6> <a href="https://g.co/kgs/nKY3S5" target="_blank" rel="noopener noreferrer" style={{ color: 'red', textDecoration: 'underline' }}>
    - Mass and Energy Balances
  </a>, </h6></div>
        
        <div className="column"><h4>Azad Unversity of Dezful </h4><h5>Lecturer & Researcher</h5>
        <h6>Teaching courses in chemical and mechanical engineering, ex. "Mass and Energy balance", "Thermodynamics", "Heat Transfer",
         "Unit Operation Laboratory","Selective Subjects in Energy" </h6>
        <h6>Research in fields such as: "Modeling and simulation of processes","Pinch technology",
        "Energy saving","Exergy analysis", "Process optimization", "CO2 capture" and "  Nanothermodynamics" </h6>
        <h6>Design, Installation and Calibration of laboratories</h6>
        </div>
      </div>
    </div>
  );
};

export default Jobs;