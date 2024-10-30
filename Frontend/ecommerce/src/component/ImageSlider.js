import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slider1 from '../image/slider1.webp';
import slider2 from '../image/slider2.webp';
import slider3 from '../image/slider3.jpg';
import slider4 from '../image/slider4.jpg';
import slider5 from '../image/slider5.webp';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const imageStyle = {
    width: '100%',
    height: '50vh',
    objectFit: 'fit',
    
  };
  return (
    <div style={{ width: '99%', height: '50vh', margin: 'auto' }}>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="Image 1" style={imageStyle} />
        </div>
        <div>
          <img src={slider2} alt="Image 2" style={imageStyle} />
        </div>
        <div>
          <img src={slider3} alt="Image 3" style={imageStyle} />
        </div>
        <div>
          <img src={slider4} alt="Image 4" style={imageStyle} />
        </div>
        <div>
          <img src={slider5} alt="Image 5" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
