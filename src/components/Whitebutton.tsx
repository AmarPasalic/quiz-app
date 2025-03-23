import React from 'react'
import styles from '../styles/popup.module.css'
interface Props{
  txt: string;
  redirect: () => void;
  className?: string;
}
const Whitebutton: React.FC<Props> = ({txt, redirect, className}) => {
  return (
    <div onClick={redirect} className={className ? styles[className] : styles.button}>
      <h1>{txt}</h1>
    </div>
  )
}

export default Whitebutton