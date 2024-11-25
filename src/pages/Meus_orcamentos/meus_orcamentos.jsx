import React from "react";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";


function MeusOrcamentos () {



return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <h1>Meus Orçamentos</h1>
        </div>
      </div>
    </div>
  );
}

export default MeusOrcamentos; // Adiciona o export default
