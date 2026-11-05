import React from 'react';
import './Processo.css';

const etapas = [
  {
    titulo: 'Visita técnica',
    texto: 'Entendemos a necessidade no local, fazemos o levantamento e o diagnóstico inicial.',
  },
  {
    titulo: 'Projeto',
    texto: 'Desenvolvemos a solução arquitetônica e/ou elétrica, com orçamento claro e normas atendidas.',
  },
  {
    titulo: 'Execução',
    texto: 'Equipe habilitada executa e acompanha a obra ou instalação, com segurança em cada etapa.',
  },
  {
    titulo: 'Laudos & manutenção',
    texto: 'Entregamos laudos e seguimos ao seu lado com contratos de manutenção preventiva.',
  },
];

export default function Processo() {
  return (
    <section className='section processo'>
      <div className='container'>
        <span className='eyebrow' data-reveal>Como trabalhamos</span>
        <h2 className='section-title' data-reveal>
          Um caminho claro, <em>do primeiro contato à entrega</em>.
        </h2>

        <ol className='processo__lista'>
          {etapas.map((e, i) => (
            <li key={e.titulo} className='etapa' data-reveal style={{ '--delay': `${i * 0.12}s` }}>
              <span className='etapa__num'>{String(i + 1).padStart(2, '0')}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
