import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import Cookies from './pages/Cookies';
import HelpCenter from './pages/HelpCenter';
import CorporationInformation from './pages/CorporationInformation';
import TermsOfUse from './pages/TermsOfUse';
import Privacy from './pages/Privacy';
import Faq from './pages/Faq';
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
          <Route path='Login' element={<Login/>} />
          <Route path='Billboards' element={<Billboards/>} />
          <Route path='Heroes' element={<Heroes/>} /> 
          <Route path='Signup' element={<Signup/>} />
          <Route path='FAQ' element={<Faq/>} />
          <Route path='Cookies' element={<Cookies/>} />
          <Route path='HelpCenter' element={<HelpCenter/>} />
          <Route path='CorporationInformation' element={<CorporationInformation/>} />
          <Route path='TermsOfUse' element={<TermsOfUse/>} />
          <Route path='Privacy' element={<Privacy/>} />
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}




export default App;


   
      

