import React from 'react'
import style from "../styles/quiz.module.css"
const QuizPage: React.FC = () => {
  return (
   <div className={style.quizContainer}>
    <div className={style.quizWrapper}>
        <div className={style.logo}>
        
        </div>
        <div className={style.stats}></div>
        <div className={style.body}>
<div className={style.bodyUpper}></div>
<div className={style.question}></div>
<div className={style.answers}></div>
        </div>
    </div>
   </div>
  )
}

export default  QuizPage