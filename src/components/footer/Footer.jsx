import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div>
        <p className='logo-nvg'>NVG <strong className='logo-energia'>Energia</strong></p>
        <p className='p-footer'>Nosso compromisso com a inovação nos leva a desenvolver tecnologias de energia limpa.</p>
      </div>
      <div className='footer-content'>
        <div className='footer-sobre'>
          <a href="#quem-somos" className='footer-sobre-content'>Sobre</a>
          <a href="#Servicos" className='footer-sobre-content'>projetos</a>
          <a href="#Home" className='footer-sobre-content'>inicio</a>
        </div>
        <div className='footer-sobre'>
          <p className='footer-sobre-content'>termos</p>
          <p className='footer-sobre-content'>política de privacidade</p>
          <p className='footer-sobre-content'>Cookies</p>
        </div>
        <div className='footer-sobre'>
          <p className='footer-sobre-content'>contate-nos</p>
          <p className='footer-sobre-content'>contato@nvgenergia.com.br</p>
          <div className='icons-container-footer'>
            <a href='https://www.instagram.com/nvg.energia/' className='icons-footer' target="_blank" rel="noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>   
          </div>
        </div>
      </div>
    </footer>
  )
}
