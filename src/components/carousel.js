import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import litoral from '../images/litoral.jpg' 
import mendoza from '../images/mendoza.jpg'
import norte from '../images/norte.jpg'
import patagonia from '../images/patagonia.jpg'
import styled from 'styled-components'

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
<Carousel responsive={responsive}itemClass='CarouselStyle' >
  <div><img src={litoral} alt='fotoLitoral'></img><TextoSlide className='texto'><p>15% discount on tickets to the Litoral</p></TextoSlide></div>
  <div><img src={patagonia} alt='fotoPatagonia'></img><TextoSlide className='texto'><p>15% discount on tickets to the Patagonia</p></TextoSlide></div>
  <div><img src={mendoza} alt='fotoMendoza'></img><TextoSlide className='texto'><p>30% discount on tickets to Mendoza</p></TextoSlide></div>
  <div><img src={norte} alt='fotoNorte'></img><TextoSlide className='texto'><p>2x1 on tickets to the North of Argentina</p></TextoSlide></div>
</Carousel>
    )
}

const TextoSlide = styled.div`
`;

export default CarouselSlider;