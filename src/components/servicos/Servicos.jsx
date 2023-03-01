import React from 'react'
import './Servicos.css'

export default function Servicos() {
  return (
    <section className='servico-container'>
      <h1 className='title-service'>Nossos Serviços</h1>
      <div className='servico-content'>
        <div className='services-1'>
          <img className='icons-services' src="./assets/gerador-eletrico.png" alt="" />
          <p className='services-p'>Instalação de Geradores</p>
        </div>
        <div className='services-1'>
          <img className='icons-services-2' src="./assets/manutencao.png" alt="" />
          <p className='services-p'>Manutenção Preventiva e Corretiva</p>
        </div>
        <div className='services-1'>
          <img className='icons-services-2' src="./assets/manutencao.png" alt="" />
          <p className='services-p'>Emissão de Laudo Elétrico</p>
        </div>
        <div className='services-1'>
          <img className='icons-services' src="./assets/sistema-de-monitoramento.png" alt="" />
          <p className='services-p'>Inspeção do Sistema Elétrico - NR10</p>
        </div>
        <div className='services-1'>
          <img className='icons-services' src="./assets/trabalhador.png" alt="" />
          <p className='services-p'>Visita Técnica</p>
        </div>
        <div className='services-1'>
          <img className='icons-services' src="./assets/gestao-de-instalacoes.png" alt="" />
          <p className='services-p'>Inspeção nas instalações elétricas</p>
        </div>
      </div>
    </section>
  )
}
