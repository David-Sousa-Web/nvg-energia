import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Servicos.css';

const areas = [
  {
    id: 'arquitetura',
    titulo: 'Arquitetura',
    resumo:
      'Projetos e reformas sustentáveis com assessoria completa: orientamos cada decisão e acompanhamos a obra do planejamento à execução.',
    servicos: [
      { nome: 'Projetos arquitetônicos', texto: 'Residenciais e comerciais, do estudo preliminar ao projeto executivo.' },
      { nome: 'Reformas sustentáveis', texto: 'Soluções que aproveitam luz, ventilação e materiais para reduzir custos.' },
      { nome: 'Interiores e layout', texto: 'Ambientes funcionais pensados para quem vai usar o espaço.' },
      { nome: 'Assessoria e acompanhamento de obra', texto: 'Suporte técnico em todas as fases, até a entrega.' },
    ],
  },
  {
    id: 'eletrica',
    titulo: 'Engenharia Elétrica',
    resumo:
      'Especialistas em soluções de energia: instalamos grupos geradores, desenvolvemos projetos elétricos e resolvemos os mais variados problemas.',
    servicos: [
      { nome: 'Instalação de grupos geradores', texto: 'Dimensionamento, instalação e comissionamento para empresas de todos os portes.' },
      { nome: 'Manutenção preventiva e corretiva', texto: 'Geradores, cabines primárias, transformadores de potência e comandos elétricos.' },
      { nome: 'Projetos elétricos', texto: 'Baixa, média e alta tensão, com foco em eficiência energética.' },
      { nome: 'Retrofit e automação', texto: 'Modernização de módulos e unidades automáticas de geradores.' },
    ],
  },
  {
    id: 'seguranca',
    titulo: 'Laudos & Segurança',
    resumo:
      'Inspeções, laudos e programas de segurança que protegem pessoas e patrimônio, sempre conforme normas regulamentadoras e NBRs.',
    servicos: [
      { nome: 'Laudos SPDA e AVCB', texto: 'Emissão de laudos com contratos de manutenção preventiva e corretiva.' },
      { nome: 'Inspeção NR10', texto: 'Avaliação completa de sistemas e instalações elétricas.' },
      { nome: 'Engenharia de segurança', texto: 'Projetos de prevenção, treinamentos e brigada de incêndio.' },
      { nome: 'Segurança do trabalho e meio ambiente', texto: 'Vistorias técnicas e adequação às exigências legais.' },
    ],
  },
];

export default function Servicos() {
  const [ativa, setAtiva] = useState(0);
  const area = areas[ativa];

  return (
    <section id='servicos' className='section servicos'>
      <div className='container'>
        <div className='servicos__head'>
          <div>
            <span className='eyebrow eyebrow--light' data-reveal>Nossos serviços</span>
            <h2 className='section-title' data-reveal>
              Do projeto à <em>manutenção</em>, tudo em um só lugar.
            </h2>
          </div>
          <p className='section-lead' data-reveal>
            Três frentes que trabalham juntas: o arquiteto projeta o espaço, o engenheiro garante a
            energia e a segurança valida cada detalhe.
          </p>
        </div>

        <div className='servicos__body' data-reveal>
          <div className='servicos__tabs' role='tablist' aria-label='Áreas de atuação'>
            {areas.map((a, i) => (
              <button
                key={a.id}
                role='tab'
                id={`tab-${a.id}`}
                aria-selected={ativa === i}
                aria-controls={`painel-${a.id}`}
                className={`servicos__tab ${ativa === i ? 'is-active' : ''}`}
                onClick={() => setAtiva(i)}
              >
                <span className='servicos__num'>0{i + 1}</span>
                <span className='servicos__tab-title'>{a.titulo}</span>
                <FiArrowRight className='servicos__arrow' />
              </button>
            ))}
          </div>

          <div
            key={area.id}
            className='servicos__panel'
            role='tabpanel'
            id={`painel-${area.id}`}
            aria-labelledby={`tab-${area.id}`}
          >
            <p className='servicos__resumo'>{area.resumo}</p>
            <ul className='servicos__lista'>
              {area.servicos.map((s, i) => (
                <li key={s.nome} style={{ '--n': i }}>
                  <h3>{s.nome}</h3>
                  <p>{s.texto}</p>
                </li>
              ))}
            </ul>
            <a href='#contato' className='btn btn--light servicos__cta'>
              Falar sobre {area.titulo.toLowerCase()} <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
