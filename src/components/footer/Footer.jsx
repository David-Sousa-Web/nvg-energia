import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { empresa, whatsappLink } from '../../data/empresa';
import './Footer.css';

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__top'>
          <img className='footer__logo' src='./assets/ottos-logo-light.png' alt="Otto's Arquitetura e Engenharia" />

          <div className='footer__cols'>
            <div>
              <h4>Navegue</h4>
              <a href='#inicio'>Início</a>
              <a href='#sobre'>Sobre</a>
              <a href='#servicos'>Serviços</a>
              <a href='#projetos'>Projetos</a>
              <a href='#contato'>Contato</a>
            </div>
            <div>
              <h4>Serviços</h4>
              <a href='#servicos'>Arquitetura</a>
              <a href='#servicos'>Engenharia elétrica</a>
              <a href='#servicos'>Grupos geradores</a>
              <a href='#servicos'>Laudos e NR10</a>
              <a href='#servicos'>Segurança do trabalho</a>
            </div>
            <div>
              <h4>Contato</h4>
              <a href={`tel:+${empresa.whatsapp}`}>{empresa.telefone}</a>
              <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
              <span>{empresa.cidade}</span>
              <div className='footer__social'>
                <a href={empresa.instagram} target='_blank' rel='noreferrer' aria-label='Instagram'><FaInstagram /></a>
                <a href={whatsappLink()} target='_blank' rel='noreferrer' aria-label='WhatsApp'><FaWhatsapp /></a>
                <a href={`mailto:${empresa.email}`} aria-label='E-mail'><FiMail /></a>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <span>© {ano} {empresa.nomeCompleto}. Todos os direitos reservados.</span>
          <a href='#inicio' className='footer__topo'>
            Voltar ao topo <FiArrowUp />
          </a>
        </div>
      </div>

      <a href={whatsappLink()} target='_blank' rel='noreferrer' className='whats-float' aria-label='Falar no WhatsApp'>
        <FaWhatsapp />
      </a>
    </footer>
  );
}
