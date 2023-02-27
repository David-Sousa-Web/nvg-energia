import React from 'react'
import { FaLightbulb } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import './Sobre.css'

export default function Sobre() {
  return (
    <section id="quem-somos">
      <div className="container">
        <div className="row">
        <h1 className="sobre__titulo">QUEM SOMOS</h1>
          <div className="col-md-6">
            <div className="shadow-box">
              <p className="shadow-box__text">A nossa empresa de energia foi fundada em 2016 com o objetivo de fornecer soluções energéticas sustentáveis e eficientes para nossos clientes. Desde então, temos crescido e nos tornamos uma das principais empresas do setor, oferecendo serviços de qualidade e suporte técnico excepcional.</p>
              <p className="shadow-box__text">Oferecemos aos nossos clientes soluções completas e atendimento com <strong>Qualidade</strong>, <em>Confiabilidade</em> e <em>Segurança</em>.</p>
            </div>
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
      </div>
    </section>

  )
}

