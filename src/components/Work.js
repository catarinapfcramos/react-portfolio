import React from 'react';
import "./Work.css";

function Work() {
    return (
        <div className="Work">
            <h2 className="text-center">What I've been working on!</h2>
            <div className="row work-row odd-row">
                <div className="col-6 image">
                    <img src="/images/project1.png" alt="" />
                </div>
                <div className="col-6">
                    <div className="details">
                        <h3>Weather App</h3>
                        <p>This was the first project I have built.
                        It is a weather app built with Vanilla JavaScript.
                        Go check the weather in your city!</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://vigilant-shirley-9d6c6d.netlify.app/">
                            Go to the Weather App
                        </a>
                    </div>
                </div>
            </div>
            <div className="row work-row even-row">
                <div className="col-6">
                    <div className="details">
                        <h3>React Weather App</h3>
                        <p>The same weather app but using React.js. Go check the weather in your city</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://elegant-easley-bf24f3.netlify.app">
                            Go to the Weather App
                        </a>
                    </div>
                </div>
                <div className="col-6 image">
                    <img src="/images/project2.png" alt="" />
                </div>
            </div>
            <div className="row work-row odd-row">
                <div className="col-6 image">
                    <img src="/images/project3.png" alt="" />
                </div>
                <div className="col-6">
                    <div className="details">
                        <h3>React Dictionary App </h3>
                        <p>This is another React project, where I have built a dictionary app (English)</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://zealous-lamarr-86c9d3.netlify.app">
                            Go to the Weather App
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work
