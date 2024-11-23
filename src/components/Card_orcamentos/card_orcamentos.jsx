import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px; /* Largura do card */
  height: 300px; /* Altura do card */
  border-radius: 20px; /* Bordas arredondadas */
  background-color: #f5f5f5; /* Cor de fundo */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 10px;
  cursor: pointer; /* Indica que o card é clicável */
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2); /* Intensifica a sombra */
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const CardInfo = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  flex-grow: 1; /* Expande para preencher espaço */
`;

const CardButton = styled.button`
  background-color: #007bff; /* Cor do botão */
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
`;

const Card = ({ titulo, descricao,id, onCardClick, onSaibaMais }) => {
  return (
    <CardContainer onClick={onCardClick}>
      <CardTitle>{titulo}</CardTitle>
      <CardInfo>{descricao}</CardInfo>
      <CardInfo>{id}</CardInfo>
      <CardButton
        onClick={(e) => {
          e.stopPropagation(); // Evita disparar o clique no CardContainer
          onSaibaMais();
        }}
      >
        Saiba Mais
      </CardButton>
    </CardContainer>
  );
};

export default Card;
