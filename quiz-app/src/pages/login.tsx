import React from "react";
import styles from "../styles/login.module.css";
import mainImg from "../assets/images/Frame 35.svg";
import logo from "../assets/images/Quiz BiH.svg";
import Button from "../components/regiterButton";
import GButton from "../components/authButton"
import providerImg from"../assets/images/icons8-google.svg"
const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageDiv}>
                <img src={mainImg} alt="Main Image" />
            </div>
            <div className={styles.formDiv}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.title}>
                    <h1>Prijavite se na vaš račun</h1>
                    <p>Unesite informacije za prijavu</p>
                </div>
                <GButton providerImg={providerImg} providerName="Google" onClick={() => console.log("ee")} />
                    <div className={styles.divider}><p>ili</p></div>
                <div className={styles.form}>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                </div>
                <div className={styles.reset}>
                    <h2 className={styles.resetBtn}>Zaboravili ste lozinku?</h2>
                    <h2 className={styles.resetBtn2}>Resetiraj lozinku</h2>
                </div>
                <Button onClick={() =>console.log("ee")} text="Prijavi se" />
                <div className={styles.footer}>
                    <h1>Nemate racun? <span>  Registruj se.</span></h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;