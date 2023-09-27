 import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import LatestArticle from './components/LatestArticle';

function App() {
  return (
    <div className='relative'>
      <Home/>
      <About/>
      <LatestArticle/>

      <Footer/>
    </div>
  );
}

export default App;
