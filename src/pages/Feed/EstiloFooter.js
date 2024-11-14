import styled from "styled-components";
import imageUrl from "../../assets/finalImage.png"; // Corrigi o import da imagem

export const StyleFooter = styled.footer`
   width: 100vw;
   height: 100vh;
   display: flex;
   background-color: white;
   scroll-snap-align: start;
   scroll-behavior: smooth;
   scroll-snap-type: y mandatory;
   background-image: url(${imageUrl}); // Corrigi o uso da URL da imagem
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    img{
        height: 80px;
        width: 80px;
        
    }

`