
import { HeaderST } from "./EstilosHeader";
import { PrimeiraParte } from "./EstilosHeader";
import { SegundaParte, Botao } from "./EstilosHeader";
import LOGO from "../assets/LOGO.png"
import CadastroModal from '../../MiniTela/Minitela'; // Corrija o caminho se necessário
import { useNavigate } from 'react-router-dom';

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
                    <Botao> <a href="/Login">ENTRAR </a></Botao>
                    <Botao> <a href="/register/cliente">Criar conta de Cliente </a></Botao>
                    <Botao> <a href="/register/projetista">Criar conta de Projetista </a></Botao>
                </SegundaParte>   
                <div className='SegundaMetade'></div>
        </HeaderST>
    </div>
  )
}
