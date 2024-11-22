import React, { useState } from "react";
import axios from "axios"; // Supondo que a requisição será enviada ao backend
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista"
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";


// URL do backend para criar orçamento
const API_BASE_ORCAMENTO = "http://localhost:8080/orcamentos";
const userId = localStorage.getItem("userId");



function CriarOrcamento() {
  const [formData, setFormData] = useState({
    dataEntrega: "",
    formaPagamento: "",
    status: "",
    valor: "",
    usuario: { id: userId },
  });

  const [message, setMessage] = useState("");

  // Manipula as mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envia os dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_ORCAMENTO}/criar`, formData);
      setMessage(`Orçamento criado com sucesso! ID: ${response.data.id}`);
      setFormData({
        dataEntrega: "",
        formaPagamento: "",
        status: "",
        valor: "",
      });
    } catch (error) {
      setMessage("Erro ao criar orçamento.");
      console.error("Erro ao criar orçamento:", error);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Criar Orçamento</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        {/* Data de Entrega */}
        <label>Data de Entrega</label>
        <input
          type="date"
          name="dataEntrega"
          value={formData.dataEntrega}
          onChange={handleChange}
          required
        />

        {/* Forma de Pagamento */}
        <label>Forma de Pagamento</label>
        <select
          name="formaPagamento"
          value={formData.formaPagamento}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Boleto">Boleto</option>
          <option value="Transferência Bancária">Transferência Bancária</option>
        </select>

        {/* Status */}
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="Pendente">Pendente</option>
          <option value="Em Progresso">Em Progresso</option>
          <option value="Concluído">Concluído</option>
        </select>

        {/* Valor */}
        <label>Valor</label>
        <input
          type="number"
          name="valor"
          placeholder="Digite o valor"
          value={formData.valor}
          onChange={handleChange}
          required
        />

        {/* Botão de envio */}
        <button type="submit">Criar Orçamento</button>
      </form>

      {/* Mensagem de sucesso ou erro */}
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}

export default CriarOrcamento;
