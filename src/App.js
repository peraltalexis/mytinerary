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


function App() {
  const data=[]

async function test(){
  await axios.get("http://localhost:4000/api/datos")
  .then(response => console.log(response.data.response.cities))//data.push(...response.data.response.cities))
}

console.log(data)

useEffect(() => {
  test()
});

  return (
    <BrowserRouter>
     <ResponsiveAppBar/>
    <Routes> 
   <Route path="/home" element={<Home/>}/>
   <Route path="/cities" element={<Cities/>}/>
   <Route path="*" element={<Home/>}/>
   <Route path="/signin" element={<SignIn/>}/>
   <Route path="/signup" element={<SignUp/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
