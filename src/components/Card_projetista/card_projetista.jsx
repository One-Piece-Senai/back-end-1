import { Cardprojetista } from "./style_projetista";
import React, { useState } from "react";
import { Botao } from "../../pages/Feed/EstilosHeader"

export default function card_projetista({titulo, projetista}) {
  // Estado que controla o progresso, de 0 a 4 (5 estágios no total)
  const [progress, setProgress] = useState(0);

  // Função para avançar o progresso
  const handleButtonClick = () => {
    setProgress((prevProgress) => (prevProgress < 4 ? prevProgress + 1 : 0)); // Reinicia ao alcançar o estágio final
  };

  const colors = ['Black', 'Gray'];
  return (
    <>
           <Cardprojetista className="card_pedidos">
        <div className="modulo">
            
        <div className='casada'>
          <h2 className="titulo">{titulo}</h2>
            <h3 className="projetista">{projetista}</h3>
            </div>
            <div className='lonely'>
            <Botao className="progress-button" onClick={handleButtonClick}>
              Detalhes
            </Botao>
            </div>
            </div>
          <div className="progress-container">
            {/* Renderiza as cinco barras */}
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="progress-bar"
                style={{
                  backgroundColor: index <= progress ? "#000000" : "#d3d3d3", // Preta se o progresso atingiu, cinza se não
                }}
              ></div>
            ))}
          </div>
        
      </Cardprojetista>
    </>
  );
}
