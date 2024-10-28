import styled from "styled-components";


export const Cardprojetista = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 10%;
    margin-bottom: 1%;
    
    .modulo{
        background-color: white;
        box-shadow: 10px 10px gray;
        display: flex;
        flex-direction: row-reverse ;
        border-radius: 16px;
        padding: 20px;
        width: 900px;
        height: 110px;
        gap: 20px;
        position: relative;
    }
    
    .titulo{
        position: absolute;
        top: 0;  /* Posição no topo */
        left: 0; /* Posição à esquerda */
        margin: 10px; /* Espaçamento opcional */
        font-size: 24px;
        color: black;
        }
    
    .botao_novo{
        position: absolute;
        right: 31px;
    }
    .projetista{
        position: absolute;
        left: 10px;
        top: 35px; 

    }
    
    .progress-container {
  display: flex;
  
  width: 80%;
  margin: 0 auto;
  align-items: flex-end;
}

.progress-bar {
  width: 17%;
  height: 25px;
  transition: background-color 0.3s ease;
  border-radius: 30px;
}

.progress-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;  
  background-color: #FFD32C;
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.progress-button:hover {
  background-color: #3700b3;
}`
