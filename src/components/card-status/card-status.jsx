import {StyleStatus} from "./style-status";

export default function CardStatus({status,num}){
    return(
        <StyleStatus>
            <h4>{status}</h4>
            <p>{num}</p>
        </StyleStatus>
    )
}