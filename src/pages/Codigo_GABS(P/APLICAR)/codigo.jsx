<form onSubmit={handleSubmit}>
  <label style={{ width: "100%" }}>
    Descrição do Projeto:
    <input
      type="text"
      name="descricao"
      placeholder="Descrição"
      value={projetoForm.descricao || ""}
      onChange={handleInputChange}
      required
      style={{ width: "100%", height: "200px" }}
    />
  </label>
  <div>
    <label style={{ width: "33%" }}>
      Altura:
      <input
        type="text"
        name="altura"
        placeholder="Altura"
        value={projetoForm.altura || ""}
        onChange={handleInputChange}
        required
        style={{ width: "50%" }}
      />
    </label>
    <label style={{ width: "33%" }}>
      Largura:
      <input
        type="text"
        name="largura"
        placeholder="Largura"
        value={projetoForm.largura || ""}
        onChange={handleInputChange}
        required
        style={{ width: "50%" }}
      />
    </label>
    <label style={{ width: "33%" }}>
      Comprimento:
      <input
        type="text"
        name="comprimento"
        placeholder="Comprimento"
        value={projetoForm.comprimento || ""}
        onChange={handleInputChange}
        required
        style={{ width: "50%" }}
      />
    </label>
    <label style={{ width: "33%" }}>
      Material de Impressão:
      <input
        type="text"
        name="material"
        placeholder="Material"
        value={projetoForm.material || ""}
        onChange={handleInputChange}
        required
        style={{ width: "90%" }}
      />
    </label>
  </div>

  <div
    style={{
      alignItems: "center",
      alignContent: "stretch",
      justifyContent: "space-evenly",
    }}
  >
    <label style={{ width: "33%" }}>
      Data de Finalização:
      <input
        type="date"
        name="dataFinalizacao"
        value={projetoForm.dataFinalizacao || ""}
        onChange={handleInputChange}
        style={{ width: "60%" }}
      />
    </label>
    <label style={{ width: "33%" }}>
      Adicionar Arquivo:
      <input
        type="file"
        className="arquivo"
        style={{ width: "40%", height: "80px", padding: "0px" }}
      />
    </label>
    <label style={{ width: "33%" }}>
      Adicionar Imagem:
      <input type="image" src={img} style={{ width: "40%", height: "80px" }} />
    </label>
    <label style={{ width: "33%" }}>
      ID
      <input
        type="number"
        name="usuario"
        placeholder="User ID"
        value={projetoForm.usuario.id || ""}
        onChange={handleInputChange}
        required
      />
    </label>

    <button type="submit" style={{ marginRight: "20px" }}>
      Solicitar Projeto
    </button>
  </div>
</form>;
