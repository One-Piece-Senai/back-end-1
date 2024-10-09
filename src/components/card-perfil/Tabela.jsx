import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tabela({ vetor, selecionar }) {

    // const navigate = useNavigate(); // Hook para navegação

    // const handleDetalhes = (index) => {
    //     navigate(`/formulario/${index}`); // Redireciona para a página do formulário com o índice na URL
    // };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descrição do projeto</th>
                    <th>Materiais de impressão</th>
                    <th>Tecnologia de impressão</th>
                    <th>Prazo de entrega </th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.descricao}</td>
                            <td>{obj.materiais}</td>
                            <td>{obj.tecnologia}</td>
                            <td>{obj.prazo}</td>

                            <button onClick={() => selecionar(indice)}>Selecionar</button>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
}
export default Tabela;