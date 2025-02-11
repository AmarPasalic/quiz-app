import React from 'react'
import styles from '../styles/login.module.css'
interface Props {
    text: string,
    onClick: () => void
}
const regiterButton: React.FC<Props> = ({ text, onClick }) => {
    return (
        <div onClick={onClick} className={styles.button}>
            <h1>{text}</h1>
        </div>
    )
}

export default regiterButton