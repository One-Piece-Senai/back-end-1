import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Projetista from './pages/Projetista/projetista';
import Login from "./pages/login/Login";
import Editar from './pages/Editar_cadastro/edit'
import Detalhes from './/components/card-perfil/Detalhes'; // O componente para mostrar os detalhes do item
import Pedidos from './pages/pedidos/pedidos';
import Perfil from './components/card-perfil/perfil'
import CadastraProjeto from './pages/NovoProjeto/Projeto'
import PerfilProjetista from './pages/perfil-projetista/perfil-projetista';

function Nav() {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/projetista" element={<Projetista />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Editar />} />
        <Route path="/detalhes/:indice" element={<Detalhes  />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/perfil" element={<Perfil  />} />
        <Route path="/cadastrar_Projeto" element={<CadastraProjeto  />} />
        <Route path="/projetista-perfil" element={<PerfilProjetista />} />
      </Routes>
    </Router>
   )
}
export default Nav;
