import { BarraBusca } from "../../../components/barra-de-busca/style-barra-busca";
import SectionPerfil  from "../../../components/section-perfil/section-perfil";
import SideBar        from "../../../components/sidebar/sidebar";
import StatusGrup     from "../../../components/status-grup/status-grup";

export default function PerfilCliente(){
    return(
        <div style={{display:"flex", backgroundColor: "#bebebe"}}>
            <SideBar />
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column", padding:"20px",  width:"100%"}}>
                <BarraBusca />
                <SectionPerfil />
                <StatusGrup />
            </div>
        </div>
    )
}