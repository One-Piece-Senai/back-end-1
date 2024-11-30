import profileImage from "../../assets/Frame.png";
import { BarraBusca } from "./style-barra-busca";
import sino from "../../assets/sino.png";
import { BiFont, BiFontSize } from "react-icons/bi";

export default function BarraDeBusca() {
  return (
    <>
      <BarraBusca>
        <div className="conteudo-busca">
          <h8 style={{  }} >nome</h8>
          <img src={profileImage} alt="Perfil" className="profile-image" />
          
        </div>
      </BarraBusca>
    </>
  );
}
