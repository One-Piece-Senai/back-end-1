import styled from "styled-components";

export const SidebarComponent = styled.aside`
    /* background: ${props => props.corfundo ? "#F2B929" : "grey"}; */
    background-color: #F2B929; /*POR FAVOR NAO MUDAR A MERDA DA COR JA QUE A COR ORIGINAL É ESSA ATUAL #F2B929, OLHAR NO FIGMA POR FAVOR NAO OUVIR VOZES DA SUA CABEÇA */
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
    gap: 30px;

    a{
        color: #000;
        text-decoration: none;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        list-style: none;
    }
    
    li {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .logo{
        width: 100%;
        border-radius: 50%;
    }
    
    .icone{
        width: 20%;
    }
`;

