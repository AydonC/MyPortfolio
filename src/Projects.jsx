import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import Contact from './Contact';
import Pro from './assets/project.png';

const cardData = [
  { title: 'Note Taking App', body: 'App for taking notes Made with C# Windows Forms', link: 'https://github.com/AydonC/NoteTakingApp.git' },
  { title: 'Hangman', body: 'Hangman Game Made with C# Windows Forms', link: 'https://github.com/AydonC/Hangman.git' },
  { title: 'Snowboarder', body: 'Snowboarding game Made with Unity and C#.', link: 'https://github.com/AydonC/Snowboarder.git' },
  { title: 'Atm Machine', body: 'Atm simulator Made with C# and SQL server', link: 'https://example.com/atm-machine' },
  { title: 'Task Management System', body: 'Task tracking web application Made with C#, React, SQL server', link: 'https://example.com/task-management' },
];

const Projects = () => {
  const [flipped, setFlipped] = useState(Array(cardData.length).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          setTimeout(() => {
            setFlipped((prev) => {
              const newFlipped = [...prev];
              newFlipped[index] = true;
              return newFlipped;
            });
          }, index * 300);
        } else {
          setFlipped((prev) => {
            const newFlipped = [...prev];
            newFlipped[index] = false;
            return newFlipped;
          });
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div className="projects-container">
        <div className='heading'>
          <h1 style={{ fontSize: '60px' }}>
            <u>PROJECTS</u> <img src={Pro} alt="" style={{ height: '60px', width: '60px' }} />
          </h1>
        </div>
        <div className="card-container">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`card card-${index} ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                  <button onClick={() => handleButtonClick(card.link)}>GitHub</button>
                </div>
                <div className="card-back">
                  <br /><br /><br /><br />
                  <div className="background-overlay"></div>
                  <h4>{card.title}</h4>
                  <p>Click for more info!</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Projects;
