
import { MainStyle, Moises } from "./EstilosMain";
import {  Botao } from "./EstilosHeader";
import Barco from "../../assets/barco.jpeg"
import Cubo from "../../assets/cubo.jpeg"
import Gaiola from "../../assets/gaiola.jpeg"
import Lg from "../../assets/lgbt.jpeg"
import Muros from "../../assets/muros.jpeg"
import Nulo from "../../assets/nulo.jpeg"
import Tri from "../../assets/piramide.jpeg"
import Anao from "../../assets/anao.jpeg"
import Engomados from "../../assets/engomados.jpeg"
import Estrutura from "../../assets/estrutura.jpeg"
import Estocao from "../../assets/estocao.jpeg"
import Qualidade from "../../assets/qualidade.jpeg"
import Tronco from "../../assets/tronco.jpeg"
import Zeca from "../../assets/zeca.jpeg"
import Zezin from "../../assets/zezin.jpeg"
import Violao from "../../assets/violao.jpeg"
import Estoque from "../../assets/estoque.jpeg"
import Lupa from "../../assets/lupa.png"


export default function Main() {
  return (
    <div>
        <MainStyle >
          <section style={{ position: 'relative'}}>


             

            <div className="fundoTexto" style={{position: 'absolute', zIndex: '2'}}> 
              <div className="Texto" >
                <h1>Encontre sua próxima ideia</h1>
                <h1 style={{color: '#F2B929'}}>para uma nova impressão especial</h1>
                </div>
            </div>
           

            <div className='divisao' style={{
             justifyContent: 'center',
             alignItems: 'flex-end',
             gap: '25px',
             position: 'absolute',
             zIndex: '1'}}>

              <div className='Retangulos' style={{display: 'flex', alignItems: 'center', paddingBottom: '90px'}}>
              <div className='fotos'>
                <img src={Barco} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
              </div>
            </div>

            <div className='Retangulos' style={{display: 'flex', alignItems: 'flex-end', paddingBottom: '90px'}}>
              <div className='fotos'>
              <img src={Cubo} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
              </div>
            </div>

            <div className='Retangulos' style={{display: 'flex', alignItems: 'flex-end',paddingBottom: '10px'}}>
            <div className='fotos'>
            <img src={Gaiola} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
            </div>
            </div>

            <div className='Retangulos' style={{minWidth: '150px',position: 'relative', paddingTop: '350px'}}>
              <div className='fotos'>
              <img src={Lg} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
              </div>
            </div>  

            <div className='Retangulos' style={{display: 'flex', alignItems: 'flex-end', paddingBottom: '10px'}}>
            <div className='fotos'>
            <img src={Muros} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
            </div>
            </div>

            <div className='Retangulos' style={{display: 'flex', alignItems: 'flex-end', paddingBottom: '90px'}}>
              <div className='fotos'>
              <img src={Nulo} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
              </div>
            </div>

            <div className='Retangulos' style={{display: 'flex', alignItems: 'center', paddingBottom: '90px'}}>
              <div className='fotos'>
              <img src={Tri} alt="barco" style={{
                  width: '160px',
                  height: '250px',
                  borderRadius: '20px'
                }} />
              </div>
            </div>
            </div>


            <div className="next"> VEJA COMO FUNCIONA</div>
            

          </section>
          <section style={{backgroundColor: '#FFEA96', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',zIndex: '997'}}>

            <Moises style={{alignItems: 'flex-end', paddingBottom: '90px'}}>

              <div style={{
                width: '140px',
                height: '180px',
                backgroundColor: 'rgb(0, 255, 153)',
                borderRadius: '25px',
                position: 'relative',
                left: '280px',
                top: '60px',
              }}>  
              <img src={Anao} alt="anao" style={{
                width: '140px',
                height: '180px',
                borderRadius: '25px',
              }} />
              </div>


              <div 
              style={{
                width: '130px',
                height: '140px',
                backgroundColor: 'rgb(0, 0, 0)',
                borderRadius: '25px',
                position: 'relative',
                top: '-230px',
                left: '145px',
              }}
              >
                <img src={Engomados} alt="homens"  style={{width: '130px',
                height: '140px', borderRadius: '25px',}}/>
              </div>


              <div
              style={{
                width: '250px',
                height: '300px',
                backgroundColor: 'rgb(255, 0, 0)',
                borderRadius: '25px',
                position: 'absolute',
                zIndex: '1',
              }}
              >

              <img src={Estrutura} alt="treco" style={{
                width: '250px',
                height: '300px',
                borderRadius: '25px',
              }}/>

<div
              style={{
                width: '165px',
                height: '55px',
                borderRadius: '30px',
                backgroundColor:' rgb(255, 255, 255)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                zIndex: '2',
                gap: '10px',
                paddingLeft: '10px',
                marginTop: '-250px',
                marginLeft: '-40px'
                
              }}
              >
                <img src={Lupa} alt="lupa" style={{
                  width: '25px',
                  height: '25px'
                }}/>

                <p style={{
                  fontWeight: '700',
                  fontFamily: 'roboto, sans-serif',
                }}>Manoplas</p>
              </div>
              </div>


              <div
              style={{
                width: '140px',
                height: '200px',
                backgroundColor: 'pink',
                borderRadius: '25px',
                position: 'relative',
                left: '-300px',
                top: '-60px'
              }}
              >
                <img src={Estocao} alt="estocao" style={{
                  width: '140px',
                  height: '200px',
                  borderRadius: '25px',
                }}/>
              </div>


              


            </Moises>
            <Moises >
                      <div style={{
                        width: '345px',
                        height: '400px',
                        backgroundColor: 'rgba(128, 128, 128, 0)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        paddingBottom: '40px',
                        alignItems: 'center',
                        gap: '30px',
                      }}>
                    <h1>Proucure uma ideia </h1>
                    <p style={{textAlign: 'center'}}>
                        O que você deseja imprimir?
                        
                        Qual o material?    
                        
                        Proucure algo do seu interesse como
                         
                        “manopla do infinito”
                        
                        e veja as impressoras 3D mais perto 
                        
                        de você
                    </p>
                    <Botao style={{backgroundColor: 'black'}}> BUSCAR</Botao>
                </div>
            </Moises>

          </section>
          <section style={{backgroundColor: '#FFD32C'}}>

            <Moises>
            <div style={{
                        width: '405px',
                        height: '400px',
                        backgroundColor: 'rgba(128, 128, 128,0)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        paddingBottom: '40px',
                        alignItems: 'center',
                        gap: '30px',
                      }}>
                    <h1>Descubra novas possibilidades</h1>
                    <p style={{textAlign: 'center'}}>
                        Salve novas ideias nos favoritos para acessa-los novamente depois
                    </p>
                    <Botao style={{backgroundColor: 'black'}}> EXPLORAR</Botao>
                </div>
            </Moises>


            <Moises >
                <div style={{
                    marginTop:'60px',
                    marginLeft: '40px',
                    width: '420px',
                    height: '430px',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: '0'
                
                }}>
                  <div style={{
                    width: '60%',
                    height: '430px',
                    backgroundColor: 'rgba(255, 0, 0, 0)',
                    gap: '25px',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'end',
                    flexDirection: 'column',
                    borderRadius: '0'
                  }}>

                    <div style={{
                      width: '240px',
                      height: '240px',
                      backgroundColor: 'aqua',
                      borderRadius: '40px',
                    }}>
                      <img src={Qualidade} alt="coisas"  style={{
                        width: '240px',
                        height: '240px',
                        borderRadius: '40px',
                      }}/>
                    </div>

                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: 'aqua ',
                      borderRadius: '30px',
                      marginRight: '10px',
                    }}>
                      <img src={Tronco} alt="tronco" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '30px',
                      }}/>
                    </div>
                  </div>




                  <div style={{
                    width: '40%',
                    height: '430px',
                    backgroundColor: 'rgba(128, 128, 128, 0)',
                    display: 'flex',
                    alignItems: 'end',
                    flexDirection: 'column',
                    gap: '25px',
                    padding: '5px',
                  }}>

                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: 'aqua' ,
                      borderRadius: '30px',
                      marginRight: '10px',
                    }}>
                      <img src={Zeca} alt="fafa" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '30px',
                      }}/>
                    </div>

                    <div style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: 'aqua',
                      borderRadius: '20px',
                      marginRight: '50px',
                    }}> 
                    <img src={Zezin} alt="zezo" style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '20px',
                    }}/>
                    </div>
                    
                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: 'aqua' ,
                      borderRadius: '30px',
                      marginRight: '10px',
                    }}>
                      <img src={Violao} alt="sla" style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '30px',
                      }}/>
                    </div>
                  </div>
                  
                </div>
            </Moises>

          </section>

          <section style={{backgroundColor: '#f2b929'}}>
            <Moises style={{backgroundColor: 'red'}}>
              <img src={Estoque} alt="treco"  style={{
                width: '100%',
                height: '100%',
              }}/>
            </Moises>

            <Moises>

            <div style={{
                        width: '405px',
                        height: '400px',
                        backgroundColor: 'rgba(128, 128, 128,0)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        paddingBottom: '40px',
                        alignItems: 'center',
                        gap: '30px',
                      }}>
                    <h1>Veja, faça, planeje, crie</h1>
                    <p style={{textAlign: 'center'}}>
                        Descubra as melhores ideias para impressões 3D de pessoas do mundo todo
                    </p>
                    <Botao style={{backgroundColor: 'black'}}> EXPLORAR</Botao>
                </div>

            </Moises>
          </section>
          
        </MainStyle >
    </div>
  )
}
