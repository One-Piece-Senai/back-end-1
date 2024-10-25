import React from 'react';
import { DivsInputs } from "./inputs";
import img from "../../assets/16410.png";

export default function Input ()  {
  return (
    <div>
        <DivsInputs>
          <h1 style={{color: "black", fontSize: "40px"}}
          >Especificações do projeto:</h1>

          <label style={{width:"100%"}} >Descrição do Projeto:
            <textarea type="text" style={{width:"100%", height: "200px"}}/>
          </label>
            <div>
              <label style={{width:"33%"}} >Altura:
                <input type="text" style={{width:"50%"}}/>
              </label>
              <label style={{width:"33%"}} >Largura:
                <input type="text"  style={{width:"50%"}}/>
              </label>
              <label style={{width:"33%"}} >Cumprimento:
                <input type="text"  style={{width:"50%"}}/>
              </label>
              <label style={{width:"33%"}} >Material de Impressão:
                <input type="text" style={{width:"90%"}}/>
              </label>
            </div>

            <div style={{
              alignItems: "center", 
              alignContent: "stretch",
              justifyContent: "space-evenly"
            }}>
            <label style={{width:"33%"}} >Data de Finalização :
                <input type="date"   style={{width:"60%"}}/>
              </label>
            <label style={{width:"33%"}} >Adicionar Arquivo:
                <input type="file"  className='arquivo' style={{width:"40%", height:"80px", padding: "0px"}}/>
              </label>
              <label style={{width:"33%"}} >Adicionar Imagem:
                <input type="image" src={img} style={{width:"40%", height:"80px"}}/>
              </label>

              <button style={{marginRight: "20px"}}>Solicitar Projeto</button>
            </div>

             
        </DivsInputs>
    </div>
 )
}
