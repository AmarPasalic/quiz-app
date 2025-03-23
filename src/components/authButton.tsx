import React from "react";
import styles from "../styles/login.module.css";
interface AuthButtonProps {
  providerImg: string;
  providerName: string;
  onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  providerImg,
  providerName,
  onClick
}) => {
  return (
    <button className={styles.Gbutton} onClick={onClick}>
      <img src={providerImg} className=""/>
      Prijavi se putem {providerName} računa
    </button>
  );
};

export default AuthButton;
