import styled from "styled-components";

export const MainStyle = styled.main`
    width: 100vw;
    height: 400vh; 
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;


    section{
       width: 100vw;
       height: 100vh;
       scroll-snap-align: start;
       display: flex;
    }

    .Retangulos{
        width: 160px;
        height: 500px;
        /* background-color: black; */
    }
    .fotos{
        width: 160px;
        height: 250px;
        background-color: white;
        border-radius: 20px;
    }


    .divisao{
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .fundoTexto{
        width: 100vw;
        height: 100vh;
        /* background-color: gray; */
        display: flex;
        /* align-items: center; */
        justify-content: center;
        padding-top: 90px;
    }

    .Texto{
        width: 55%;
        height: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        gap: 10px;
    }

    h1{
        font-size: 40px;
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        font-family: 'roboto', sans-serif;
        text-align: center;
    }
    p{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        font-family: 'roboto' sans-serif;
    }

    .next{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    background-color: #FFEA96;
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    position: relative;
    font-size: 20px;
    z-index: 998;
    margin-top: auto;
    }


`
export const Moises = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div{
        background-color: rgb(255, 255, 255);
        border-radius: 25px;
    }

    p{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        font-family: 'roboto' sans-serif;
    }


    input{
        all: unset;
                height: 35px;
                width: 250px;
                border-radius: 10px;
                box-shadow: none;
                padding-left: 5px;
                border: 2px solid #ccc;
            
    }

    label{
        width: 250px;
        gap: 2px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
         
    }
`