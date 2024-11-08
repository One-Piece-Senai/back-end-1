import {StyleStatus} from "./style-status";
import axios from 'axios';


const ContarProjetos = ({status,num}) => {
    return(
        <StyleStatus>
            <h4>{status}</h4>
            <h3>{num}</h3>
            </StyleStatus>
    )
}

export default ContarProjetos;
