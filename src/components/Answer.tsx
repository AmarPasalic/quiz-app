import React from 'react'
import style from "../styles/quiz.module.css"
interface Props{
    iconLetter: any,
    txt: string,
   onClick?: () => void,
   className?: string
}



const Answer:React.FC <Props>= ({iconLetter,txt, onClick, className}) => {

  
 return (
<div onClick={onClick} className={`${style.answer} ${className ? style[className] : ""}`}>
        <div className={style.answerIcon}>
            <div className={style.answerCirc}>
                <h5>{iconLetter}</h5>
            </div>
           
        </div>
        <div className={style.answerTxt}>
            <h3>{txt}</h3>
        </div>
    </div>
  )
}

export default Answer