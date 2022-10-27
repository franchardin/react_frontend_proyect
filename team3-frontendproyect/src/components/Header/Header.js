import React from 'react'
import "./Header.css"
import logo from "../../assets/images/Logo-Netflix.png"
import avatar from "../../assets/images/Netflix-avatar.png"
import { useEffect, useState, useHistory } from 'react'




const Header = () => {

  
  




  

  return (
    <div className='login-top' id='hide' >
    <div className='toolbar' >
    <img src={logo} alt="logo" className="logo" />
    <button onClick={hide}>Ocultar</button>
    <img src={avatar} alt="logo" className="avatar"/>
    </div>
    </div>
  )

  function hide () {
    document.getElementById(hide).style.display = 'none';
  }
}








export default Header