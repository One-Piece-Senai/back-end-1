import { DivsInputs } from "./inputs";
import img from "../../assets/16410.png";
import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:8080/projetos";

export default function Input() {
  const [projetos, setProjetos] = useState([]);
  const [projetoForm, setProjetoForm] = useState({
    descricao: "",
    largura: "",
    altura: "",
    comprimento: "",
    material: "",
    statusprojeto: "",
    followup: "",
    dataFinalizacao: "",
    imagem: "",
    usuario: { id: "" },
  });
  const [editProjetoId, setEditProjetoId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProjetos();
  }, []);

  // Fetch all projetos
  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/listar`);
      setProjetos(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjetoForm({
      ...projetoForm,
      [name]: value,
    });
  };

  const handleUserChange = (e) => {
    setProjetoForm({
      ...projetoForm,
      usuario: { id: e.target.value },
    });
  };

  // Handle form submission for creating or updating a projeto
  const handleSubmit_ = async (e) => {
    e.preventDefault();
    if (editProjetoId) {
      await updateProjeto(editProjetoId);
    } else {
      await createProjeto();
    }
  };

  // Create a new projeto
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/criar`, projetoForm);
      setMessage(`Projeto criado com ID: ${response.data.id}`);
      fetchProjetos();
      setProjetoForm({});
    } catch (error) {
      handleError(error);
    }
  };

  // Update an existing projeto
  const updateProjeto = async (id) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/atualizar/${id}`,
        projetoForm,
      );
      setMessage(`Projeto atualizado com ID: ${response.data.id}`);
      fetchProjetos();
      setEditProjetoId(null);
      setProjetoForm({});
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    setMessage(error.response ? error.response.data : "An error occurred");
  };

  // Edit a selected projeto
  const editProjeto = (projeto) => {
    setEditProjetoId(projeto.id);
    setProjetoForm({
      descricao: projeto.descricao,
      largura: projeto.largura,
      altura: projeto.altura,
      comprimento: projeto.comprimento,
      material: projeto.material,
      statusprojeto: projeto.statusprojeto,
      followup: projeto.followup,
      dataFinalizacao: projeto.dataFinalizacao,
      imagem: projeto.imagem,
      usuario: { id: projeto.usuario.id },
    });
  };

  // Delete a projeto
  const deleteProjeto = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/remover/${id}`);
      setMessage("Projeto removido com sucesso");
      fetchProjetos();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div>
      <DivsInputs>
        <label style={{ width: "100%" }}>Descrição do Projeto:</label>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="descricao"
            placeholder="Descrição"
            onChange={handleChange}
            value={projetoForm.descricao || ""}
            required
            style={{ width: "100%", height: "200px" }}
          />
          <div>
            <label style={{ width: "33%" }}>
              Largura:
              <input
                type="text"
                name="largura"
                placeholder="Largura"
                onChange={handleChange}
                value={projetoForm.largura || ""}
                required
                style={{ width: "50%" }}
              />
            </label>
            <label style={{ width: "33%" }}>
              Altura:
              <input
                type="text"
                name="altura"
                placeholder="Altura"
                onChange={handleChange}
                value={projetoForm.altura || ""}
                required
              />
            </label>
            <label style={{ width: "33%" }}>
              Comprimento:
              <input
                type="text"
                name="comprimento"
                placeholder="Comprimento"
                onChange={handleChange}
                value={projetoForm.comprimento || ""}
                required
              />
            </label>
            <label style={{ width: "33%" }}>
              Material de Impressão:
              <input
                type="text"
                name="material"
                placeholder="Material"
                onChange={handleChange}
                value={projetoForm.material || ""}
                required
              />
            </label>
          </div>
          <div
            style={{
              alignItems: "center",
              alignContent: "stretch",
              justifyContent: "space-evenly",
            }}
          ></div>
          <label style={{ width: "33%" }}>
            Status do Projeto:
            <input
              type="text"
              name="statusprojeto"
              placeholder="Status"
              onChange={handleChange}
              value={projetoForm.statusprojeto || ""}
              required
            />
          </label>
          <label style={{ width: "33%" }}>
            Adicionar Arquivo:
            <input
              type="text"
              name="followup"
              placeholder="Followup"
              onChange={handleChange}
              value={projetoForm.caminhoArquivo || ""}
            />
          </label>
          <label style={{ width: "33%" }}>
            Data de Finalização:
            <input
              type="date"
              name="dataFinalizacao"
              onChange={handleChange}
              value={projetoForm.dataFinalizacao || ""}
            />
          </label>
          <label style={{ width: "33%" }}>
            Adicionar Imagem:
            <input
              type="text"
              name="imagem"
              placeholder="Imagem URL"
              onChange={handleChange}
              value={projetoForm.imagem || ""}
            />
          </label>
          <label style={{ width: "33%" }}>
            ID
            <input
              type="number"
              name="usuario"
              placeholder="User ID"
              onChange={handleUserChange}
              value={projetoForm.usuario.id || ""}
              required
            />
          </label>

          <button type="submit">{"Criar Projeto"}</button>
        </form>

        {message && <p>{message}</p>}
      </DivsInputs>
    </div>
  );
}
