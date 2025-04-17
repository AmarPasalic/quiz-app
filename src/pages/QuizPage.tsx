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
import SendQuestion from '../hooks/SendQuestion'
import FetchUser from '../hooks/FetchUser'
const QuizPage: React.FC = () => {
    const [object, setObject] = useState<any>(null);
    const [result, setResult] = useState<any>(null);
    const [gameId, setGameId] = useState<string>("");
    const [answerTxt, setAnswertxt] = useState<string>("")
    const [user, setUser] = useState<any>(null);
    const [isAnswering, setIsAnswering] = useState<boolean>(false);
    const [className, setClassName] = useState<string>("")
    const navigate = useNavigate();
const fetchUser = async () => {
    try{
     const response = await FetchUser();
     setUser(response.user)
    
    }
    catch (error) {
      console.error("Error fetching user data:", error);
    }
}

    const popupHandleOpen = () => {
        const finalScore = result?.score || 0;
        localStorage.setItem("finalScore", finalScore.toString());
        navigate("/popupend");
    }
    const handleAnswer = async (questionId: string, answer: string,) => {
        if (isAnswering) return;
        setIsAnswering(true);
        setAnswertxt(answer)
        const response = await SendQuestion(gameId, questionId, answer);
        setResult(response.res)

        setClassName(response.res.correct ? "green" : "red")
        setTimeout(() => {
            if (response.res.gameOver === true) {
                 popupHandleOpen()
            }
            else {
            if(response.res.nextQuestion){
                setObject(response.res.nextQuestion)
            }
            else{
                setObject(response.res)
            }
            }
            setIsAnswering(false);
            setClassName("")
        }, 3000);
    }


    const handleStart = async () => {
        const result = await Start()
        console.log(result)
        setGameId(result.start.gameId)
        { result.success ? setObject(result.start.question) : console.error(result.message) }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate("/login");
        if (!object) handleStart()
        fetchUser()
    }, [object]);



    if (!object) {
        return (
            <div className={style.loading}>
                <div className={style.loader}></div>
            </div>
        )
    }

return (
    <div className={style.quizContainer}>
        <div className={style.quizWrapper}>
            <div className={style.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={style.stats}>
                <Stat icon={trophy} title='Bodovi' color='#2559D2' number={result?.score || 0} />
                <Stat icon={medal} title='Najbolji rezultat' color="#FBBC05" number={user?.bestScore || 0} />
                <Stat className={style.hiddenStat} icon={star} title="Streak" color="#EA4335" number={result?.score || 0} />
                <Stat icon={clock} color="#9747FF" number={object?.timeLimit} />
            </div>
            <div className={style.body}>
                <div className={style.bodyUpper}>
                    <div className={style.text}>
                        <div className={style.questionNum}>
                            <p>Pitanje {result?.bestScore || 0} od 20</p>
                        </div>
                        <div onClick={popupHandleOpen} className={style.Button1}>
                            <p>Zavrsi kviz</p>
                        </div>
                    </div>
                </div>
                <div className={style.question}>
                    <div className={style.questionText}>
                        <h1>{object?.title}</h1>
                    </div>
                    <div className={style.progres}>
                        <div className={style.progresBar}></div>
                    </div>
                </div>
                <div className={style.answersWrap}>
                    <div className={style.answers}>
                        {object.options.map((answer: any, i: number) => {
                            return (

                                <Answer className={answerTxt === answer.text ? className : undefined} key={i} iconLetter={String.fromCharCode(65 + i)} txt={answer.text} onClick={() => handleAnswer(object._id, answer.text)} />
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