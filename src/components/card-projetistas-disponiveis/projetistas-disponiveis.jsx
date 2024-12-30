import { StyleCardProjetistas } from "./style-card-disponiveis";
import PerfilImg from "../../assets/6.svg";
import MiniCard from "../mini-card/mini-card";

export default function CardProjetistasDisp({descricao, nome}) {
  return (
    <StyleCardProjetistas>
      <img src={PerfilImg} alt="" />
      <p>{descricao}</p>
      <h4>
        <span>{nome}</span>
      </h4>
      <article>
        <MiniCard title="Não iniciado" num="20" />
        <MiniCard title="Em elaboração" num="10" />
        <MiniCard title="Completo" num="05" />
      </article>
    </StyleCardProjetistas>
  );
}
