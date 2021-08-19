import React from 'react';
import "./About.css";

function About() {
    return (
        <div className="About">
            <section className="about-me">
                <h2 >About me</h2>
                <p> Hello, I'm Catarina and I'm from Porto, in Portugal. 
                    I have a PhD in Geotechnical Engineering and recently I have started learning (and loving) code. 
                    I am looking for a great opportunity in the development world.
                Some of my main strengths include planning and organisation, problem solving, critical thinking, and resilience. I have
                collaborated with multicultural and multidisciplinary teams, so I am used to different work environments.
                </p>
                   
                <div class="row">
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
