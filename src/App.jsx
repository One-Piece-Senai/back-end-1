import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Projetista from './pages/Projetista/projetista';


function Nav() {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/projetista" element={<Projetista />} />
      </Routes>
    </Router>
   )
}
export default Nav;
