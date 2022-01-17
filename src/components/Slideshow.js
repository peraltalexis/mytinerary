import React, {useRef} from 'react'
import litoral from '../images/litoral.jpg' 
import mendoza from '../images/mendoza.jpg'
import norte from '../images/norte.jpg'
import patagonia from '../images/patagonia.jpg'
import {ReactComponent as FlechaIzq} from '../images/iconmonstr-arrow-64-izq.svg'
import {ReactComponent as FlechaDer} from '../images/iconmonstr-arrow-63-der.svg'
import styled from 'styled-components'





const Slideshow = () => {

const carousel = useRef(null);


    const siguiente = () => {
        //comprueba elementos de carousel
        if(carousel.current.children.length > 0){
            //obtiene el primer elemento del carousel
            const primerElemento = carousel.current.children[0];
            //transicion del carousel
            carousel.current.style.transition = '3000ms ease-out all';

            const tamañoSlide = carousel.current.children[0].offsetWidth;
            //movimiento del carousel
            carousel.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion = () => {
                //reiniciamos posicion de carousel
                carousel.current.transition = 'none';
                carousel.current.transform = 'translateX(0)';

                //primer elemento al final
                carousel.current.appendChild(primerElemento);
            }
            carousel.current.addEventListener ('transiotionEnd', transicion);
        }
    }
    
    
    const anterior = () => {
        console.log('Anterior')
    }    
    


    return(
        <ContenedorPrincipal>
            <ContenedorSlideshow Ref={siguiente}>
            <Slide>
                <img src={litoral} alt=""/>
                <TextoSlide>
                    <p>15% de descuento en pasajes al Litoral</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <img src={mendoza} alt=""/>
                <TextoSlide><p>30% de descuento en pasajes al Mendoza</p></TextoSlide>
            </Slide>
            <Slide>
                <img src={norte} alt=""/>
                <TextoSlide><p>2x1 en pasajes al Norte del país</p></TextoSlide>
            </Slide>
            <Slide>
                <img src={patagonia} alt=""/>
                <TextoSlide><p>15% de descuento en pasajes al Patagonia</p></TextoSlide>
            </Slide>
            </ContenedorSlideshow>
            <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzq/>
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDer/>
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`
    position: relative;
    width:100%;
    
`;

const ContenedorSlideshow = styled.div`
   display: flex;
   flex-wrap: nowrap;
`;

const Slide = styled.div`
   overflow: hidden;
   min-width: 100%;
   transition: 3s ease all;
   z-index: 10;
   position: relative;

   img {
       width:100%;
       vertical-align: top;
   }

`;
const TextoSlide = styled.div`
   background: #480981;
   color: #fff;
   width: 100%;
   padding: 10px 60px;
   text-align: center;
   position: absolute;
   bottom: 0;

   @media screen and (max-width: 700px) {
       position: relative;
   }
`;

const Controles = styled.div`
   position: absolute;
   top:0;
   z-index: 20;
   width: 100%;
   height: 100%;
   pointer-events: none;
`;

const Boton = styled.button`
   pointer-events: all;
   background: none;
   border: none;
   cursor: pointer;
   outline: none;
   width: 50px;
   height: 100%;
   text-align: center;
   position: absolute;
   transition: 3s ease all;

   path {
       filter: ${props => props.derecho ? 'drop-shadow(-3px 0px 0px #fff)' : 'drop-shadow(3px 0px 0px #fff)'};
   }

   ${props => props.derecho ? 'right:0' : 'left:0' }
`;

export default Slideshow