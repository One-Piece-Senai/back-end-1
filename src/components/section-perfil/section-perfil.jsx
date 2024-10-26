import PerfilImg from "../../assets/Frame.png"
import { StyleSectionPerfil } from "./style-section-perfil"

export default function SectionPerfil(){
    return(
        <StyleSectionPerfil>
            <div className="title-box">
                <h4>Bem Vind@!</h4>
                <img src={PerfilImg} alt="mulher foto" />
                <a href="">Editar perfil</a>
            </div>

            <article>
                <h3>Maria José</h3>
                <p>xp 1500</p>
            </article>
            <div className="linha-xp"><div className="xp"></div></div>

            <p>Maria José é uma projetista com mais de 10 anos de experiência no desenvolvimento de projetos mecânicos e industriais. Especializado em CAD e impressão 3D, atua na criação de soluções inovadoras para otimização de processos. Possui formação em Engenharia Mecânica e diversos cursos na área de design de produto.</p>
        </StyleSectionPerfil>
    )
}