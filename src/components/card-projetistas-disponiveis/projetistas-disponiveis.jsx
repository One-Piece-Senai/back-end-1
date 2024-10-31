import { StyleCardProjetistas } from "./style-card-disponiveis";
import PerfilImg from "../../assets/Frame.png"
import MiniCard from "../mini-card/mini-card";


export default function CardProjetistasDisp(){
    return(
            <StyleCardProjetistas>
              <img src={PerfilImg} alt="" />
              <p>Maria José</p>
              <h4>1200 px<span>Level 12</span></h4>
              <article>
                <MiniCard title="Não iniciado" num="20" />
                <MiniCard title="Em elaboração" num="10" />
                <MiniCard title="Completo" num="05" />
              </article>
            </StyleCardProjetistas>
    )
}