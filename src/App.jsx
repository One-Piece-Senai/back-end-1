import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Feed from './pages/feed/Feed';
import Home from './pages/Home/home';
import Editar from './pages/Editar_cadastro/edit'
import RegisterCliente from './pages/Cadastro/RegisterCliente'; // Renomeie o arquivo se necessário
import RegisterProjetista from './pages/Cadastro/RegisterProjetista'; // Renomeie o arquivo se necessário
import Modal from '../src/components/Modal/modal';
import Detalhes from './/components/card-perfil/Detalhes'; // O componente para mostrar os detalhes do item


function Nav() {


   return(
    <Router>
      <Routes>
        <Route path="/register/cliente" element={<RegisterCliente />} />
        <Route path="/register/projetista" element={<RegisterProjetista />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Feed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit" element={<Editar />} />
        <Route path="/modal" element={<Modal /> } />
        <Route path="/detalhes/:indice" element={<Detalhes  />} />
      </Routes>
    </Router>
   )
}
export default Nav;
