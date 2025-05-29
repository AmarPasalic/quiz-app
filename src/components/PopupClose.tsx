import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/Quiz BiH.svg"
import styles from '../styles/popup.module.css';
import trophy from "../assets/images/popuptrophy.svg"
interface PopupCloseProps {
   score: number;
   coins: number;
   continueQuiz?: () => void;
   endQuiz?: () => void;
}

const PopupClose: React.FC<PopupCloseProps> = ({ score, coins, continueQuiz , endQuiz}) => {
   const navigate = useNavigate();

   const redirect = () => {
      navigate("/home");
      endQuiz?.();
   };

   const redirectToLeaderboard = () => {
      navigate("/home#leaderboard");
      endQuiz?.();
      setTimeout(() => {
         const leaderboardSection = document.getElementById('leaderboard');
         if (leaderboardSection) {
            leaderboardSection.scrollIntoView({ behavior: 'smooth' });
         }
      }, 100);
   };

   return (
      <div className={styles.container} onClick={redirect}>
         <div className={styles.popupWrapper}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
               <div className={styles.logo}>
                  <img src={logo} alt="Logo" />
               </div>
               <div className={styles.title}>
                  <h1>Čestitamo na završenom kvizu !!</h1>
               </div>
               <div className={styles.txt1}>
                  <p>U prilogu pogledajte svoju statistiku :</p>
               </div>
               <div className={styles.stats}>
                  <p>Osvojili ste: <span>{score || 0} bodova</span></p>
                  <img src={trophy} />
               </div>

               <div className={styles.buttons}>
                  <div id={styles.btn1} onClick={redirect} className={styles.button}>
                     <h1>Zatvori</h1>
                  </div>
                  {coins >= 5 ? (
                     <div id={styles.btn2} onClick={continueQuiz} className={styles.button}>
                        <h1>Nastavi</h1>
                     </div>
                  ) : (
                     <div id={styles.btn2} onClick={redirectToLeaderboard} className={styles.button}>
                        <h1>Leaderboard</h1>
                     </div>
                  )}
               </div>

            </div>
         </div>
      </div>
   )
}

export default PopupClose