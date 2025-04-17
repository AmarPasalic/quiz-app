import React from 'react'
import styles from '../styles/login.module.css'
interface Props {
    text: string,
    onClick: () => void,
className?: string,
loading?: boolean
}
const regiterButton: React.FC<Props> = ({ text, onClick , className, loading}) => {
    return (
        <div onClick={onClick} className={ className||styles.button}>
            <h1>{loading ? "..." : text}</h1>
        </div>
    )
}

export default regiterButton