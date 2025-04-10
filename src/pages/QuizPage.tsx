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
import { useEffect } from 'react'
const QuizPage: React.FC = () => {
    const navigate = useNavigate();
    const popupHandleOpen = () => {
        navigate("/popupend");
    }

    const handleStart= async()=>{
        const result = await Start()
        console.log(result)
    }

    useEffect(()  =>  {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/login");
        }
        else{
            handleStart()
        }
        }, []); 
    




    return (
        <div className={style.quizContainer}>
            <div className={style.quizWrapper}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={style.stats}>
                    <Stat icon={trophy} title='Bodovi' color='#2559D2' number={30} />
                    <Stat icon={medal} title='Najbolji rezultat' color="#FBBC05" number={200} />
                    <Stat className={style.hiddenStat} icon={star} title="Streak" color="#EA4335" number={2} />
                    <Stat icon={clock} color="#9747FF" number={30} />
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
                            <h1>Koji historijski događaj se desio 25. novembra 1943. godine u Mrkonjić Gradu, a smatra se jednim od najvažnijih trenutaka u historiji Bosne i Hercegovine jer je tada donesena odluka o njenoj budućnosti kao ravnopravne republike unutar Jugoslavije?</h1>
                        </div>
                        <div className={style.progres}>
                            <div className={style.progresBar}></div>
                        </div>
                    </div>
                    <div className={style.answersWrap}>
                        <div className={style.answers}>
                            <Answer iconLetter="A" txt='Održana je prva sjednica ZAVNOBiH-a' />
                            <Answer iconLetter="B" txt='Održana je prva sjednica AVNOJ-a' />
                            <Answer iconLetter="C" txt='Održana je prva sjednica AVNOJ-a' />
                            <Answer iconLetter="D" txt='Održana je prva sjednica AVNOJ-a' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuizPage