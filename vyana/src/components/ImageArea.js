import React from 'react'
import './ImageArea.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import img4 from '../assests/1.JPG'
import img5 from '../assests/2.JPG'
import img6 from '../assests/3.JPG'
import img7 from '../assests/4.JPG'
import img8 from '../assests/5.JPG'
import img9 from '../assests/6.JPG'
import img10 from '../assests/7.JPG'
import img11 from '../assests/8.JPG'
import img12 from '../assests/9.JPG'
import img13 from '../assests/10.JPG'
import img14 from '../assests/11.JPG'
import img15 from '../assests/12.JPG'
import Slider from "react-slick";
function ImageArea() {
  if(window.innerWidth >= '1000'){
      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 10,
        // autoplay: true
        autoplay: true,
        autoplaySpeed: 2500
        
      }
  }
  else{
    var settings = {
      // dots: true,
      infinite: true,
      speed: 1000,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 1,
      centerMode: true,
      centerPadding:0,
      // autoplay: true
      autoplay: true,
      autoplaySpeed: 2500
      
    }
  }

  return (
    <div className='image-area-main'>
      <Slider {...settings}>
        <div>
          <img src={img1} className='img not-active-img' />
        </div>
        <div>
          <img src={img2} className='img not-active-img' />
        </div>
        <div>
          <img src={img3} className='img not-active-img' />
        </div>
        <div>
          <img src={img4} className='img active-img' />
        </div>
        <div>
          <img src={img5} className='img not-active-img' />
        </div>
        <div>
          <img src={img6} className='img not-active-img' />
        </div>
        <div>
          <img src={img7} className='img not-active-img' />
        </div>
        <div>
          <img src={img8} className='img not-active-img' />
        </div>
        <div>
          <img src={img9} className='img not-active-img' />
        </div>
        <div>
          <img src={img10} className='img not-active-img' />
        </div>
        <div>
          <img src={img11} className='img not-active-img' />
        </div>
        <div>
          <img src={img12} className='img not-active-img' />
        </div>
        <div>
          <img src={img11} className='img not-active-img' />
        </div>
        <div>
          <img src={img12} className='img not-active-img' />
        </div>
        <div>
          <img src={img13} className='img not-active-img' />
        </div>
        <div>
          <img src={img14} className='img not-active-img' />
        </div>
        <div>
          <img src={img15} className='img not-active-img' />
        </div>

      </Slider>

    </div>
  );
}



export default ImageArea