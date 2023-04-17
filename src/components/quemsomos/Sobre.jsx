import React from 'react'
import { FaLightbulb } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import './Sobre.css'

export default function Sobre() {
  return (
    <>
      <section id="quem-somos">
        <div className="container">
            <h1 className="sobre__titulo">Sobre nós</h1>
              <div className="shadow-box">
                <p className="shadow-box__text">A nossa empresa de energia foi fundada em 2016 com o objetivo de fornecer soluções energéticas sustentáveis e eficientes para nossos clientes. Desde então, temos crescido e nos tornamos uma das principais empresas do setor, oferecendo serviços de qualidade e suporte técnico excepcional.</p>
                <p className="shadow-box__text">Oferecemos aos nossos clientes soluções completas e atendimento com <strong>Qualidade</strong>, <em>Confiabilidade</em> e <em>Segurança</em>.</p>
              </div>
            <div className="col-md-6">
              <div className="icons-container">
                <div className="icon-box">
                  <FaLightbulb className="icon" />
                  <h3>Inovação</h3>
                  <p>Nosso compromisso com a inovação nos leva a desenvolver tecnologias de energia limpa.</p>
                </div>
                <div className="icon-box">
                  <IoIosPeople className="icon" />
                  <h3>Equipe</h3>
                  <p>Contamos com uma equipe de profissionais especialistas com mais de 20 anos de experiência com Grupo Geradores.</p>
                </div>
              </div>
            </div>
        </div>
        <div className='somos-img'>
          <img className='imagem-somos' src="./assets/engenheiro-eletrico-ou-eletricista-1.jpeg" alt="" />
        </div>

        
      </section>

      <div className='faleconosco-img'>
        <div className='fundoconosco-text'>
          <h1>PORQUE A NVG ENERGIA</h1>
          <p>A Nvg Energia tem equipes formadas por profissionais altamente capacitados e treinados para oferecer para você o melhor serviço Elétrico.</p>
          <a href="#Contato" className='btn'>Fale Conosco</a>
        </div>
      </div>
    </>
  )
}

