import CardStatus from "../card-status/card-status";
import { StyleStatusGroup } from "./style-status";

export default function StatusGrup(){
    return(
        <StyleStatusGroup>
            <CardStatus status="teste" num="10" />
            <CardStatus status="teste" num="10" />
            <CardStatus status="teste" num="10" />
            <CardStatus status="teste" num="10" />
        </StyleStatusGroup>
    )
}