import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Cookies from './pages/Cookies';
import HelpCenter from './pages/HelpCenter';
import CorporationInformation from './pages/CorporationInformation';
import TermsOfUse from './pages/TermsOfUse';
import Privacy from './pages/Privacy';
import Faq from './pages/Faq';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './pages/Signup';
import React from 'react';
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import Heroes from './components/Heroes/Heroes';
import Billboards from './components/Billboards/Billboards';


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='Billboards' element={<Billboards />} />
          <Route path='Heroes' element={<Heroes />} />
          <Route path='Signup' element={<Signup />} />
          <Route path='FAQ' element={<Faq />} />
          <Route path='Cookies' element={<Cookies />} />
          <Route path='HelpCenter' element={<HelpCenter />} />
          <Route path='CorporationInformation' element={<CorporationInformation />} />
          <Route path='TermsOfUse' element={<TermsOfUse />} />
          <Route path='Privacy' element={<Privacy />} />
          <Route path='*' element={<h2>404-Pagina no encontrada</h2>} />
        </Routes>

      </main>

      <Footer />
    </BrowserRouter>
  );
}




export default App;





