import styled from "styled-components";


export const Cardprojetista = styled.div`
    display: flex;
    align-items: center;
    gap: 200px;
    width: 80%;
    height: 100px;
    padding: 10px;
    border-radius: 10%;
    margin-bottom: 1%;
    
    
    .modulo{
        background-color: white;
        display: grid;
        border-radius: 16px;
        padding: 30px;
        width: 900px;
        height: 100px;
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
        right: 100px;
    }
    .projetista{
        position: absolute;
        left: 10px;
        top: 60px;  /* Posição no topo */
    }
        .progress-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  border-radius: 30%;
}

.progress-bar {
  width: 18%; /* Define a largura de cada barra (5 barras = 18% cada) */
  height: 20px;
  background-color: #d3d3d3;
  transition: background-color 0.3s ease; /* Transição suave da cor */
  border-radius: 30%;
}
.tex_botao{
  display: flex;
  justify-content: space-between;
}

.progress-button {
  margin-top: 20px;
  padding: 15px 10px;
  font-size: 10px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.progress-button:hover {
  background-color: #3700b3;
}`