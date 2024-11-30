import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL_ORCAMENTO = "http://localhost:8080/orcamentos/listarPorUsuario/";

function MeusOrcamentos() {
  const userId = localStorage.getItem("userId");
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    fetchOrcamentos();
  }, [userId]);

  // Fetch orçamentos
  const fetchOrcamentos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL_ORCAMENTO}${userId}`);
      setOrcamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar orçamentos:", error);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <h1 style={{ display: "flex" }}>Meus Orçamentos</h1>
          <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Valor</th>
                <th>Data de Entrega</th>
                <th>Forma de Pagamento</th>
                <th>Status</th>
                <th>Projetista</th>
              </tr>
            </thead>
            <tbody>
              {orcamentos.map((orc, index) => (
                <tr key={orc.id}>
                  <td>{index + 1}</td>
                  <td>{orc.id}</td>
                  <td>R$ {orc.valor}</td>
                  <td>{orc.dataEntrega}</td>
                  <td>{orc.formaPagamento}</td>
                  <td>{orc.status}</td>
                  <td>{orc.usuario.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default MeusOrcamentos;
