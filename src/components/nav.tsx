import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "../styles/home.css";
import logo from "../assets/images/Quiz BiH.svg";
import useAuth from '../hooks/useAuth';
import RegisterButton from "./regiterButton";

const Nav: React.FC = () => {
  const isLogged = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navWrapper">
      <div className="nav">
        <div className="logo">
        <ScrollLink to="home" smooth={true} duration={500}>
          <img src={logo} alt="Quiz BiH Logo" />
        </ScrollLink>
        </div>
        <ul className="navbar">
          <ScrollLink to="home" smooth={true} duration={500}>
            POČETNA
          </ScrollLink>
          <ScrollLink to="guides" smooth={true} duration={500}>
            UPUTSTVA
          </ScrollLink>
          <ScrollLink to="leaderboard" smooth={true} duration={500}>
            LJESTVICA
          </ScrollLink>
        </ul>
        <div className="navRegister">
          {isLogged ? (
            <RegisterButton text="Odjavi se" onClick={handleLogout} />
          ) : (
            <>
              <div className="navPrijava">
                <RouterLink to="/login">
                  <h1>Prijavi se</h1>
                </RouterLink>
              </div>
              <div className="navRegg">
                <RouterLink to="/register">
                  <h1>Registruj se</h1>
                </RouterLink>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;