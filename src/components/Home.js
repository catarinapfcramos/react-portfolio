import React from 'react';
import "./Home.css";

import ImgSlider from "./ImgSlider";

function Home() {
    return (
        <div className="Home">
            <section className="profile">
                <div className="photo">
                    <img src="/images/profile.jpg" alt="my face"/>
                </div>
                <div className="details">
                    <h2>Hi, I'm Catarina Ramos.</h2>
                    <span>Front-End developer based in Porto, Portugal</span>
                    <a className="btn button get-in-touch-button"
                            href="mailto:catarinacorreiaramos@gmail.com">Get In
                            Touch</a>
                    <div className="socials">
                        <a href="https://github.com/catarinapfcramos" target="_blank" rel="noreferrer">
                            <i className="fa fa-github-alt fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/catarinapfcramos/" target="_blank" rel="noreferrer">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section className="about">
                <h2 className="text-center">About me</h2>
                <p>I have a PhD in Geotechnical Engineering and recently I have started learning (and loving) code. I am looking for a great opportunity in the development world.
                            Some of my main strengths include planning and organisation, problem solving, critical thinking, and resilience. I have
                            collaborated with multicultural and multidisciplinary teams, so I am used to different work environments.
                </p>
                                   
            </section>
           
                <ImgSlider />
            
                 
        </div>
    )
}

export default Home
