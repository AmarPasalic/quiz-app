import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "../styles/home.css";
import logo from "../assets/images/Quiz BiH.svg";
import useAuth from '../hooks/useAuth';
import coin from "../assets/images/coins-cash-svgrepo-com.svg"
import userFetch from '../hooks/FetchUser'
const Nav: React.FC = () => {
  const isLogged = useAuth();
  const navigate = useNavigate();
  const [coins, setCoins] = useState(0)
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    const fetchData = async () => {
     try{
      const response = await userFetch()
     setCoins(response.user.coins) 
     }
     catch(error){
      console.log(error)
     }
    };
    fetchData();
  }, []);

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
        <div className="coinsNumber">
          <p>{coins}</p>
          <img src={coin} alt='coin' />
        </div>
        <div className="navRegister">
          {isLogged ? (
            <div onClick={handleLogout} className="navPrijava">

              <h1>Odjavi se</h1>

            </div>
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