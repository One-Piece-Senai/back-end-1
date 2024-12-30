import { Cardprojetista } from "./style_projetista";
import React, { useState } from "react";
import { Botao } from "../../pages/Feed/EstilosHeader"

export default function card_cliente({titulo, projetista}) {


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
            <Botao className="progress-button" onClick={editProjeto}>
              Detalhes
            </Botao>
            </div>
            </div>
      </Cardprojetista>
    </>
  );
}
