import { ContainerPerfil } from "./style-perfil";
import profileImage from '../../assets/Frame.png';

export default function CardPerfil() {
    return (
        <>
            <ContainerPerfil>
                <div>
                    <h4>Bem-Vin@</h4>
                    <img src={profileImage} alt="Perfil" className="profile-image" />
                    <a href="">Edit Perfil</a>
                </div>
                <section>
                    <article>
                        <h3 className="title-card" >Maria José</h3>
                        <p>XP 100</p>
                    </article>
                    <div className="barra-xp"></div>
                </section>
                <p>Maria José é uma projetista com mais de 10 anos de experiência no desenvolvimento de projetos mecânicos e industriais. Especializado em CAD e impressão 3D, atua na criação de soluções inovadoras para otimização de processos. Possui formação em Engenharia Mecânica e diversos cursos na área de design de produto.</p>
            </ContainerPerfil>
        </>
    )
}