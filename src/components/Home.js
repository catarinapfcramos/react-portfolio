import React from 'react';
import "./Home.css";
import SimpleSlider from "./SimpleSlider";

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
           
            <section className="container carousel">
                <h2 className="text-center">My Portfolio</h2>
                <SimpleSlider />
                <a className="btn button" href="/work" title="Work Portfolio">
          Check out my work
          </a> 
            </section> 
                            
        </div>
    )
}

export default Home
