import { SidebarComponent } from './sideStyle.js'

import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho-icon.svg'
import box from '../../assets/box-ixon.svg'
import people from '../../assets/people.svg'
import settings from '../../assets/settings.svg'
import askIcon from '../../assets/ask-icon.svg'



export default function SideBar() {
    return(
        <>
            <SidebarComponent>
                <img src={logo} alt="" />
                <ul>
                    <li><img src={carrinho} /> Fazer Orcamento</li>
                    <li><img src={box} />      Pedidos</li>
                    <li><img src={people} />   Clientes</li>
                    <li><img src={settings} /> Configurações</li>
                    <li><img src={askIcon}  /> Ajuda</li>
                </ul>
            </SidebarComponent>
        </>
    )
}