import { Cardprojetista } from './style_projetista';
import React, { useState } from 'react';


export default function card_projetista() {
    // Estado que controla o progresso, de 0 a 4 (5 estágios no total)
    const [progress, setProgress] = useState(0);

    // Função para avançar o progresso
    const handleButtonClick = () => {
        setProgress((prevProgress) => (prevProgress < 4 ? prevProgress + 1 : 0)); // Reinicia ao alcançar o estágio final
    };

    return (
        <>
            <Cardprojetista>
                <div className="modulo">
                    <h2 className='titulo'>Engrenagens de um Motor</h2>
                    <div className="tex_botao">
                        <h3 className="projetista">Fabricio</h3>
                        <button className="progress-button" onClick={handleButtonClick}>Avançar
                        </button>

                    </div>
                    <div className="progress-container">
                        {/* Renderiza as cinco barras */}
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="progress-bar"
                                style={{
                                    backgroundColor: index <= progress ? '#000000' : '#d3d3d3', // Preta se o progresso atingiu, cinza se não
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </Cardprojetista>
        </>
    )
}