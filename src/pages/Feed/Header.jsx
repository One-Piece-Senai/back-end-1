
import { HeaderST } from "./EstilosHeader";
import { PrimeiraParte } from "./EstilosHeader";
import { SegundaParte, Botao } from "./EstilosHeader";
import LOGO from "../../assets/LOGO.png"
import logo from "../../assets/logo.svg";

export default function Header() {

  return (
    <div>
        <HeaderST>
                <PrimeiraParte>
                    <img src={logo} alt="logo" />
                </PrimeiraParte>
                <SegundaParte>
                    <a href="#">SOBRE</a>
                     <Botao > <a href="/login">LOGIN</a> </Botao>
                    <Botao style={{ backgroundColor: '#FFEA96'}}> <a href="/cadastrar-senha">CADASTRAR AQUI</a></Botao>
                </SegundaParte>
                <div className='SegundaMetade'></div>
        </HeaderST>
    </div>
  )
}
