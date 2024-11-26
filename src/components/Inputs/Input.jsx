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


  const handleError = (error) => {
    setMessage(error.response ? error.response.data : "An error occurred");
  };

  return (
    <div>

      <DivsInputs>
        <label style={{ width: "100%" }}>Descrição do Projeto:</label>
        <form onSubmit={handleSubmit}>
        <input type="text" name="descricao" placeholder="Descrição" onChange={handleChange} value={projetoForm.descricao || ''} required style={{ width: "100%", height: "200px" }}/>
        <input type="text" name="largura" placeholder="Largura" onChange={handleChange} value={projetoForm.largura || ''} required style={{ width: "50%" }}/>
        <input type="text" name="altura" placeholder="Altura" onChange={handleChange} value={projetoForm.altura || ''} required style={{ width: "50%" }}/>
        <input type="text" name="comprimento" placeholder="Comprimento" onChange={handleChange} value={projetoForm.comprimento || ''} required style={{ width: "50%" }}/>
        <input type="text" name="material" placeholder="Material" onChange={handleChange} value={projetoForm.material || ''} required style={{ width: "90%" }}/>
        <input type="text" name="statusprojeto" placeholder="Status" onChange={handleChange} value={projetoForm.statusprojeto || ''} required />
        <input type="text" name="followup" placeholder="Followup" onChange={handleChange} value={projetoForm.followup || ''} />
        <input type="date" name="dataFinalizacao" onChange={handleChange} value={projetoForm.dataFinalizacao || ''} style={{ width: "60%" }}/>
        <input type="text" name="imagem" placeholder="Imagem URL" onChange={handleChange} value={projetoForm.imagem || ''} />
        <input type="number" name="usuario" placeholder="User ID" onChange={handleUserChange} value={projetoForm.usuario.id || ''} required style={{ width: "40%", height: "80px" }}/>
        <button type="submit">{'Criar Projeto'}</button>
      </form>

      {message && <p>{message}</p>}       

      </DivsInputs> 
    </div>
  );
}
