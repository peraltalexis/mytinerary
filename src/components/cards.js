import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectFlip,Pagination,Navigation
} from 'swiper';

import patagonia from '../images/patagonia.jpg';

// install Swiper modules
SwiperCore.use([EffectFlip,Pagination,Navigation]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
  <SwiperSlide><img src= {patagonia} alt='fotoPatagonia' /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
  </Swiper>
    </>
  )
}