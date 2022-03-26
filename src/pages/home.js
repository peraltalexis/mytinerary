import React from 'react';
import CarouselSlider from '../components/carousel'; 
import OutlinedCard from '../components/homeCard';

const Home = () => {
    return (
        <div>
            <h1>Offers in Argentina</h1>
            <CarouselSlider />
            <br/>
            <br/>
            <OutlinedCard sx={{paddingLeft:'5rem', paddingRight:'5rem'}} />
            <br/>
            <br/>
        </div>
    )
}

export default Home;
