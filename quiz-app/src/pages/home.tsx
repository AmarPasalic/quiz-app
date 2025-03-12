import React from "react";
import "../styles/home.css";
import{useNavigate} from "react-router-dom"
import homePic from "../assets/images/home-bg.png"
import Button from "../components/regiterButton";

import stick from "../assets/images/stick.svg";
import pic1 from "../assets/images/card-1.png";
import pic2 from "../assets/images/card-2.png";
import pic3 from "../assets/images/card-3.png";
import Card from "../components/Cards";
const Home: React.FC = () => {
 const navigate = useNavigate();
  const handleStartQuiz = () => {
   navigate("/quiz")

  }
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
            <div onClick={handleStartQuiz} className="button">
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

      <div className="cardWrapper">
        <div className="cardsContainer">
          <div className="cardsHeader">
            <div className="cardsTxt">
              <div className="cardsTitle">
                <img src={stick} />
                <h1>Kako funkcioniše kviz?</h1>
              </div>
              <div className="cardsP">
                <p>U našem kvizu, jednostavno je izazvati sebe i druge! Odaberite kviz, odgovorite na pitanja u zadanom vremenu i osvojite što više tačnih odgovora. Na kraju, možete provjeriti svoj rezultat i uporediti se sa najboljima na leaderboardu. Brzo, zabavno i edukativno!</p>
              </div>
  
            </div>
           
                <Button text="Započni kviz" onClick={ handleStartQuiz} className="CardBtn" />
          
          
          </div>
          <div className="cards">
         <Card title="Prijavi se" desc="Regidtruj se na Quiz Bih" image={pic1} onClick={()=>{}} />
          <Card title="Uradi kviz" desc="Odgovori na sva pitanja koja imamo!" image={pic2} onClick={()=>{}} />
            <Card title="Budi 1#" desc="Osvoji ljestvicu i budi prvi" image={pic3} onClick={()=>{}} />
          </div>

        </div>
      </div>
      <div className="leaderWrapper">
        <div className="leaderContainer">
          <div className="leaderTitle"><div>
            <Button text="Započni kviz" onClick={() => console.log("Button clicked")} className="leaderButton" />
            <div className="leaderBoardoard"></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;