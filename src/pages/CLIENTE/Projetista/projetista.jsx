import SideBar from '../../../components/sidebar/sidebar';
import BarraDeBusca from '../../../components/barra-de-busca/barra-busca';
import { MiniStyle } from '../../../components/mini-card/mini-style';

function Projetista() {
  return (
    <div>
        <SideBar />
        <>
          <h1>Projetistas </h1>
          <section>
            <div className="card-projetista">
              <img src="" alt="" />
              <p>Maria José</p>
              <h4>1200 px<span>Level 12</span></h4>
              <article>
                <MiniStyle title="20" num="20" />
              </article>
            </div>
          </section>
        </>
    </div>
  );
}

export default Projetista;

