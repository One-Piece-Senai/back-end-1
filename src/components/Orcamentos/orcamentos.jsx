import React from 'react';
import axios from 'axios';

const Orcamentos = ({ projetos }) => {
  // Função para atualizar o status de um orçamento
  const atualizarStatus = async (idOrcamento, novoStatus) => {
    try {
      await axios.put(`http://localhost:8080/orcamentos/atualizar/${idOrcamento}`, {
        status: novoStatus,
      });
      alert(`Orçamento ${novoStatus.toLowerCase()} com sucesso!`);
      window.location.reload(); // Atualiza a página para refletir as alterações
    } catch (error) {
      console.error("Erro ao atualizar o orçamento:", error);
      alert("Erro ao atualizar o orçamento.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {projetos.map((projeto) => (
        <div
          key={projeto.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            margin: '10px 0',
            padding: '15px',
          }}
        >
          <h2>{projeto.titulo}</h2>
          <p>
            <strong>Descrição:</strong> {projeto.descricao}
          </p>
          <h3>Orçamentos:</h3>
          {projeto.orcamento.length > 0 ? (
            projeto.orcamento.map((orc) => (
              <div
                key={orc.id}
                style={{
                  background: '#f9f9f9',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  padding: '10px',
                }}
              >
                <p>
                  <strong>Valor:</strong> R$ {orc.valor}
                </p>
                <p>
                  <strong>Data de Entrega:</strong> {orc.dataEntrega}
                </p>
                <p>
                  <strong>Forma de Pagamento:</strong> {orc.formaPagamento}
                </p>
                <p>
                  <strong>Status:</strong> {orc.status}
                </p>
                <p>
                  <strong>Projetista:</strong> {orc.usuario.nome}
                </p>
                {/* Botões para aceitar ou recusar orçamento */}
                <div style={{ marginTop: '10px' }}>
                  <button
                    onClick={() => atualizarStatus(orc.id, "ACEITO")}
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '10px 15px',
                      marginRight: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    Aceitar
                  </button>
                  <button
                    onClick={() => atualizarStatus(orc.id, "RECUSADO")}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '10px 15px',
                      cursor: 'pointer',
                    }}
                  >
                    Recusar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Sem orçamentos disponíveis.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Orcamentos;
