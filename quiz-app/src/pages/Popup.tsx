import React from 'react'
import styles from '../styles/popup.module.css'
import Button from "../components/Whitebutton"
import icon from "../assets/images/smily.svg"
const Popup: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <div className={styles.title}>
                    <h1>Spremite se za Quiz BiH</h1>
                </div>
                <div className={styles.txt}>
                    <p>Svaki tačan odgovor donosi vam bodove, ali budite brzi – imate samo 10 sekundi po pitanju! Pažljivo birajte odgovore i pokušajte osvojiti što više bodova prije nego istekne vrijeme. Jeste li spremni pokazati svoje znanje? Sretno! 🎉</p>
                </div>
                <div className={styles.icon}>
                    <img src={icon} alt="icon" />
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Popup