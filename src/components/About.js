import React from 'react';
import "./About.css";

function About() {
    return (
        <div className="About">
            <section className="about-me">
                <h2 >About me</h2>
                < div className="row row-presentation">
                    <div className="col text">
                        <p> Hello, I'm Catarina and I'm from Porto, in Portugal. I love books, bullet journaling, live music and sunny days. I have a PhD in Geotechnical Engineering.
                            I have always loved to learn and try new things, so I have recently started to learn code with the help of SheCodes workshops and YouTube! 
                            I am looking for a great opportunity in the development world. Some of my main strengths include planning and organization, problem solving, 
                            critical thinking, and resilience. I have collaborated with multicultural and multidisciplinary teams, so I am used to different work environments.
                        </p>
                        <a className="btn button" href="mailto:catarinacorreiaramos@gmail.com">
                            Get In Touch
                        </a> 
                    </div>
                    <div className=" col image">
                        <img src="/images/profile2.jpg" alt="my face" height="300px" /> 
                    </div>
                </div>   
                <div class="row row-skills">
                    <div class="col-sm skills">
                        <i class="fas fa-laptop"></i>
                        <h3>Front-end</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Bootstrap</li>
                                <li>API | Ajax</li>
                            </ul>
                    </div>
                
                    <div class="col-sm skills">
                        <i class="fas fa-star"></i>
                        <h3>Tools</h3>
                        <ul>
                            <li>Github</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                    <div class="col-sm skills">
                        <i class="fas fa-globe"></i>
                        <h3>Languages</h3>
                        <ul>
                            <li>Portuguese (native language)</li>
                            <li>English - C1</li>
                            <li>Spanish - B1</li>
                            <li>German - A1</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
