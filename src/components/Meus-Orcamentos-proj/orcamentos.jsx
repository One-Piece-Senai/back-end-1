import React from "react";
import axios from "axios";

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
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px", // Espaçamento entre os elementos
        }}
      >
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "300px", // Largura fixa dos cards
              backgroundColor: "#f9f9f9",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>{projeto.titulo}</h2>
            <p>
              <strong>Descrição:</strong> {projeto.descricao}
            </p>
            <h3>Orçamentos:</h3>
            {projeto.orcamento.length > 0 ? (
              projeto.orcamento.map((orc) => {
                // Define a cor de fundo com base no status
                let backgroundColor = "#f1f1f1"; // Cor padrão
                if (orc.status === "EM_ANALISE") {
                  backgroundColor = "#fff3cd"; // Amarelo para "EM_ANALISE"
                } else if (orc.status === "RECUSADO") {
                  backgroundColor = "#f8d7da"; // Vermelho para "RECUSADO"
                } else if (orc.status === "ACEITO") {
                  backgroundColor = "#d4edda"; // Verde para "ACEITO"
                }

                return (
                  <div
                    key={orc.id}
                    style={{
                      background: backgroundColor,
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      marginBottom: "10px",
                      padding: "10px",
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
                    <div style={{ marginTop: "10px" }}>
                      <button
                        onClick={() => atualizarStatus(orc.id, "ACEITO")}
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          padding: "10px 15px",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      >
                        Aceitar
                      </button>
                      <button
                        onClick={() => atualizarStatus(orc.id, "RECUSADO")}
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          padding: "10px 15px",
                          cursor: "pointer",
                        }}
                      >
                        Recusar
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Sem orçamentos disponíveis.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orcamentos;
