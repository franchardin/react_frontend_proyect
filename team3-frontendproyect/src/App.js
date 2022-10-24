import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import "bootstrap/dist/css/bootstrap.css";
import Signup from './pages/Signup';






function App() {
  const user = "Pepe";
  return (
    
  
      <BrowserRouter>
        <nav >
          <ul>
            <li className='nav-item'><Link className="nav-link" to="Home">Home</Link></li>
            <li className='nav-item'><Link className="nav-link" to="Login">Login</Link></li>
            <li className='nav-item'><Link className="nav-link" to="Paypal">Paypal</Link></li>
            <li className='nav-item'><Link className="nav-link" to="Profile">Profile</Link></li>
            <li className='nav-item'><Link className="nav-link" to="Signup">Signup</Link></li>
            
         </ul>
        </nav>

      <main className='container'>
        <Routes>
        <Route path='*' element={<h2>404-Pagina no encontrada</h2>} />
          <Route path='Home' element={<Home/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='Paypal' element={<Paypal/>} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='Signup' element={<Signup/>} />
          

        </Routes>
      </main>

      </BrowserRouter>


    
   
  );
}


export default App;
