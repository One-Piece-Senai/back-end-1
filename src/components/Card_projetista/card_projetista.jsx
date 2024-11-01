import { Cardprojetista } from './style_projetista';
import React, { useState } from 'react';


<<<<<<< HEAD
export default function     card_projetista() {
    // Estado para controlar o progresso (de 0 a 4)
=======
export default function card_projetista() {
    // Estado que controla o progresso, de 0 a 4 (5 estágios no total)
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
    const [progress, setProgress] = useState(0);

    // Função para avançar o progresso
    const handleButtonClick = () => {
        setProgress((prevProgress) => (prevProgress < 4 ? prevProgress + 1 : 0)); // Reinicia ao alcançar o estágio final
    };

<<<<<<< HEAD
    // Cores para as barras
    const colors = ['Black', 'Gray'];

=======
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
    return (
        <>
            <Cardprojetista>
                <div className="modulo">
                    <h2 className='titulo'>Engrenagens de um Motor</h2>
<<<<<<< HEAD
                    
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

=======
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
>>>>>>> a2eb3d2284b66f1fad594c173a6b5b6c09427f0a
                </div>
            </Cardprojetista>
        </>
    )
}