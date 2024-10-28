import { Cardprojetista } from './style_projetista';
import React, { useState } from 'react';


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
                    <h2 className='titulo'>Engrenagens de um Motor</h2>
                    
                    <h3 className="projetista">Fabricio</h3>
                    <button className="progress-button" onClick={handleButtonClick}>
                                            Avançar
                                        </button>
                    

                        <div className="progress-container" >
                                                {/* Renderizando as 5 barras */}
                                                {colors.map((color, index) => (
                                                    <div
                                                        key={index}
                                                        className="progress-bar"
                                                        style={{    
                                                            backgroundColor: index <= progress ? color : '#e0e0e0', // Cor muda conforme o progresso
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>

                </div>
            </Cardprojetista>
        </>
    )
}