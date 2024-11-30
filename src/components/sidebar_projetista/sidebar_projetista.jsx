import { Link, useNavigate  } from "react-router-dom";
import { SidebarComponent } from "../sidebar/sideStyle";
import logo from "../../assets/logo.svg";
import carrinho from "../../assets/carrinho-icon.svg";
import box from "../../assets/box-ixon.svg";
import people from "../../assets/people.svg";
import settings from "../../assets/settings.svg";
import askIcon from "../../assets/ask-icon.svg";

export default function SideBarProjetista(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove o ID do usuário
    localStorage.removeItem("token"); // Remove o token de autenticação, se houver
    navigate("/"); // Redireciona para a página de login
  };
  return (
    <>
      <SidebarComponent corfundo={props.CorFundo}>
        <Link to="/projetista-perfil">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <img className="icone" src={carrinho} />{" "}
            <Link to="/orcamentos">Fazer Orçamento</Link>
          </li>
          <li>
            <img className="icone" src={box} />{" "}
            <Link to="/meusprojetos">Meus projetos</Link>
          </li>
          <li>
            <img className="icone" src={box} />{" "}
            <Link to="/meusorcamentos">Meus Orcamentos</Link>
          </li>
          <li>
            <img className="icone" src={people} /> Clientes
          </li>
          <li>
            <img className="icone" src={settings} />
            <Link to="/editar-projetista">Editar perfil</Link>{" "}
          </li>
          <li>
            <img className="icone" src={askIcon} />
            <Link to="/ajuda">FAQ</Link>
          </li>

          <button
          onClick={handleLogout}
          style={{
            backgroundColor: "red",
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
        </ul>
      </SidebarComponent>
    </>
  );
}
