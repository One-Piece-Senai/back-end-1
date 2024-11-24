import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Projetista from "./pages/CLIENTE/Projetista/projetista";
import Login from "./pages/login/Login";
import EditarProjetista from "./pages/inputs_completo/FormPerfil";
import EditarCliente from "./pages/CLIENTE/inputs_completo/FormPerfilCliente";
import Detalhes from ".//components/card-perfil/Detalhes"; // O componente para mostrar os detalhes do item
import Pedidos from "./pages/pedidos/pedidos";
import TodosProjetos from "./components/card-perfil/perfil";
import CadastraProjeto from "./pages/NovoProjeto/NovoProjeto";
import PerfilProjetista from "./pages/perfil-projetista/perfil-projetista";
import Register from "./pages/Cadastro/Register";
import PerfilCliente from "./pages/CLIENTE/perfil-cliente/perfil-cliente";
import Ajuda from "./pages/Ajuda/ajuda";
import ProjetoCRUD from "./pages/CLIENTE/Editar-projeto/Editar-projeto"
import PedidosProjetistas from "./pages/pedidos_projetistas/pedidos_projetistas"
import Feed from "./pages/Feed/feed";
import CriarOrcamento from "./pages/Input_orcamentos/Input_orcamentos";
import Orcamento from "./pages/Orcamentos_PROJ/orcamentos_proj";
import OrcamentoProjetista from "./pages/Meus_orcamentos/meus_orcamentos"

function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalhes/:indice" element={<Detalhes />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedidosprojetistas" element={<PedidosProjetistas />} />
        <Route path="/todosprojetos" element={<TodosProjetos />} />
        <Route path="/cadastrar_Projeto" element={<CadastraProjeto />} />
        <Route path="/projetista-perfil" element={<PerfilProjetista />} />
        <Route path="/cliente-perfil" element={<PerfilCliente />} />
        <Route path="/projetista" element={<Projetista />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/editar-projetista" element={<EditarProjetista />} />
        <Route path="/editar-cliente" element={<EditarCliente />} />
        <Route path="/editar-projeto" element={<ProjetoCRUD />} />
        <Route path="/" element={<Feed />} />
        <Route path="/criar-orcamentos" element={<CriarOrcamento  />} />
        <Route path="/orcamentos" element={<Orcamento  />} />
        <Route path="/orcamentosprojetista" element={<OrcamentoProjetista  />} />

      </Routes>
    </Router>
  );
}
export default Nav;
