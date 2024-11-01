import React, { useState } from 'react'; 
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import './styles/Ajuda.css';



function Ajuda() {
  const [modalOpen, setModalOpen] = useState(false);
  const [resposta, setResposta] = useState('');
  const [closeButtonClicked, setCloseButtonClicked] = useState(false);

  const perguntas = [
    {
      id: 1,
      texto: "Quem somos?",
      resposta: "Somos uma plataforma dedicada a conectar projetistas e clientes, facilitando a comunicação e as transações de projetos de impressão 3D. Nossa missão é transformar ideias em realidade, proporcionando um espaço onde criatividade e tecnologia se encontram."
    },
    {
      id: 2,
      texto: "Que tipo de projetos de impressão 3D posso solicitar?",
      resposta: "Você pode solicitar uma ampla variedade de projetos de impressão 3D, incluindo protótipos, modelos para jogos, peças personalizadas, acessórios, decoração, itens funcionais e muito mais. Nossos projetistas estão prontos para atender às suas necessidades específicas."
    },
    {
      id: 3,
      texto: "Como são entregues os projetos?",
      resposta: "Os projetos são entregues em formato digital, geralmente como arquivos STL ou OBJ, prontos para impressão. Dependendo do acordo, também podemos oferecer serviços de impressão e envio físico das peças."
    },
    {
      id: 4,
      texto: "Como funciona o processo de contratação de um projetista 3D?",
      resposta: "Após descrever seu projeto na plataforma, você receberá propostas de projetistas qualificados. Você pode avaliar seus portfólios, discutir detalhes e preços, e, em seguida, formalizar a contratação através da plataforma."
    },
    {
      id: 5,
      texto: "O que é necessário para que o projetista inicie o trabalho?",
      resposta: "Para iniciar o trabalho, o projetista precisa de uma descrição clara do projeto, incluindo referências visuais, dimensões, materiais desejados e prazos. Quanto mais informações você fornecer, melhor será o resultado final."
    },
    {
      id: 6,
      texto: "Quais são os prazos para concluir um projeto de impressão 3D?",
      resposta: "Os prazos variam de acordo com a complexidade do projeto e a carga de trabalho do projetista. Em geral, um projeto pode levar de alguns dias a algumas semanas. O prazo exato será acordado entre você e o projetista."
    },
    {
      id: 7,
      texto: "Quais são as ferramentas utilizadas na impressão 3D?",
      resposta: "As ferramentas utilizadas incluem impressoras 3D (como FDM, SLA e SLS), softwares de modelagem 3D (como Blender, Tinkercad, SolidWorks), e ferramentas de pós-processamento, como lixadeiras e tintas."
    },
    {
      id: 8,
      texto: "Como garantir a qualidade da impressão?",
      resposta: "Para garantir a qualidade da impressão, trabalhamos com projetistas experientes que seguem melhores práticas de modelagem e impressão. Além disso, incentivamos a comunicação constante entre clientes e projetistas para ajustes e feedback ao longo do processo."
    },
    {
      id: 9,
      texto: "Quais são os custos envolvidos no processo?",
      resposta: "Os custos variam conforme a complexidade do projeto, materiais utilizados e tempo estimado para conclusão. Nossos projetistas fornecem orçamentos detalhados antes do início do trabalho, garantindo transparência nas transações."
    },
  ];

  const handleOpenModal = (resposta) => {
    setResposta(resposta);
    setModalOpen(true);
    setCloseButtonClicked(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setResposta('');
    setCloseButtonClicked(false);
  };

  const handleClickCloseButton = () => {
    setCloseButtonClicked(true);
    setTimeout(handleCloseModal, 100);
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <div className="container-ajuda">
            <div className="column">
              {perguntas.slice(0, 5).map((pergunta) => (
                <div 
                  key={pergunta.id} 
                  className="ajuda-card" 
                  onClick={() => handleOpenModal(pergunta.resposta)}
                >
                  {pergunta.texto}
                </div>
              ))}
              <div className="ajuda-card" style={{ visibility: 'hidden' }}></div>
            </div>
            <div className="column">
              {perguntas.slice(5, 9).map((pergunta) => (
                <div 
                  key={pergunta.id} 
                  className="ajuda-card" 
                  onClick={() => handleOpenModal(pergunta.resposta)}
                >
                  {pergunta.texto}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="close-button-container">
              <button 
                className={`close-button ${closeButtonClicked ? 'clicked' : ''}`} 
                onClick={handleClickCloseButton}
              >
                X
              </button>
            </div>
            <div className="modal-text">{resposta}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ajuda;
