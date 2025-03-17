import React from 'react'
import styles from '../styles/popup.module.css'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Whitebutton";
import icon from "../assets/images/sunsmiley.svg";
const PopupClose:React.FC = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/home");
    };
  return (
 <div onClick={redirect} className={styles.container}>
    <div className={styles.popup}>
     <div className={styles.title}>
        <h1>Čestitamo na završenom kvizu</h1>
     </div>
     <div className={styles.txt}>
        <p>Osvojili ste:</p>
        </div>
     <div className={styles.score}>
     <h6>120 bodova</h6>
     </div>
     <div className={styles.icon}>
        <img src={icon} alt="icon" />
     </div>
        <Button txt='Zatvori' redirect={redirect} />
    </div>
 </div>
  )
}

export default PopupClose