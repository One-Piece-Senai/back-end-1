import { SidebarComponent } from './sideStyle.js'
import { Link } from 'react-router-dom';


import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho-icon.svg'
import box from '../../assets/box-ixon.svg'
import people from '../../assets/people.svg'
import settings from '../../assets/settings.svg'
import askIcon from '../../assets/ask-icon.svg'



export default function SideBar(props) {
    return(
        <>
            <SidebarComponent corfundo={props.CorFundo}>
                <Link to="/"><img className='logo' src={logo} alt="" /></Link>
                <ul>
                    <li><img className='icone' src={carrinho}/> Fazer Pedido</li>
                    <li><img className='icone' src={box}/> <Link to="/projetista">Projetista</Link></li>
                    <li><img className='icone' src={people}/>   Clientes</li>
                    <li><img className='icone' src={settings}/> Configurações</li>
                    <li><img className='icone' src={askIcon}/>  Ajuda</li>
                </ul>
            </SidebarComponent>
        </>
    )
}