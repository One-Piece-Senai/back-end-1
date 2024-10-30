import { ContainerPerfil } from "./style-perfil";
import profileImage from '../../assets/Frame.png';

import Lista from "../../components/cards-pedidos/Card"

export default function CardPerfil() {
    return (
        <>
            <ContainerPerfil>
                <div className="teste1">
                    <Lista />
                </div>
            </ContainerPerfil>
        </>
    )
}