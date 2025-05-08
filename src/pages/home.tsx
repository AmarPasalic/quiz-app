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
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LeaderboardFetch from "../hooks/LeaderboardFetch";
import FetchUser from "../hooks/FetchUser";
import { useState } from "react";
import Popup from "./Popup";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = useAuth();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = React.useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const fetchUser = async () => {
    try {
      const response = await FetchUser();
      console.log(response)
      setUser(response.user)
    }
    catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  React.useEffect(() => {
    console.log("State", isOpen);
    if (isOpen) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
      });
      document.querySelectorAll("*").forEach((el) => {
        (el as HTMLElement).style.setProperty("overflow", "hidden", "important");
      });
    } else {
      document.querySelectorAll("*").forEach((el) => {
        (el as HTMLElement).style.setProperty("overflow", "auto", "important");
      });
    }
  }, [isOpen]);

  React.useEffect(() => {
    const fetchLeaderboard = async () => {
      const result = await LeaderboardFetch();
      if (result.success) {

        setLeaderboard(result.leaderboard || []);
      }
      else {
        console.error(result.message);
      }
    };
    fetchLeaderboard();
    fetchUser();
  }, []);

  const popupHandleOpen = () => {
    if (!isLogged) {
      navigate("/login");
      return;
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div id="home" className="container">
      {isOpen && <Popup onClick={popupHandleOpen} />}
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
            <Card title="Prijavi se" desc="Regidtruj se na Quiz Bih" image={pic1} onClick={() => { }} />
            <Card title="Uradi kviz" desc="Odgovori na sva pitanja koja imamo!" image={pic2} onClick={() => { }} />
            <Card title="Budi 1#" desc="Osvoji ljestvicu i budi prvi" image={pic3} onClick={() => { }} />
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
            {leaderboard.slice(0, 5).map((element, index) => (
              <div className="user" key={index}>
                <div className="userInfo">
                  <div className="userPlace">
                    <p>#{index + 1}</p>
                  </div>
                  <div className="userPp">
                    <img src={Userpp} alt="User Profile Picture" />
                  </div>
                  <div className="userName">
                    <h2>{element.username}</h2>
                  </div>
                </div>
                <div className="userScore">
                  <p>{element.bestScore} bodova</p>
                </div>
              </div>
            ))}
          </div>
          {user ? (<div className="secondUser">
            <div className="user" >
              <div className="userInfo">
                <div className="userPlace">
                  <p></p>
                </div>
                <div className="userPp">
                  <img src={Userpp} alt="User Profile Picture" />
                </div>
                <div className="userName">
                  <h2>{user?.username || ""}</h2>
                </div>
              </div>
              <div className="userScore">
                <p>{user?.bestScore || 0} bodova</p>
              </div>
            </div>
          </div>) : (
            <></>
          )}

        </div>
      </div>
    </div>
  );
};

export default Home;