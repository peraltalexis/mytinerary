import './App.css';
import ResponsiveAppBar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/footer";
import Home from './pages/home';
import Cities from './pages/cities';
import SignIn from './components/login';
import SignUp from './pages/signUp';


function App() {
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
