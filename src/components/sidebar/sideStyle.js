import styled from "styled-components";

export const SidebarComponent = styled.aside`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    background-color: #F2B929;

    height: 100vh;

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
`

