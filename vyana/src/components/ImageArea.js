import React from 'react'
import './ImageArea.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import Slider from "react-slick";
function ImageArea() {


  {/* <div className='image-area-main'>
            <img src={img1} className='img1 not-active-img'/>
            <img src={img2} className='img2 active-img'/>
            <img src={img3} className='img3 not-active-img'/>
        </div> */}
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 2.9,
    centerMode: true,
    centerPadding: 10,
    // autoplay: true
    autoplay: true,
    autoplaySpeed: 2500
    
  }

  return (
    <div className='image-area-main'>
      <Slider {...settings}>
        <div>
          <img src={img1} className='img not-active-img' />
        </div>
        <div>

          <img src={img2} className='img active-img' />
        </div>
        <div>

          <img src={img3} className='img not-active-img' />
        </div>
      </Slider>

    </div>
  );
}



export default ImageArea