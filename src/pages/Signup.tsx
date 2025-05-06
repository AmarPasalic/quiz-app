import React from 'react'
import styles from '../styles/signup.module.css'
import logo from '../assets/images/Quiz BiH.svg'
import video from "../assets/videos/mostar.mp4"
import Button from "../components/regiterButton"
import createUser from "../hooks/userRegister"
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Signup: React.FC = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);


    const handleRegister = async () => {
        setLoading(true)
        try {
            if (password !== confirmPassword) {
                setError('Passwordi se ne poklapaju');
                return;
            }
            if (email === '' || username === '' || password === '' || confirmPassword === '') {
                setError('Molimo popunite sva polja')
            }
            const result = await createUser(email, password, username);
            { !result.success && setError(result.message) }
            if (result.success) {
                setError('')
                setEmail('')
                setUsername('')
                setPassword('')
                setConfirmPassword('')
                navigate("/home")

            }
        }
        catch (error: any) {
            { error?.message && setError(error.message) }
        }
        finally {
             setLoading(false)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.video}>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className={styles.formDiv}>
                <div className={styles.logo}>
                    <img onClick={() => navigate("/home")} src={logo} alt="Logo" />
                </div>
                <div className={styles.title}>
                    <h1>Registujte se na Quiz BiH</h1>
                    <p>Popunite informacije za registraciju</p>
                </div>
                <div className={styles.form}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Korisničko ime' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' placeholder='Ponovite password' />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <Button loading={loading} onClick={handleRegister} text="Registruj se" />
                <div className={styles.footer}>
                    <p>Vec imate racun?       </p>
                    <Link to="/login">Prijavi se </Link>

                </div>
            </div>
        </div >
    )
}

export default Signup