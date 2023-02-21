import './App.css';
import Navbar from './components/header/Header'
import HomeContent from './components/homecontent/HomeContent.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import Sobre from './components/quemsomos/Sobre';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HomeContent/>
        <Sobre/>
      </Router>    
    </>
  );
}
export default App;

