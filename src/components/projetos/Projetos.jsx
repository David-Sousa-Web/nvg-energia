import React from 'react'
import './Projetos.css'

export default function Projetos() {
  return (
    <>
    <section id="works" className="projetos-container">
      <div className="inner-width">
        <h1 className="section-title">Projetos</h1>
        <div className="works">
          <div className="work">
            <img src="./assets/image1.jfif" alt=""/>
            <div className="info">
              <div className="cat">Inspeção e manutenção dos atenuadores de ruidos da sala dos geradores</div>
            </div>
          </div>

          <div className="work">
            <img src="./assets/image2.jfif" alt=""/>
            <div className="info">
              <div className="cat">Manutenção preventiva do Gerador de 550KVA reapeto de comando e sobressalentes</div>
            </div>
          </div>

          <div className="work">
            <img src="./assets/image3.jfif" alt=""/>
            <div className="info">
              <div className="cat">Rejuvenecimento do alternador de potencia do Gerador de 500KVA</div>
            </div>
          </div>

          <div className="work">
            <img src="./assets/image4.jfif" alt=""/>
            <div className="info">
              <div className="cat">Comissionamento do modulo de rede com uma Usina de  4 MW</div>
            </div>
          </div>

          <div className="work">
            <img src="./assets/image5.jfif" alt=""/>
            <div className="info">
              <div className="cat">Visita Tecnica para Manutenção Corretiva</div>
            </div>
          </div>

          <div className="work">
            <img src="./assets/image6.jfif" alt=""/>
            <div className="info">
              <div className="cat">Retrofit do modulo da unidade automatica do gerador</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
