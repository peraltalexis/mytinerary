import React from 'react';
import CarouselSlider from '../components/carousel'; 
import OutlinedCard from '../components/homeCard'

const Home = () => {
    return (
        <div>
            <h1>MyTinerary</h1>
            <CarouselSlider />
            <br/>
            <br/>
            <OutlinedCard sx={{paddinLeft:'20rem', paddingRight:'20rem'}} />
            <br/>
            <br/>
        </div>
    )
}

export default Home;
