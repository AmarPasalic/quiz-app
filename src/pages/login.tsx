import React from "react";
import styles from "../styles/login.module.css";
import video from "../assets/videos/mostar.mp4"
import logo from "../assets/images/Quiz BiH.svg";
import Button from "../components/regiterButton";
import login from "../hooks/userLogin"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogin = async () => {
        setLoading(true)
        try {
            if (email === '' || password === '') {
                setError('Molimo popunite sva polja');
                return;
            }
            const result = await login(email, password)
            { !result.success && setError(result.message) }
            if (result.success) {
                setError('')
                setEmail('')
                setPassword('')
                navigate("/home")
            }
        }
        catch (error: any) {
            { error?.message && setError(error.message) }
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className={styles.container}>
            {!isMobile && (
                <div className={styles.video}>
                    <video autoPlay loop muted playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            )}
            <div className={styles.formDiv}>
                <div className={styles.logo}>
                    <img onClick={() => navigate("/home")} src={logo} alt="Logo" />
                </div>
                <div className={styles.title}>
                    <h1>Prijavite se na vaš račun</h1>
                    <p>Unesite informacije za prijavu</p>
                </div>

                <div className={styles.form}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='Email'
                        value={email}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Password'
                        value={password}
                    />
                </div>
                <div className={styles.reset}>
                    <h2 className={styles.resetBtn}>Zaboravili ste lozinku?</h2>
                    <h2 className={styles.resetBtn2}>Resetiraj lozinku</h2>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <Button loading={loading} onClick={handleLogin} text="Prijavi se" />

                <div className={styles.footer}>
                    <p>Nemate racun?</p>
                    <Link to="/register">Registruj se</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;