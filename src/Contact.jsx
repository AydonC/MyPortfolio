import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Github from './assets/github_3291685.png'
import LinkedIn from './assets/linkedin_3536569.png'
import Email from './assets/email.png'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    if (window.confirm("Are you sure you want to send?")) {
      e.preventDefault();
      
      const serviceID = 'service_hyq3kdd';
      const templateID = 'template_4yg3g0g';
      const userID = 'PIJ7cgnrPC82v5YUO';

      emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        });
      setFormData({ name: '', email: '', message: '' });
    }else {
      console.log("Canceled")
    }};

    useEffect(() => {
      const observerOptions = { threshold: 0.5 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      }, observerOptions);

      if (formRef.current) {
        observer.observe(formRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div className='con'>
        <div className="contact-page">
          <div className='quickMessage'>
            <h3><u>Let's Connect!</u></h3>
            <p>If you ever want to connect and <br></br> discuss some ideas, feel free <br></br>  to reach out to me. Click on one<br></br>  of the links below to connect with <br></br> me via socials or pop a message using <br></br> the  form on the right.</p>

            <h2>Find me on:</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/aydon-jon-cupido-22b513286">
              <img
                src={LinkedIn}
                style={{ height: '50px', width: '50px' }}
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/AydonC">
              <img
                src={Github}
                style={{ height: '50px', width: '50px' }}
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:cupido.aydon@gmail.com">
              <img
                src={Email}
                style={{ height: '50px', width: '50px' }}
              />
            </a>

          </div>
          <div ref={formRef} className={`contact-form-container ${isVisible ? 'slide-in' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className='footerDiv'><footer className='footer'>Developed and Designed By Aydon :)</footer></div>
      </div>
    );
  };

  export default Contact;
