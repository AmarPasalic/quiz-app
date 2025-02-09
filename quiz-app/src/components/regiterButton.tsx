import React from 'react'
import styles from '../styles/login.module.css'
interface Props {
    text: string
}
const regiterButton: React.FC<Props> = ({text}) => {
  return (
    <div className={styles.button}>
        <h1>{text}</h1>
    </div>
  )
}

export default regiterButton