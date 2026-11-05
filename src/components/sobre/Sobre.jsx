import React from 'react';
import { FiShield, FiCheckCircle, FiFeather } from 'react-icons/fi';
import './Sobre.css';

const valores = [
  {
    icone: <FiCheckCircle />,
    titulo: 'Qualidade',
    texto: 'Projetos bem resolvidos, do primeiro traço à entrega, com acompanhamento em cada etapa.',
  },
  {
    icone: <FiShield />,
    titulo: 'Segurança',
    texto: 'Tudo executado conforme normas regulamentadoras e NBRs, com profissionais habilitados.',
  },
  {
    icone: <FiFeather />,
    titulo: 'Sustentabilidade',
    texto: 'Reformas e soluções energéticas pensadas para reduzir consumo, desperdício e custos.',
  },
];

export default function Sobre() {
  return (
    <section id='sobre' className='section sobre'>
      <div className='container sobre__grid'>
        <div className='sobre__media' data-reveal>
          <img src='./assets/equipe-campo.jpeg' alt='Equipe técnica realizando medições em um painel elétrico' />
          <div className='sobre__badge'>
            <img src='./assets/ottos-mark-light.png' alt='' />
            <span>Desde 2016</span>
          </div>
        </div>

        <div className='sobre__content'>
          <span className='eyebrow' data-reveal>Quem somos</span>
          <h2 className='section-title' data-reveal>
            Uma equipe, <em>três especialidades</em>, um projeto completo.
          </h2>
          <p className='section-lead' data-reveal>
            A Otto's nasceu da experiência em soluções de energia e cresceu para ir além: hoje unimos
            arquitetura, engenharia elétrica e engenharia de segurança para atender residências,
            comércios e indústrias com uma visão integrada.
          </p>
          <p className='section-lead' data-reveal>
            Nossa equipe soma mais de 20 anos de experiência com grupos geradores e sistemas elétricos,
            e agora também projeta e reforma os espaços onde essa energia é usada — do planejamento à
            execução.
          </p>

          <ul className='valores'>
            {valores.map((v, i) => (
              <li key={v.titulo} className='valor' data-reveal style={{ '--delay': `${i * 0.1}s` }}>
                <span className='valor__icone'>{v.icone}</span>
                <div>
                  <h3>{v.titulo}</h3>
                  <p>{v.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
