
import { StyleFooter } from "./EstiloFooter";
import {  Moises } from "./EstilosMain";
import {  Botao } from "./EstilosHeader";
import LOGO from "../assets/LOGO.png"
export default function Footer() {

  return (

    <div>

        <StyleFooter >

          <Moises>
            <h1 style={{
              lineHeight: '60px',
              color: 'white'
            }}>
              INSCREVA-SE
              <br></br>
               PARA VER 
               <br></br>
               IDEIAS </h1>
          </Moises>


          <Moises style={{
            alignItems: 'center',
            paddingTop: '100px'
          }}>
            <div style={{
              width: '350px',
              height: '590px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
           
            }}>
            <img src={LOGO} alt="LOGO" />
            <h1 style={{
              textAlign: 'center',
              fontSize: '25px'
            }}>Bem Vindo(a) ao One Piece </h1>

            <p style={{
              fontSize: '15px'
            }}>Ache novas ideias para experimentar</p>


            <div style={{
              width: '200px',
              height: '590px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              
            }}>

            <label >

              Email
              <input type="text" placeholder="Email" />
              </label>



            <label >

              Senha
              <input type="text" placeholder="Crie uma senha"/>
              </label>



            <label >

                 Data de Nascimento 
              <input type="date" />
              </label>
              <div
              style={{
                gap: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}><Botao style={{
                width: '200px'
              }}>Continuar</Botao>
              OU 
              <Botao>
                Continuar com Google
              </Botao>
              <p 
              style={{
                fontSize: '10px',
                textAlign: 'center'
              }}>

                Ao continuar, você concorda com os 
                <a href="#" style={{
                fontSize: '10px',
                color: 'black'
              }}>Termos de Serviço</a>

                do One Piece e confirma que leu nossa <a href="#" style={{
                fontSize: '10px', color: 'black'
              }}>Politica de Privacidade.</a>
              </p>
              <a href="#" style={{
                fontSize: '10px',color: 'black'
              }}>Aviso na coleta de informações.</a>


              <p style={{
                fontSize: '10px'
              }}>Já tem uma conta? <a href="#" style={{
                fontSize: '10px',color: 'black'
              }}>Entrar</a> </p>  
              
            </div>
              </div><div style={{
              width: '350px',
              maxHeight: '40px',
              backgroundColor: 'gray',
              textAlign: 'center',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',

            }}>Criar uma conta Business gratuita</div>
            </div>
            
          </Moises>

        </StyleFooter>



    </div>

  )
}
