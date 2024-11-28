import styled from "styled-components";

export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffea96;
  border-radius: 16px;
  padding: 30px;
  margin-left: 70px;
  background-color: #f5f5f5;
  /* width: 1000px; */
  /* height: 500px; */

  .botao_novo {
    background-color: #ffd32c;
    padding: 15px;
    height: 45px;
    border-radius: 35px;
    border: 0;
    font-weight: 700;
    width: 100px;
  }

  .botao_aceitar {
    background-color: green;
    padding: 15px;
    height: 45px;
    border-radius: 35px;
    border: 0;
    font-weight: 700;
    width: 100px;
  }
  .botao_voltar {
    background-color: gray;
    padding: 15px;
    height: 45px;
    border-radius: 35px;
    border: 0;
    font-weight: 700;
    width: 100px;
  }
  .buttons {
    display: flex;
    padding: 15px;
    margin: 3%;
  }
`;
