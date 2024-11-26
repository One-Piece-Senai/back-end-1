import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ajuda from "./pages/Ajuda/ajuda";
import CadastraProjeto from "./pages/NovoProjeto/NovoProjeto";
import CriarOrcamento from "./pages/Input_orcamentos/Input_orcamentos";
import Detalhes from ".//components/card-perfil/Detalhes"; // O componente para mostrar os detalhes do item
import EditarCliente from "./pages/CLIENTE/inputs_completo/FormPerfilCliente";
import EditarProjetista from "./pages/inputs_completo/FormPerfil";
import EditarProjeto from "./pages/CLIENTE/Editar-projeto/Editar-projeto";
import Feed from "./pages/Feed/feed";
import Login from "./pages/login/Login";
import Orcamento from "./pages/Orcamentos_PROJ/orcamentos_proj";
import OrcamentoProjetista from "./pages/Meus_orcamentos/meus_orcamentos";
import MeusProjetos from "./components/card-perfil/perfil"
import Pedidos from "./pages/pedidos/pedidos";
import PedidosProjetistas from "./pages/pedidos_projetistas/pedidos_projetistas";
import PerfilCliente from "./pages/CLIENTE/perfil-cliente/perfil-cliente";
import PerfilProjetista from "./pages/perfil-projetista/perfil-projetista";
import Projetista from "./pages/CLIENTE/Projetista/projetista";
import OrcamentoCLI from "./pages/CLIENTE/OrcamentosCLI/orcamentoCLI"


function Projeto() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/cadastrar_Projeto" element={<CadastraProjeto />} />
        <Route path="/cliente-perfil" element={<PerfilCliente />} />
        <Route path="/criar-orcamentos" element={<CriarOrcamento />} />
        <Route path="/detalhes/:indice" element={<Detalhes />} />
        <Route path="/editar-cliente" element={<EditarCliente />} />
        <Route path="/editar-projetista" element={<EditarProjetista />} />
        <Route path="/editar-projeto" element={<EditarProjeto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orcamentos" element={<Orcamento />} />
        <Route path="/orcamentosprojetista" element={<OrcamentoProjetista />} />
        <Route path="/orcamentoscli" element={<OrcamentoCLI />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedidosprojetistas" element={<PedidosProjetistas />} />
        <Route path="/projetista" element={<Projetista />} />
        <Route path="/projetista-perfil" element={<PerfilProjetista />} />
        <Route path="/meusprojetos" element={<MeusProjetos />} />
      </Routes>
    </Router>
  );
}
export default Projeto;
