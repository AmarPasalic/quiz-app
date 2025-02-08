
import { Link } from 'react-router-dom'
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
        <Link to="/">
        POČETNA
        </Link>
        <Link to="/guides">UPUTSTVA</Link>
        <Link to="/leaderboard">LJESTVICA</Link>
      </ul>
      <div className="navRegister">
    
        <div className="navPrijava">
            <Link to="/login">
          <h1>Prijavi se</h1>
          </Link>
        </div>
        <div className="navRegg">
            <Link to="/register">
          <h1>Registruj se</h1>
          </Link>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default nav