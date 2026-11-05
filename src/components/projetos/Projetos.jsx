import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { empresa } from '../../data/empresa';
import './Projetos.css';

const projetos = [
  {
    img: 'projeto-usina-4mw.jfif',
    categoria: 'Comissionamento',
    titulo: 'Módulo de rede com usina de 4 MW',
    classe: 'projeto--largo',
  },
  {
    img: 'projeto-alternador.jfif',
    categoria: 'Manutenção',
    titulo: 'Rejuvenescimento do alternador de gerador de 500 kVA',
    classe: 'projeto--alto',
  },
  {
    img: 'projeto-atenuadores.jfif',
    categoria: 'Inspeção',
    titulo: 'Atenuadores de ruído da sala de geradores',
  },
  {
    img: 'projeto-gerador-550kva.jfif',
    categoria: 'Manutenção preventiva',
    titulo: 'Gerador de 550 kVA: comando e sobressalentes',
  },
  {
    img: 'projeto-visita-tecnica.jfif',
    categoria: 'Visita técnica',
    titulo: 'Diagnóstico para manutenção corretiva',
  },
  {
    img: 'projeto-retrofit.jfif',
    categoria: 'Retrofit',
    titulo: 'Módulo da unidade automática do gerador',
  },
];

export default function Projetos() {
  return (
    <section id='projetos' className='section projetos'>
      <div className='container'>
        <div className='projetos__head'>
          <div>
            <span className='eyebrow' data-reveal>Projetos</span>
            <h2 className='section-title' data-reveal>
              Trabalhos <em>entregues</em>.
            </h2>
          </div>
          <p className='section-lead' data-reveal>
            Alguns dos serviços realizados pela nossa equipe em geradores, usinas e instalações
            elétricas de clientes.
          </p>
        </div>

        <div className='projetos__grid'>
          {projetos.map((p, i) => (
            <figure
              key={p.img}
              className={`projeto ${p.classe || ''}`}
              data-reveal
              style={{ '--delay': `${(i % 3) * 0.1}s` }}
            >
              <img src={`./assets/${p.img}`} alt={p.titulo} loading='lazy' />
              <figcaption>
                <span className='projeto__cat'>{p.categoria}</span>
                <span className='projeto__titulo'>{p.titulo}</span>
              </figcaption>
            </figure>
          ))}

          <a
            href={empresa.instagram}
            target='_blank'
            rel='noreferrer'
            className='projeto projeto--card'
            data-reveal
            style={{ '--delay': '0.2s' }}
          >
            <FaInstagram className='projeto__ig' />
            <span className='projeto__card-title'>Acompanhe novos projetos de arquitetura e engenharia</span>
            <span className='projeto__card-link'>
              {empresa.instagramUser} <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
