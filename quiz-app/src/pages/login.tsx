import React from "react";
import styles from "../styles/login.module.css";
import mainImg from "../assets/images/Frame 35.svg";
import logo from "../assets/images/Quiz BiH.svg";

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
                <div className={styles.Gbutton}></div>
                <div className={styles.form}>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                </div>
                <div className={styles.reset}>
                    <h2>Zaboravili ste lozinku?</h2>
                    <h2>Resetiraj lozinku?</h2>
                </div>
                <div className={styles.button}></div>
                <div className={styles.footer}></div>
            </div>
        </div>
    );
};

export default Login;