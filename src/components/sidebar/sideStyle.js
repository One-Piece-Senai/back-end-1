import styled from "styled-components";

export const SidebarComponent = styled.aside`
    background: ${props => props.corfundo ? "#F2B929" : "grey"};

    position: fixed;
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 30px;
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
        width: 100%
    }
    
    .icone{
        width: 20%;
    }
`;

