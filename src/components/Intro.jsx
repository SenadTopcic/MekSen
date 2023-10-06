import React, { useEffect, useState } from 'react';

import imgSrc from "../assets/img/404-page-not-found.png";

const Intro = () => {
  const [introData, setIntroData] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const getIntroData = () => {
  fetch('./src/data/intro-text.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully:', data);
      setIntroData(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  useEffect(() => {
    getIntroData();
    // Add an event listener to listen for animation end
    document.querySelector('.intro-body').addEventListener('animationend', handleAnimationEnd);
    return () => {
      // Remove the event listener when the component unmounts
      document.querySelector('.intro-body').removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  const handleAnimationEnd = () => {
    // Animation has ended, set showImage to true to display the image
    setShowImage(true);
  };

  return (
    <div className="intro-container intro-body">
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className='title'><h1>ISTQB Quiz App</h1></div>
          {introData ? (
            <div>
              {introData.quizDescription.map((sentence, index) => (
                <p key={index}>{sentence.text}</p>
              ))}
            </div>
          ) : (
            <p>No data available.</p>
          )}

        {showImage && (
        <img src={imgSrc} alt="Image Description" className="exit-image" />
      )}
        </div>
      </section>
    </div>
  );
};

export default Intro;
