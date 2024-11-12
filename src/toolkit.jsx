import React, { useEffect, useRef } from 'react';
import html from './assets/html.png';
import Projects from './Projects';
import C from './assets/C.png';
import SQL from './assets/SQL.png';
import REACT from './assets/REACT.png';
import JS from './assets/JS.png';
import Css from './assets/CSS.png';
import './toolkit.css';
import laptop from './assets/laptop.png';

function Toolkit() {
    const labelsRef = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        const observerOptions = { threshold: 0.5 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, observerOptions);

        labelsRef.current.forEach(label => observer.observe(label));
        iconsRef.current.forEach(icon => observer.observe(icon));

        return () => observer.disconnect();
    }, []);

    const animations = ['slide', 'fade', 'bounce', 'zoom', 'rotate', 'spin'];

    return (
        < div  style={{width:'fit-content'}}>
            <div className='heading'>
                <h1><u>MY TOOLKIT</u> <img src={laptop} alt="Laptop Icon" className="toolkit-icon" style={{ height: '50px', width: '50px' }} /></h1>
            </div>
            <div className="toolkit-labels">
                {["HTML", "CSS", "SQL SERVER", "C#", "JAVASCRIPT", "REACT"].map((label, index) => (
                    <label
                        key={label}
                        ref={el => (labelsRef.current[index] = el)}
                        className="hidden"
                    >
                        {label}
                    </label>
                ))}
            </div>
            <div className="toolkit-icons">
                {[html, Css, SQL, C, JS, REACT].map((iconSrc, index) => (
                    <img
                        key={iconSrc}
                        src={iconSrc}
                        alt={`${iconSrc} Logo`}
                        className={`toolkit-icon hidden ${animations[index]}`} // Apply unique animation class
                        ref={el => (iconsRef.current[index] = el)}
                    />
                ))}
            </div>
            <Projects />
        </div>
    );
}

export default Toolkit;
