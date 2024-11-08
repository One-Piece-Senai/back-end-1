import CardStatus from "../card-status/card-status";
import { StyleStatusGroup } from "./style-status";
import axios from 'axios';


export default function StatusGrup(){


    return(
        <StyleStatusGroup>
            <CardStatus usuarioId={1} status="EM_ANDAMENTO" />
            <CardStatus status="Finalizado" num="10" />
            <CardStatus status="Em execução" num="10" />
            <CardStatus status="Não iniciado" num="10" />
        </StyleStatusGroup>
    )
}