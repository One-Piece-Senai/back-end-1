import { SidebarComponent } from "./sideStyle.js";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import carrinho from "../../assets/carrinho-icon.svg";
import box from "../../assets/box-ixon.svg";
import people from "../../assets/people.svg";
import settings from "../../assets/settings.svg";
import askIcon from "../../assets/ask-icon.svg";

export default function SideBar(props) {
  return (
    <>
      <SidebarComponent corfundo={props.CorFundo}>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <img className="icone" src={carrinho} />{" "}
            <Link to="/todosprojetos">Orçamentos</Link>
          </li>
          <li>
            <img className="icone" src={box} />{" "}
            <Link to="/pedidos">Meus projetos</Link>
          </li>
          <li>
            <img className="icone" src={people} /> Projetistas
          </li>
          <li>
            <img className="icone" src={settings} />
            <Link to="/editar">Editar perfil</Link>{" "}
          </li>
          <li>
            <img className="icone" src={askIcon} />
            <Link to="/ajuda">FAQ</Link>
          </li>
        </ul>
      </SidebarComponent>
    </>
  );
}
