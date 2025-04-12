import React from 'react'
import style from "../styles/quiz.module.css"
import SendQuestion from '../hooks/SendQuestion'
interface Props{
    iconLetter: any,
    txt: string,
    gameId: string,
    questionId: string,
}



const Answer:React.FC <Props>= ({iconLetter,txt, gameId,questionId}) => {
    const handleQuestion = async () => {
        console.log(gameId,questionId,txt)
     const response= await SendQuestion(gameId,questionId,txt )
     console.log(response)
    }
  return (
    <div onClick={handleQuestion} className={style.answer}>
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