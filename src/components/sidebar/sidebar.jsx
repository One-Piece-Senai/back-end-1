import { SidebarComponent } from "./sideStyle.js";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import carrinho from "../../assets/carrinho-icon.svg";
import box from "../../assets/box-ixon.svg";
import people from "../../assets/people.svg";
import settings from "../../assets/settings.svg";
import askIcon from "../../assets/ask-icon.svg";

export default function SideBar(props) {
  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove o ID do usuário
    localStorage.removeItem("token"); // Remove o token de autenticação, se houver
    navigate("/login"); // Redireciona para a página de login
  };
  return (
    <>
      <SidebarComponent corfundo={props.CorFundo}>
        <Link to="/cliente-perfil">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <img className="icone" src={carrinho} />{" "}
            <Link to="/orcamentosCLI">Orçamentos</Link>
          </li>
          <li>
            <img className="icone" src={box} />{" "}
            <Link to="/pedidos">Meus projetos</Link>
          </li>
          <li>
          <img className="icone" src={people} /> {""}
          <Link to="/projetista">Projetistas</Link>
          </li>
          <li>
            <img className="icone" src={settings} />
            <Link to="/editar-cliente">Editar perfil</Link>{" "}
          </li>
          <li>
            <img className="icone" src={askIcon} />
            <Link to="/ajuda">FAQ</Link>
          </li>
          <li>
          <li>
          <button
          onClick={handleLogout}
          style={{
            backgroundColor: "ff0000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Sair
        </button>
          </li>
          </li>
        </ul>
      </SidebarComponent>
    </>
  );
}
