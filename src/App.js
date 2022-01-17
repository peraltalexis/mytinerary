import './App.css';
import ResponsiveAppBar from './components/navbar/navbar';
import { BrowserRouter as Router, } from 'react-router-dom';
import Footer from "./components/footer/footer";
import Home from './pages/home';


function App() {
  return (
    <Router>
     <ResponsiveAppBar/>
     <main>   
 <Home/>
     </main>
    <Footer/>
  </Router>
  
  );
}

export default App;
