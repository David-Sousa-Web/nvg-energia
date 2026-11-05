import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Header.css';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--open' : ''}`}>
      <div className='container header__inner'>
        <a href='#inicio' className='brand' onClick={closeMenu} aria-label="Otto's Arquitetura e Engenharia — início">
          <img className='brand__mark' src='./assets/ottos-mark-dark.png' alt='' />
          <span className='brand__text'>
            <span className='brand__name'>Otto's</span>
            <span className='brand__tag'>Arquitetura &amp; Engenharia</span>
          </span>
        </a>

        <nav className='nav' aria-label='Navegação principal'>
          <ul className='nav__list'>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className='nav__link' onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href='#contato' className='btn btn--solid nav__cta' onClick={closeMenu}>
            Orçamento <FiArrowRight />
          </a>
        </nav>

        <button
          className='menu-toggle'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
