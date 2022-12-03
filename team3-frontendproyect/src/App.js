import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './pages/Signup';
import "./App.css"
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Heroes from './components/Heroes/Heroes';
import Billboards from './components/Billboards/Billboards';

function App() {
  const user = "Pepe";
  
  return (
    <BrowserRouter>
      <nav>
        <Header/>
        <Search/>
        <ul className='nav bg-dark'>
          <li className='nav-item'><Link className="nav-link" to="Login">Login</Link></li>
          <li className='nav-item'><Link className="nav-link" to="Billboards">billboards</Link></li>
          <li className='nav-item'><Link className="nav-link" to="Heroes">Heroes</Link></li>
        </ul>
      </nav>
      <main className='container'>
        <Routes>
          <Route path='*' element={<h2>404-Pagina no encontrada</h2>} />
          <Route path='Login/*' element={<Login/>} />
          <Route path='Billboards' element={<Billboards/>} />
          <Route path='Heroes' element={<Heroes/>} /> 
          <Route path='Signup' element={<Signup/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}




export default App;


   
      

