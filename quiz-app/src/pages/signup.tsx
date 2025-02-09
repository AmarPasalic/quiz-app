import React from 'react'
import styles from '../styles/signup.module.css'
import logo from '../assets/images/Quiz BiH.svg'
import mainImg from '../assets/images/Frame 45.svg'
import Button from "../components/regiterButton"
const signup: React.FC = () => {
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
                    <h1>Registujte se na Quiz BiH</h1>
                    <p>Popunite informacije za registraciju</p>
                </div>
                <div className={styles.form}>
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Korisničko ime' />
                    <input type='password' placeholder='Password' />
                    <input type='password' placeholder='Ponovite password' />
                </div>
                <Button text="Registruj se" />
                <div className={styles.footer}>
                    <h1>Vec imate racun?   <span>Prijavi se</span>     </h1>
                   
                    
                    </div>
            </div>
        </div>
    )
}

export default signup