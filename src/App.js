import './App.css';
import Navbar from './components/header/Header'
import HomeContent from './components/homecontent/HomeContent.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import Sobre from './components/quemsomos/Sobre';
import Servicos from './components/servicos/Servicos';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HomeContent/>
        <Sobre/>
        <Servicos/>
        <Contato/>
        <Footer/>
      </Router>    
    </>
  );
}
export default App;

