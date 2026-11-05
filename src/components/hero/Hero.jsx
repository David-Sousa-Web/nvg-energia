import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../../data/empresa';
import './Hero.css';

const numeros = [
  { valor: '20+', texto: 'anos de experiência da equipe' },
  { valor: '4 MW', texto: 'em usina comissionada' },
  { valor: 'NR10', texto: 'inspeções conforme as normas' },
  { valor: '3', texto: 'áreas integradas em um só lugar' },
];

const faixa = [
  'Projetos arquitetônicos',
  'Reformas sustentáveis',
  'Grupos geradores',
  'Projetos elétricos',
  'Laudos SPDA e AVCB',
  'Inspeção NR10',
  'Segurança do trabalho',
  'Vistorias técnicas',
];

// Desenho em traço inspirado na logo: prédios em linhas finas que se desenham ao carregar.
function Skyline() {
  return (
    <svg className='skyline' viewBox='0 0 520 360' fill='none' aria-hidden='true'>
      <g className='skyline__lines' stroke='currentColor' strokeWidth='2'>
        <rect x='40' y='40' width='64' height='300' />
        <rect x='64' y='150' width='70' height='190' />
        <rect x='104' y='96' width='110' height='244' />
        <rect x='176' y='184' width='96' height='156' />
        <rect x='232' y='130' width='130' height='210' />
        <rect x='302' y='222' width='120' height='118' />
        <rect x='362' y='176' width='110' height='164' />
        <line x1='10' y1='340' x2='510' y2='340' />
      </g>
      <g className='skyline__sun' stroke='currentColor' strokeWidth='2'>
        <circle cx='330' cy='78' r='20' />
        <path d='M334 62 L324 80 H336 L326 96' strokeLinejoin='round' />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1='330' y1='48' x2='330' y2='40' transform={`rotate(${a} 330 78)`} />
        ))}
      </g>
      <g className='skyline__dims' stroke='var(--ocre)' strokeWidth='1'>
        <line x1='40' y1='22' x2='104' y2='22' />
        <line x1='40' y1='16' x2='40' y2='28' />
        <line x1='104' y1='16' x2='104' y2='28' />
        <line x1='490' y1='176' x2='490' y2='340' />
        <line x1='484' y1='176' x2='496' y2='176' />
        <line x1='484' y1='340' x2='496' y2='340' />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id='inicio' className='hero'>
      <div className='hero__grid blueprint' aria-hidden='true' />

      <div className='container hero__inner'>
        <div className='hero__content'>
          <span className='eyebrow hero__in' style={{ '--i': 0 }}>Arquitetura · Engenharia · Segurança</span>
          <h1 className='hero__title hero__in' style={{ '--i': 1 }}>
            Projetamos espaços. <em>Garantimos a energia</em> que os move.
          </h1>
          <p className='hero__text hero__in' style={{ '--i': 2 }}>
            Da planta arquitetônica ao grupo gerador: a Otto's reúne arquitetura, engenharia
            elétrica e segurança do trabalho para entregar projetos completos, seguros e sustentáveis.
          </p>
          <div className='hero__actions hero__in' style={{ '--i': 3 }}>
            <a href='#contato' className='btn btn--solid'>
              Solicitar orçamento <FiArrowRight />
            </a>
            <a href={whatsappLink()} className='btn btn--ghost' target='_blank' rel='noreferrer'>
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        <div className='hero__visual hero__in' style={{ '--i': 2 }}>
          <div className='hero__drawing'>
            <Skyline />
            <span className='hero__label hero__label--top'>Fig. 01 — Arquitetura</span>
          </div>
          <figure className='hero__photo'>
            <img src='./assets/hero-energia.png' alt='Engenheiro observando linhas de transmissão ao pôr do sol' />
            <figcaption className='hero__label'>Fig. 02 — Energia</figcaption>
          </figure>
        </div>
      </div>

      <div className='container'>
        <ul className='hero__numbers'>
          {numeros.map((n, i) => (
            <li key={n.valor} className='hero__in' style={{ '--i': 4 + i * 0.5 }}>
              <strong>{n.valor}</strong>
              <span>{n.texto}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='marquee' aria-label='Áreas de atuação'>
        <div className='marquee__track'>
          {[...faixa, ...faixa].map((item, i) => (
            <span key={i} className='marquee__item' aria-hidden={i >= faixa.length}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
