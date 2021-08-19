import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="Contact">
          
          <h2 >Wanna work with me?</h2>
          <a className="btn button get-in-touch-button" href="mailto:catarinacorreiaramos@gmail.com">
          Get In Touch
          </a>  
          <h6><i className="fas fa-envelope"></i> Email</h6>
            <a href="/" className="email-link">
              catarinacorreiaramos@gmail.com
            </a>
          <h6><i className="fab fa-linkedin-in"></i> Linkedin</h6>
            <a href="/" title="LinkedIn Profile" target="_blank" rel="noreferrer" className="email-link">
            Catarina Ramos
            </a>
          
        </div>
    )
}

export default Contact
