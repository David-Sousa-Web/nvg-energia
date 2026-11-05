import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Sobre from './components/sobre/Sobre';
import Servicos from './components/servicos/Servicos';
import Processo from './components/processo/Processo';
import Projetos from './components/projetos/Projetos';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Processo />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
export default App;
