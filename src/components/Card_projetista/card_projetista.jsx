import { Cardprojetista } from './style_projetista';


export default function card_projetista() {
    return (
        <>
            <Cardprojetista className="card_pedidos">
                <div className="modulo">
                <h2 className='titulo'>Engrenagens de um Motor</h2>
                <input type="button" value="Avancar" className="botao_novo" />
                <h3 className="projetista">Fabricio</h3>
                </div>
            </Cardprojetista>
        </>
    )
}