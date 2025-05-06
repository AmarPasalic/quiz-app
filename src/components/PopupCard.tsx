import React from 'react';
import styles from '../styles/popup.module.css'
interface PopupCardProps {
    txt: string,
    icon : string,
}

const PopupCard: React.FC <PopupCardProps> = ({txt, icon}) => {
  return (
   <div className={styles.card}>
        <div className={styles.icon}>
            <img src={icon} alt="icon" />
        </div>
        <div className={styles.txt}>
            <p>{txt}</p>
        </div>
   </div>
  )
}

export default PopupCard