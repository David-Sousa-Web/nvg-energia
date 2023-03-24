import React from 'react'
import './Servicos.css'

export default function Servicos() {
  return (
      <section class="services">
        <h1>Nossos Serviços</h1>
        <div class="cen">
          <div class="service">
            <i class="fa-solid fa-lightbulb"></i>
            <h2>Instalação de Geradores</h2>
            <p>Somos especializados em soluções de energia, instalamos Grupos Geradores, realizamos projetos avançados e sempre dispostos a resolver os mais variados tipos de problemas.</p>
          </div>

          <div class="service">
            <i class="fa-solid fa-wrench"></i>
            <h2>Manutenção Preventiva e Corretiva</h2>
            <p>Atuamos em maquinas eletricas e comandos eletricos çomo  geradores de energia eletrica, modulos de cabine primárias, transformadores de potencia e SPDA</p>
          </div>

          <div class="service">
            <i class="fa-solid fa-file-invoice"></i>
            <h2>Emissão de Laudo Elétrico</h2>
            <p>Emitimos laudos de SPDA e AVCB com contratos de manutenção preventivos e corretivos de geradores de energia eletrica e  usinas de energia eletrica</p>
          </div>

          <div class="service">
            <i class="fa-solid fa-bolt"></i>
            <h2>Inspeção do Sistema Elétrico - NR10</h2>
            <p>Inspecao de distema eletricos NR 10: Inspecionamos sistemas eletricos conforme normas regulamentadoras e NBRs</p>
          </div>

          <div class="service">
            <i class="fa-solid fa-users-gear"></i>
            <h2>Visita Técnica</h2>
            <p>Atuamos com profissionais habilitados e treinados para melhor atende-los e com experiencia de 20 anos de mercado</p>
          </div>

          <div class="service">
            <i class="fa-solid fa-clipboard-check"></i>
            <h2>Inspeção nas instalações elétricas</h2>
            <p>Realizamos inspeções e instalacoes de potencia eletrica seguindo normas de segursnca e normas regulamentadoras</p>
          </div>
        </div>
      </section>
  )
}
