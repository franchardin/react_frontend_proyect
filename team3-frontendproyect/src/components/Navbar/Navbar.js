import React from 'react'
import "./Header.css"
import logo from "../../assets/images/notflix-logo-medium.png"
import avatar from "../../assets/images/Netflix-avatar.png"
import Search from '../Search/Search'
import { Link } from 'react-router-dom'




const Navbar = () => {

  

  return (
    <div className='login-top' id='hide' >
    <div className='toolbar' >
    <img src={logo} alt="logo" className="logo" to="Billboards" />
    <ul className='nav'>
          <li className='nav-item'><Link className="nav-link" to="Login">Login</Link></li>
          <li className='nav-item'><Link className="nav-link" to="Billboards">Billboards</Link></li>
          <li className='nav-item'><Link className="nav-link" to="Heroes">Heroes</Link></li>
        </ul>
    <Search/>
    <img src={avatar} alt="logo" className="avatar"/>
    </div>
    </div>
  )


}


export default Navbar