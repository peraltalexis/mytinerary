import React, {useEffect} from 'react';
import './App.css';
import ResponsiveAppBar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/footer";
import Home from './pages/home';
import Cities from './pages/cities';
import SignIn from './components/login';
import SignUp from './pages/signUp';
import axios from 'axios'
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';
import Details from './components/details'

function App() {
  const [{cities}, dispatch] = useStateValue() 

 useEffect (()=>{ 
axios.get("http://localhost:4000/api/datos")
  .then(response => 
    dispatch({
      type: actionTypes.CITIESDB,
      cities: response.data.response.cities,
    })
    )
    console.log(cities)
},[])


  return (
    <BrowserRouter>
     <ResponsiveAppBar/>
    <Routes> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/cities" element={<Cities/>}/>
   <Route path="*" element={<Home/>}/>
   <Route path="/signin" element={<SignIn/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   <Route path="/details/:id" element={<Details/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
