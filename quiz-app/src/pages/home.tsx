import React from "react";
import "../styles/home.css";

import homePic from "../assets/images/home-bg.png"

const Home: React.FC = () => {
  return (
    <div className="container">

   

      <div className="mainWrapper">
        <div className="main">
          <div className="mainTxt">
            <h1>
              Pokažite svoje znanje o <span>Bosni i Hercegovini</span>
            </h1>
            <p>
              Testirajte svoje znanje o historiji, kulturi i znamenitostima naše predivne domovine! Koliko dobro poznajete Bosnu i Hercegovinu?
            </p>
            <div className="button">
              <h1>Započni kviz</h1>
            </div>
            <div className="footer">
              <h2>+200 odigranih kvizova</h2>
            </div>
          </div>
          <div className="mainPic">
            <img src={homePic} alt="Home Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;