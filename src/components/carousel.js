import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import litoral from '../carouselImages/litoral.jpg' 
import mendoza from '../carouselImages/mendoza.jpg'
import norte from '../carouselImages/norte.jpg'
import patagonia from '../carouselImages/patagonia.jpg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselSlider = () => {
    return (
<Carousel 
responsive={responsive} 
infinite={true}
draggable={false}
className='carousel'>
  <div><img src={litoral} alt='fotoLitoral'></img></div>
  <div><img src={patagonia} alt='fotoPatagonia'></img></div>
  <div><img src={mendoza} alt='fotoMendoza'></img></div>
  <div><img src={norte} alt='fotoNorte'></img></div>
</Carousel>
    )
}

export default CarouselSlider;