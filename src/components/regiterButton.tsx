import React from 'react'
import styles from '../styles/login.module.css'
interface Props {
    text: string,
    onClick: () => void,
className?: string,
}
const regiterButton: React.FC<Props> = ({ text, onClick , className}) => {
    return (
        <div onClick={onClick} className={ className||styles.button}>
            <h1>{text}</h1>
        </div>
    )
}

export default regiterButton