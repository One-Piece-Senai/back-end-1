import profileImage from "../../assets/Frame.png";
import { BarraBusca } from "./style-barra-busca";
import sino from "../../assets/sino.png";

export default function BarraDeBusca() {
  return (
    <>
      <BarraBusca>
        <div className="conteudo-busca">
          <input type="text" placeholder="Pesquisar..." />
          <img src={sino} alt="" className="sino" />
          <img src={profileImage} alt="Perfil" className="profile-image" />
        </div>
      </BarraBusca>
    </>
  );
}
