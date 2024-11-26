import React from 'react';

const Orcamentos = ({ projetos }) => {
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
