import styled from "styled-components";


export const HeaderST = styled.header`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items:  center;
    justify-content: stretch;
    box-shadow: 2px 5px 10px #888888;
    background-color: white;
    position: fixed;
    z-index: 999;
`

export const PrimeiraParte = styled.div`
    width:50vw;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 30px;


    img{
        height: 80px;
    }
    a{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        color: black;
        font-weight: 600;
    }
`

export const SegundaParte = styled.div`
    width:50vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 15px ;
    
    a{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        color: black;
        font-weight: 600;
    }


`
export const Botao = styled.button`
    background-color: #F2B929;
    padding: 15px 15px;
    height: 48px;
    border-radius: 35px;
    border: 0;
    color: white;
    font-size: 15px;
    font-weight: 700;
`