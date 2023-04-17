import React, {useState} from 'react'
import './Header.css'

export default function Header() {

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () =>{
    if(window.scrollY >= 300){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>

      <div className='navbar-container'>
        <a href="#Home" className='navbar-logo'>
          <img src='./assets/Teste 2.png' alt=''/>
        </a>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ?'fas fa-times' : 'fas fa-bars'} />             
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='#Home' className='nav-links' onClick={closeMobileMenu}>
              Inicio  
            </a>
          </li>

          <li className='nav-item'>
            <a href='#quem-somos' className='nav-links' onClick={closeMobileMenu}>
              Quem somos
            </a>
          </li>

          <li className='nav-item'>
            <a href='#Servicos' className='nav-links' onClick={closeMobileMenu}>
              Nossos serviços 
            </a>
          </li>

          <li className='nav-item'>
            <a href='#Contato' className='nav-links' onClick={closeMobileMenu}>
              Contato  
            </a>
          </li>
        </ul>

      </div>
            
    </nav>
  
  )
}
