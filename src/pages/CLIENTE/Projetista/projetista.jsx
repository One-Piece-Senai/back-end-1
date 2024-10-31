import SideBar from '../../../components/sidebar/sidebar';
import BarraDeBusca from '../../../components/barra-de-busca/barra-busca';
import { MiniStyle } from '../../../components/mini-card/mini-style';
import CardProjetistasDisp from '../../../components/card-projetistas-disponiveis/projetistas-disponiveis';

function Projetista() {
  return (
    <div style={{display:'flex', backgroundColor:'grey', height:'100vh'}}>
        <SideBar />
        <div style={{margin:'30px'}}>
          <h1>Projetistas </h1>
          <section style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'50px', alignItems:'center'}}>
             <CardProjetistasDisp />
             <CardProjetistasDisp />
             <CardProjetistasDisp />
             <CardProjetistasDisp />
             <CardProjetistasDisp />
             <CardProjetistasDisp />
             <CardProjetistasDisp />
             <CardProjetistasDisp />
          </section>
        </div>
    </div>
  );
}

export default Projetista;

