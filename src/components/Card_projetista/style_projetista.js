import styled from "styled-components";


export const Cardprojetista = styled.div`
    display: flex;
    padding:  15px ;
    background-color: white;
    border-radius: 25px;
    width: 100%;
    height: 125px;
    flex-direction: column;

    .modulo{
      width: 100%;
      height: 100%;
      background-color: white;
      display: flex;
      flex-direction: row;
}
    .casada{
      width: 50%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .lonely{
      width: 50%;
      height: 60%;
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
    }

    .titulo{
      font-size: 23px;
    }
    .projetista{
      font-size: 18px;
    }

    .progress-container{
      width: 80%;
      display: flex;
      justify-content: space-between;
    }

    .progress-bar{
      width: 18%;
      height: 20px;
      background-color: #d3d3d3;
      border-radius: 30px;
      transition: background-color 0.3s ease;

    }
`
