
import { HeaderST } from "./EstilosHeader";
import { PrimeiraParte } from "./EstilosHeader";
import { SegundaParte, Botao } from "./EstilosHeader";
import LOGO from "../../assets/LOGO.png"
export default function Header() {

  return (
    <div>
        <HeaderST>
                <PrimeiraParte>
                    <img src={LOGO} alt="logo" />
                    <a href="#">HOJE </a>
                    <a href="#">EXPLORAR</a>
                </PrimeiraParte>
                <SegundaParte>
                    <a href="#">SOBRE</a>
                    <a href="#">BUSINESS</a>
                    <a href="#">BLOG</a>
                    <Botao> ENTRAR</Botao>
                    <Botao style={{ backgroundColor: '#FFEA96'}}> CRIAR CONTA</Botao>
                </SegundaParte>
                <div className='SegundaMetade'></div>
        </HeaderST>
    </div>
  )
}
