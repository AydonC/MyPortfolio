import React, { useEffect, useRef } from "react";
import "./About.css";
import Toolkit from "./toolkit";
import People from './assets/people.png'
import Avatar from './assets/avatar.jpg'

const AboutMe = () => {
  const titleRef = useRef(null);
  const profilePicRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove to re-trigger animation
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (profilePicRef.current) observer.observe(profilePicRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="about-me-container" id="AboutMe">
       
          <h1 className="title hidden" ref={titleRef}><u>ABOUT ME <img src={People} alt=""style={{height:'100px',width:'100px'}} /></u></h1>
          <div className="profile-section">
            <img
              src={Avatar}
              alt="Profile"
              className="profile-pic hidden"
              ref={profilePicRef}
              height={'400px'}
              width={'400px'}
            />
            <div className="description" ref={descriptionRef}>
              <p>
                Thank you for engaging! I am Aydon Cupido and I graduated <br></br>
                from <a href="https://www.eduvos.com" style={{cursor:'pointer',color:'brown'}}>Eduvos Private Institution</a> with a Higher Certificate in  <span style={{color:'chocolate'}}><strong>Software Development</strong></span> <br></br>
                and a Higher Certificate in  <span style={{color:'chocolate'}}><strong>Software Engineering</strong></span> and I <br></br>
                am currently busy with another Certificate in<br></br> <span style={{color:'chocolate'}}><strong>Systems Development</strong></span> at <a href="https://redacademy.co.za" style={{cursor:'pointer',color:'brown'}}>redAcademy.</a><span className="smallText">     (Cohort Team25A!)</span>.
              </p>
              <p>
                Other than coding, I like spending my time with friends and play<br></br>
                video games, go hiking and even play some guitar.
              </p>
            </div>
          
        </div>
        
      </div>
      <Toolkit />
      </>
      

  );
};

export default AboutMe;
