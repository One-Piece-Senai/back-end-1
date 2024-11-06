import CardStatus from "../card-status/card-status";
import { StyleStatusGroup } from "./style-status";

export default function StatusGrup(){
    return(
        <StyleStatusGroup>
            <CardStatus status="Arquivado" num="10" />
            <CardStatus status="Finalizado" num="10" />
            <CardStatus status="Em execução" num="10" />
            <CardStatus status="Não iniciado" num="10" />
        </StyleStatusGroup>
    )
}