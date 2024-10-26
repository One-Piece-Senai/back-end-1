import styled from "styled-components";

export const StyleSectionPerfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
    width: 930px;
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 15px 15px #a5a5a5;
    
    .title-box{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .title-box > h4 {
        font-size: 25px;
        font-weight: 300;
    }

    .title-box > a {
        text-decoration: none;
        color: #0066FF;
    }

    article {
        display: flex;
        gap: 30px;
        padding-top: 20px;
        text-align: start;
        text-align: center;
    }

    article > h3 {
        font-size: 25px;
        font-weight: 300;
    }

    article > p {
        font-size: 15px;
        font-weight: 300;
        padding: 0;
        margin: 0;
    }

    .linha-xp{
        width: 300px;
        height: 18px;
        border-radius: 50px;
        background-color: #a5a5a5;
        margin-top: 10px;
    }

    .xp{
        width: 100px;
        height: 18px;
        background-color: #FFEA96;
        border-radius: 50px;
    }

    p{
        margin-top: 50px;
        text-align: center;
        font-size: 18px;
    }

    
`