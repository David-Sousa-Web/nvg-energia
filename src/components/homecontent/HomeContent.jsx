import React from 'react'
import './HomeContent.css'

export default function HomeContent() {
  return (
    <section className='home'>
      <img className='fundo' src="./assets/foto-01_dia_do_engenheiro_elétrico - Editado - Editado (1).png" alt="fundo" />
      <div className='homecontainer'>
        <h1><span>NVG</span> Energia</h1>
        <span className='titlecontent'>
          Nascemos com o propósito de oferecer soluções em energia com grupos 
          geradores para as pequenas, médias e grandes empresas.
        </span> 
      </div>      
    </section>
  )
}
