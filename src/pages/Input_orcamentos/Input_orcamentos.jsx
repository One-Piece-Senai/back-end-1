import React, { useState } from "react";
import axios from "axios"; // Supondo que a requisição será enviada ao backend
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import { useLocation } from "react-router-dom";

// URL do backend para criar orçamento
const API_BASE_ORCAMENTO = "http://localhost:8080/orcamentos";
const userId = localStorage.getItem("userId");

function CriarOrcamento() {
  const location = useLocation();
  const projetoId = location.state?.projetoId; // ID do projeto vindo da navegação
  const [formData, setFormData] = useState({
    valor: "",
    dataEntrega: "",
    formaPagamento: "",
    status: "EM_ANALISE", // Constante padrão
    idUsuario: userId,
    idProjeto: projetoId, // Deve ser preenchido no formulário ou previamente definido
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
      const response = await axios.post(
        `${API_BASE_ORCAMENTO}/criar`,
        formData
      );
      setMessage(
        `Orçamento criado com sucesso! ID: ${response.data.idProjeto}`
      );
      setFormData({
        valor: "",
        dataEntrega: "",
        formaPagamento: "",
        status: "EM_ANALISE",
        idUsuario: userId,
        idProjeto: "",
      });
      console.log("userid:", projetoId);
    } catch (error) {
      setMessage("Erro ao criar orçamento.");
      console.error("Erro ao criar orçamento:", error);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          {/* Lista de projetos */}
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
              <h2>Criar Orçamento</h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label>Valor</label>
                <input
                  type="number"
                  name="valor"
                  placeholder="Digite o valor"
                  value={formData.valor}
                  onChange={handleChange}
                  required
                />

                <label>Data de Entrega</label>
                <input
                  type="date"
                  name="dataEntrega"
                  value={formData.dataEntrega}
                  onChange={handleChange}
                  required
                />

                <label>Forma de Pagamento</label>
                <select
                  name="formaPagamento"
                  value={formData.formaPagamento}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="pix">Pix</option>
                  <option value="cartao">Cartão</option>
                  <option value="boleto">Boleto</option>
                </select>

                <label>ID do Projeto</label>
                <input
                  type="Text"
                  name="idProjeto"
                  placeholder={projetoId}
                  value={formData.idProjeto}
                  onChange={handleChange}
                  required
                />

                <button type="submit">Criar Orçamento</button>
              </form>

              {message && <p>{message}</p>}
            </div>
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default CriarOrcamento;
