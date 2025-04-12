import React from 'react'
import style from "../styles/quiz.module.css"
import logo from "../assets/images/Quiz BiH.svg"
import Stat from '../components/Stat'
import trophy from "../assets/images/trophy.svg"
import medal from "../assets/images/medal.svg"
import star from "../assets/images/star.svg"
import clock from "../assets/images/clock.svg"
import Answer from '../components/Answer'
import { useNavigate } from 'react-router-dom'
import Start from "../hooks/Start"
import { useEffect, useState } from 'react'
const QuizPage: React.FC = () => {
    const [object, setObject] = useState<any>(null);
    const navigate = useNavigate();
    const popupHandleOpen = () => {
        navigate("/popupend");
    }

    const handleStart = async () => {
        const result = await Start()
        console.log(result)
        { result.success ? setObject(result.start) : console.error(result.message) }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate("/login");
        else handleStart()

    }, []);



    if (!object) {
        return <div className={style.loading}>Loading...</div>;
    }

    return (
        <div className={style.quizContainer}>
            <div className={style.quizWrapper}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={style.stats}>
                    <Stat icon={trophy} title='Bodovi' color='#2559D2' number={object?.question.score || 0} />
                    <Stat icon={medal} title='Najbolji rezultat' color="#FBBC05" number={200} />
                    <Stat className={style.hiddenStat} icon={star} title="Streak" color="#EA4335" number={2} />
                    <Stat icon={clock} color="#9747FF" number={object?.question.timeLimit} />
                </div>
                <div className={style.body}>
                    <div className={style.bodyUpper}>
                        <div className={style.text}>
                            <div className={style.questionNum}>
                                <p>Pitanje 1 od 20</p>
                            </div>
                            <div onClick={popupHandleOpen} className={style.Button1}>
                                <p>Zavrsi kviz</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.question}>
                        <div className={style.questionText}>
                            <h1>{object?.question.title}</h1>
                        </div>
                        <div className={style.progres}>
                            <div className={style.progresBar}></div>
                        </div>
                    </div>
                    <div className={style.answersWrap}>
                        <div className={style.answers}>
                            {object.question.options.map((answer: any, i: number) => {
                                return(

                                                               <Answer key={i} iconLetter={String.fromCharCode(65 + i)} txt={answer.text} gameId={object.gameId} questionId={object.question._id} />
                                )
     
                            })}


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuizPage