import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { empresa, whatsappLink } from '../../data/empresa';
import './Contato.css';

export default function Contato() {
  const [state, handleSubmit] = useForm('xqkvkjlv');

  return (
    <section id='contato' className='section contato'>
      <div className='container contato__grid'>
        <div className='contato__info' data-reveal>
          <span className='eyebrow'>Contato</span>
          <h2 className='section-title'>
            Vamos tirar seu <em>projeto do papel</em>?
          </h2>
          <p className='section-lead'>
            Preencha o formulário ou fale direto pelo WhatsApp. Respondemos em até 24 horas úteis.
          </p>

          <ul className='contato__lista'>
            <li>
              <FiPhone />
              <a href={`tel:+${empresa.whatsapp}`}>{empresa.telefone}</a>
            </li>
            <li>
              <FiMail />
              <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
            </li>
            <li>
              <FiMapPin />
              <span>{empresa.cidade}</span>
            </li>
          </ul>

          <div className='contato__social'>
            <a href={whatsappLink()} target='_blank' rel='noreferrer' className='btn btn--solid'>
              <FaWhatsapp /> Chamar no WhatsApp
            </a>
            <a href={empresa.instagram} target='_blank' rel='noreferrer' className='contato__ig' aria-label='Instagram'>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className='contato__card' data-reveal style={{ '--delay': '0.15s' }}>
          {state.succeeded ? (
            <div className='contato__sucesso' role='status'>
              <span className='contato__sucesso-icone'><FiCheck /></span>
              <h3>Mensagem enviada!</h3>
              <p>Obrigado pelo contato. Em breve nossa equipe retorna para você.</p>
            </div>
          ) : (
            <form className='form' onSubmit={handleSubmit}>
              <div className='form__campo form__campo--full'>
                <label htmlFor='nome'>Nome completo</label>
                <input id='nome' type='text' name='nome' autoComplete='name' required />
                <ValidationError prefix='Nome' field='nome' errors={state.errors} className='form__erro' />
              </div>

              <div className='form__campo'>
                <label htmlFor='email'>E-mail</label>
                <input id='email' type='email' name='email' autoComplete='email' required />
                <ValidationError prefix='E-mail' field='email' errors={state.errors} className='form__erro' />
              </div>

              <div className='form__campo'>
                <label htmlFor='telefone'>Telefone</label>
                <input id='telefone' type='tel' name='telefone' autoComplete='tel' required />
                <ValidationError prefix='Telefone' field='telefone' errors={state.errors} className='form__erro' />
              </div>

              <div className='form__campo form__campo--full'>
                <label htmlFor='area'>Área de interesse</label>
                <select id='area' name='area' defaultValue=''>
                  <option value='' disabled>Selecione</option>
                  <option>Arquitetura (projeto ou reforma)</option>
                  <option>Engenharia elétrica / geradores</option>
                  <option>Laudos, NR10 e segurança do trabalho</option>
                  <option>Outro assunto</option>
                </select>
              </div>

              <div className='form__campo form__campo--full'>
                <label htmlFor='mensagem'>Mensagem</label>
                <textarea id='mensagem' name='mensagem' rows='4' />
                <ValidationError prefix='Mensagem' field='mensagem' errors={state.errors} className='form__erro' />
              </div>

              <button className='btn btn--solid form__enviar' type='submit' disabled={state.submitting}>
                {state.submitting ? 'Enviando…' : 'Enviar mensagem'} <FiArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
