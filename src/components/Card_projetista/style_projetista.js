import styled from "styled-components";


export const Cardprojetista = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: center;
<<<<<<< HEAD
    gap: 30px;
    width: 100%;
=======
    gap: 200px;
    width: 80%;
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
    height: 100px;
    padding: 10px;
    border-radius: 10%;
    margin-bottom: 1%;
    
    
    .modulo{
        background-color: white;
<<<<<<< HEAD
        box-shadow: 10px 10px gray;
        display: flex;
        flex-direction: row-reverse ;
=======
        display: grid;
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
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
        right: 100px;
    }
    .projetista{
        position: absolute;
        left: 10px;
<<<<<<< HEAD
        top: 35px; 

    }
    
    .progress-container {
=======
        top: 60px;  /* Posição no topo */
    }
        .progress-container {
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
  display: flex;
  
  width: 80%;
  margin: 0 auto;
<<<<<<< HEAD
  align-items: flex-end;
}

.progress-bar {
  width: 17%;
  height: 25px;
  transition: background-color 0.3s ease;
  border-radius: 30px;
=======
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
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
}

.progress-button {
  margin-top: 20px;
<<<<<<< HEAD
  padding: 10px 20px;
  font-size: 16px;  
  background-color: #FFD32C;
  color: black;
=======
  padding: 15px 10px;
  font-size: 10px;
  background-color: #6200ea;
  color: white;
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.progress-button:hover {
  background-color: #3700b3;
}`