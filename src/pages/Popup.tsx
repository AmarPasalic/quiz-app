import React from 'react';
import styles from '../styles/popup.module.css';
import logo from "../assets/images/Quiz BiH.svg"
import trophy from "../assets/images/popuptrophy.svg"
import clock from "../assets/images/popupclock.svg"
import medal from "../assets/images/popupmedal.svg"
import { useNavigate } from 'react-router-dom';
import PopupCard from '../components/PopupCard';
interface PopupProps {
    onClick: () => void;
}



const Popup: React.FC<PopupProps> = ({ onClick }) => {
    const navigate = useNavigate();

    const redirect = () => {
        onClick()
    };

    const advancedRedirect = () => {
        navigate("/quiz");

    };

    return (
        <div className={styles.container} onClick={redirect}>
            <div className={styles.popupWrapper}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.title}>
                    <h1>Spremite se za kviz !</h1>
                </div>
                <div className={styles.txt}>
                    <p>Pažljivo birajte odgovore i pokušajte osvojiti što više bodova prije nego istekne</p>
                </div>
                <div className={styles.cards}>
                 <PopupCard icon={trophy} txt='Svaki tačan odgovor nosi 10 bodova' />
                 <PopupCard icon={clock} txt="Za svako pitanje imate 10 sekundi da odgovorite"/>
                 <PopupCard icon={medal} txt='Ostvari što bolji rezultat i rangiraj se na ljestvicu'/>
                </div>
                <div className={styles.buttons}>
                    <div id={styles.btn1} onClick={redirect} className={styles.button}>
                        <h1>Odustani</h1>
                    </div>
                    <div id={styles.btn2} onClick={advancedRedirect} className={styles.button}>
                        <h1>Pokreni Kviz</h1>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Popup;