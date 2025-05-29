import React from 'react'
import style from "../styles/quiz.module.css"
import logo from "../assets/images/Quiz BiH.svg"
import Stat from '../components/Stat'
import trophy from "../assets/images/trophy.svg"
import clock from "../assets/images/clock.svg"
import Answer from '../components/Answer'
import { useNavigate } from 'react-router-dom'
import Start from "../hooks/Start"
import { useEffect, useState } from 'react'
import SendQuestion from '../hooks/SendQuestion'
import FetchUser from '../hooks/FetchUser'
import Popup from "../components/PopupClose"
import coin from "../assets/images/coins-cash-svgrepo-com.svg"
import Revive from '../hooks/Review'
const QuizPage: React.FC = () => {
    const [object, setObject] = useState<any>(null);
    const [result, setResult] = useState<any>(null);
    const [gameId, setGameId] = useState<string>("");
    const [answerTxt, setAnswertxt] = useState<string>("")
    const [user, setUser] = useState<any>(null);
    const [isAnswering, setIsAnswering] = useState<boolean>(false);
    const [className, setClassName] = useState<string>("")
    const navigate = useNavigate();
    const [time, setTime] = useState<number>(0);
    const [popup, setPopup] = useState<boolean>(false)
    const [finalScore, setFinalScore] = useState<number>(0);
    const [questionNumber, setQuestionNumber] = useState<number>(1);


    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        if (time > 0) {
            intervalId = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(intervalId);
                        if (object?._id) {
                            handleAnswer(object._id, "");
                        }
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (object?._id && time === 0) {
            handleAnswer(object._id, "");
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [time, object?._id]);

    const handleClose = () => {
        setObject(null)
        setResult(null)
        setGameId("")
        setAnswertxt("")
        setUser(null)
        setIsAnswering(false)
        setClassName("")
        setTime(0)
        setQuestionNumber(1)
    }

    const fetchUser = async () => {
        try {
            const response = await FetchUser();
            setTime(response.user.time)
            setUser(response.user)
            

        }
        catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    const popupHandleOpen = () => {
        setFinalScore(result?.score || 0);
        setPopup((prev) => !prev);

    }
    const handleAnswer = async (questionId: string, answer: string,) => {
        if (isAnswering) return;
        setIsAnswering(true);

        const response = await SendQuestion(gameId, questionId, answer);
        if (!response.res) {
            setResult({ score: 0 }); 
            popupHandleOpen();
            return;
        }
        else {
            setResult(response.res);
            setAnswertxt(answer);
            setTime(0);
            setClassName(response.res.correct ? "green" : "red");
            setTimeout(() => {
                if (response.res.gameOver === true || !response.res.nextQuestion) {
                    popupHandleOpen();
                }
                else {
                    if (response.res.nextQuestion) {
                        setObject(response.res.nextQuestion);
                        setTime(response.res.nextQuestion.timeLimit);
                        setQuestionNumber(prev => prev + 1);
                    }
                    else {
                        setObject(response.res);
                    }
                }
                setIsAnswering(false);
                setClassName("");
            }, 2000);
        }
    }


    const handleStart = async () => {
        const result = await Start()
        setGameId(result.start.gameId)
        if (result.success) {
            console.log(result.start.question)
            setObject(result.start.question)
            setTime(result.start.question.timeLimit)
            setQuestionNumber(1)
        }
        else {
            console.error(result.message)
        }

    }
    
    const revive = async() => {
        const response = await Revive()
        console.log(response)
        if(response.success){
          setUser(response.user)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/login");
            return;
        }
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
            {popup && <Popup coins={user?.coins || 0} continueQuiz={()=>{
                popupHandleOpen()
                revive()
                }}   score={finalScore}  endQuiz={handleClose} />}
            <div className={style.quizWrapper}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                    <div className={style.coinNumber1}>
                        <img src={coin} alt="coin" />
                        <p>{user?.coins || 0}</p>
                    </div>
                </div>
                <div className={style.stats}>
                    <Stat icon={trophy} title='Bodovi' color='#2559D2' number={result?.score || 0} />
                    <Stat icon={clock} color="#9747FF" number={time || 0} />
                </div>
                <div className={style.body}>
                    <div className={style.bodyUpper}>
                        <div className={style.text}>
                            <div className={style.questionNum}>
                                <p>Pitanje {questionNumber} od 20</p>
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
                            <div
                                className={style.progresBar}
                                style={{
                                    width: `${(time / object.timeLimit) * 100}%`
                                }}
                            ></div>
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