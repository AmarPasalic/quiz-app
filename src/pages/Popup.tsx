import React from 'react';
import styles from '../styles/popup.module.css';
import icon from "../assets/images/smily.svg";
import Button from "../components/Whitebutton";
import { useNavigate } from 'react-router-dom';

const Popup: React.FC = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/home");
    };

    const advancedRedirect = () => {
        navigate("/quiz");
    };

    return (
        <div className={styles.container} onClick={redirect}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title}>
                    <h1>Spremite se za Quiz BiH</h1>
                </div>
                <div className={styles.txt}>
                    <p>Svaki tačan odgovor donosi vam bodove, ali budite brzi – imate samo 10 sekundi po pitanju! Pažljivo birajte odgovore i pokušajte osvojiti što više bodova prije nego istekne vrijeme. Jeste li spremni pokazati svoje znanje? Sretno! 🎉</p>
                </div>
                <div className={styles.icon}>
                    <img src={icon} alt="icon" />
                </div>
                <Button txt='Započni kviz' redirect={advancedRedirect} />
            </div>
        </div>
    );
};

export default Popup;