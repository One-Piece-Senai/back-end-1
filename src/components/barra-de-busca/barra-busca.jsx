import profileImage from "../../assets/Frame.png";
import { BarraBusca } from "./style-barra-busca";
import sino from "../../assets/sino.png";

export default function BarraDeBusca() {
  return (
    <>
      <BarraBusca>
        <div className="conteudo-busca">
          <img src={profileImage} alt="Perfil" className="profile-image" />
        </div>
      </BarraBusca>
    </>
  );
}
