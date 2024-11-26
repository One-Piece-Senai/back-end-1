import { Cardprojetista } from './style_projetista';
import React, { useState } from 'react';
import { Botao } from "../../pages/Feed/EstilosHeader"

export default function     card_projetista() {
    // Estado para controlar o progresso (de 0 a 4)
    const [progress, setProgress] = useState(0);

    // Função para avançar o progresso
    const handleButtonClick = () => {
        setProgress((prevProgress) => (prevProgress < 4 ? prevProgress + 1 : 0)); // Volta ao início quando chega ao fim
    };

    // Cores para as barras
    const colors = ['Black', 'Gray'];

    return (
        <>
            <Cardprojetista className="card_pedidos">
                <div className="modulo">
                    <div className='casada'>
                        <h5 className='titulo'>Engrenagens de um Motor</h5>
                        <h6 className="projetista">Fabricio</h6>
                    </div>
                    <div className='lonely'>
                       <Botao onClick={handleButtonClick} style={{color:"black", fontSize:"20px", width:"120px"}}> Avançar </Botao>
                    </div>
                    
                </div>
                        <div className="progress-container" >
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
    )
}