import React, { useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';



export default function Details (){
const {id} = useParams()
const [city,setCity] = useState()

useEffect(()=>{
    axios.get(`http://localhost:4000/api/unaCiudad/${id}`)
    .then(response=> setCity(response.data.response.city))
},[])

    return(

        <div> 
        <h1>{city?.name}</h1>
        <img src={process.env.PUBLIC_URL+'/images/'+city?.img} alt={city?.name} className='imagen'/>
        <h3 className='datos'>Country: {city?.country}</h3>
        <h3 className='datos'>Cureency: {city?.currency}</h3>
        <h3 className='datos'>Language: {city?.language}</h3>
        <h3 className='datos'>Continent: {city?.continent}</h3>
        <h3 className='datos'>Region: {city?.region}</h3>
        <h3 className='datos'>Demonim: {city?.demonym}</h3>
        </div>
    )
}
