import React from "react";
import "../styles/home.css";
import homePic from "../assets/images/home-bg.png";
import Button from "../components/regiterButton";
import Whitebutton from "../components/Whitebutton";
import stick from "../assets/images/stick.svg";
import pic1 from "../assets/images/card-1.png";
import pic2 from "../assets/images/card-2.png";
import pic3 from "../assets/images/card-3.png";
import Card from "../components/Cards";
import Userpp from "../assets/images/pp.svg";
import  useAuth  from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const isLogged = useAuth();
  const navigate = useNavigate();


  const popupHandleOpen = () => {
    if (!isLogged) {
      navigate("/login");
      return;
    }
    navigate("/popup");
  };

  return (
    <div id="home"  className="container">
      <div className="mainWrapper">
        <div className="main">
          <div className="mainTxt">
            <h1>
              Pokažite svoje znanje o <span>Bosni i Hercegovini</span>.
            </h1>
            <p>
              Testirajte svoje znanje o historiji, kulturi i znamenitostima naše predivne domovine! Koliko dobro poznajete Bosnu i Hercegovinu?
            </p>
            <div onClick={popupHandleOpen} className="button">
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

      <div id="guides" className="cardWrapper">
        <div className="cardsContainer">
          <div className="cardsHeader">
            <div className="cardsTxt">
              <div className="cardsTitle">
                <img src={stick} alt="Stick" />
                <h1>Kako funkcioniše kviz?</h1>
              </div>
              <div className="cardsP">
                <p>
                  U našem kvizu, jednostavno je izazvati sebe i druge! Odaberite kviz, odgovorite na pitanja u zadanom vremenu i osvojite što više tačnih odgovora. Na kraju, možete provjeriti svoj rezultat i uporediti se sa najboljima na leaderboardu. Brzo, zabavno i edukativno!
                </p>
              </div>
              
            </div>
            <Button text="Započni kviz" onClick={popupHandleOpen} className="CardBtn" />
          </div>
          <div className="cards">
            <Card title="Prijavi se" desc="Regidtruj se na Quiz Bih" image={pic1} onClick={() => {}} />
            <Card  title="Uradi kviz" desc="Odgovori na sva pitanja koja imamo!" image={pic2} onClick={() => {}} />
            <Card title="Budi 1#" desc="Osvoji ljestvicu i budi prvi" image={pic3} onClick={() => {}} />
          </div>
        </div>
      </div>

      <div id="leaderboard" className="leaderWrapper">
        <div className="leaderContainer">
          <div className="leaderTitle">
            <h1>Takmičite se i osvajajte vrh!</h1>
            <p>Izazovite svoje prijatelje i igrače širom sveta. Pokažite da ste najbolji i zauzmite svoje mjesto na leaderboardu!</p>
            <Whitebutton txt="Započni kviz" redirect={popupHandleOpen} />
          </div>
          <div className="leaderBoard">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="user" key={index}>
                <div className="userInfo">
                  <div className="userPlace">
                    <p>#{index + 1}</p>
                  </div>
                  <div className="userPp">
                    <img src={Userpp} alt="User Profile Picture" />
                  </div>
                  <div className="userName">
                    <h2>Jamin Fajkic</h2>
                  </div>
                </div>
                <div className="userScore">
                  <p>150 bodova</p>
                </div>
              </div>
            ))}
          </div>
          <div className="secondUser">
          <div className="user" >
                <div className="userInfo">
                  <div className="userPlace">
                    <p>#6</p>
                  </div>
                  <div className="userPp">
                    <img src={Userpp} alt="User Profile Picture" />
                  </div>
                  <div className="userName">
                    <h2>Jamin Fajkic</h2>
                  </div>
                </div>
                <div className="userScore">
                  <p>150 bodova</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;