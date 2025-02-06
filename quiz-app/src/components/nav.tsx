import React from 'react'
import "../styles/home.css"
import logo from "../assets/images/Quiz BiH.svg"
const nav = () => {
  return (
    <nav className="navWrapper">
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Quiz BiH Logo" />
      </div>
      <ul className="navbar">
        <li>POČETNA</li>
        <li>UPUTSTVA</li>
        <li>LJESTVICA</li>
      </ul>
      <div className="navRegister">
        <div className="navPrijava">
          <h1>Prijavi se</h1>
        </div>
        <div className="navRegg">
          <h1>Registruj se</h1>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default nav