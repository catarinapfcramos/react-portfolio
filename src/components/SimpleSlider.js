import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

export default function SimpleSlider() {
    
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

    return (
      <Slider {...settings}>
      
        <div className="card-wrapper">
          <div className="card-image">
            <img src="./images/weather.png" alt = "first-project" />
          </div>
          <h5>Weather App JavaScript</h5>
        </div>
        <div className="card-wrapper">
          <div className="card-image">
            <img src="./images/weather.png" alt = "second-project" />
          </div>
          <h5>React Weather App</h5>
        </div>
        <div className="card-wrapper">
          <div className="card-image">
            <img src="./images/dictionary.png" alt = "third-project" />
          </div>
          <h5>React Dictionary App</h5>
        </div>
             
    </Slider>
     
  );
        
}
