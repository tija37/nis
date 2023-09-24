import './App.css';
import Card from './components/Card';
import Notifications from './components/Notifications';
import Naslov from './components/Naslov';
import Pocetna1 from './pages/Pocetna1';
import SviProizvodi from './pages/SviProizvodi';
import Game from './pages/Game';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Naslov/>
        <Routes>
          <Route path='/' element={<Pocetna1 />}/>
          <Route path='/svi' element={<SviProizvodi />}/>
          <Route path='/igrica' element={<Game />}/>
        </Routes>
        <Notifications className='notKomp'/>
      </BrowserRouter>
    </>
  );
}

export default App;
