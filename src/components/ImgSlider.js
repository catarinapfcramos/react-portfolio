import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

    return (       
    <Slider {...settings}>
      <div>
        <img src="/images/project1.png" alt="project1"/>
        
      </div>
      <div>
        <img src="/images/project2.png"  alt="project2" />
      </div>
      <div>
        <img src="/images/project3.png"  alt="project3"/>
      </div>
      
    </Slider>
  );
        
}

export default ImgSlider
