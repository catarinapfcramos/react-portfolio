import React from 'react';
import "./Work.css";

function Work() {
    return (
        <div className="Work">
            <h2>What I've been working on!</h2>
            <div className="row work-row odd-row">
                <div className="col-sm image">
                    <img src="/images/weather.png" alt="" />
                </div>
                <div className="col-sm">
                    <div className="details">
                        <h3>Weather App</h3>
                        <p>This was the first project I have built.
                        It is a weather app built with Vanilla JavaScript with an hourly forecast.
                        Go check the weather in your city!</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://vigilant-shirley-9d6c6d.netlify.app/">
                            Go to Weather App
                        </a>
                    </div>
                </div>
            </div>
            <div className="row work-row even-row">
                <div className="col-sm">
                    <div className="details">
                        <h3>React Weather App</h3>
                        <p>The same weather app but using React.js and with a daily forecast. Go check the weather in your city!</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://elegant-easley-bf24f3.netlify.app">
                            Go to Weather App
                        </a>
                    </div>
                </div>
                <div className="col-sm image">
                    <img src="/images/weather.png" alt="" />
                </div>
            </div>
            <div className="row work-row odd-row">
                <div className="col-sm image">
                    <img src="/images/dictionary.png" alt="" />
                </div>
                <div className="col-sm">
                    <div className="details">
                        <h3>React Dictionary App </h3>
                        <p>This is another React project, where I have built a dictionary app (English).</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://zealous-lamarr-86c9d3.netlify.app">
                            Go to Dictionary App
                        </a>
                    </div>
                </div>
            </div>
            <div className="row work-row even-row">
                <div className="col-sm">
                    <div className="details">
                        <h3>Tic-Tac-Toe Game</h3>
                        <p>This project is a Tic-Tac-Toe game I developed following a tutorial from Clever Programmer YouTube Channel.</p>
                        <a className="btn button" target="_blank" rel="noreferrer" href="https://laughing-kare-92eb88.netlify.app/">
                            Go to the Game
                        </a>
                    </div>
                </div>
                <div className="col-sm image">
                    <img src="/images/tictactoe.png" alt="" />
                </div>
            </div>
            

        </div>
    )
}

export default Work
