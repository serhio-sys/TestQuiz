import { FC, useEffect, useState } from "react";
import shuffle from "../utils/shufle";
import { question } from "../@types/interfaces";
import FinishComponent from "./FinishComponent";
import ResultComponent from "./ResultComponent";
import QuestionComponent from "./QuestionComponent";
import FooterComponent from "./FooterComponent";

interface QuizProps{
    questions:question[]
}

const QuizComponent:FC<QuizProps> = ({questions}) => {    
    const [currentQuestion,setCurrentQuestion] = useState<number>(0)
    const [question,setQuestion] = useState<question>(questions[currentQuestion])
    const [answered,setAnswered] = useState<boolean>(false)
    const [correctAnswers,setCorrectAnswers] = useState<number>(0)
    const [fact,setFact] = useState<string>("")
    const [isCorrectAnswer,setIsCorrectAnswer] = useState<boolean>(false)
    const questionsLenght = questions.length

    useEffect(()=>{
        if (currentQuestion<questionsLenght) {
            setQuestion(questions[currentQuestion])
        }
      },[currentQuestion])

    function replay(){
        setTimeout(() => {  
            const start = document.getElementById("start")
            window.scroll({
            top:start?.offsetTop,
            left:0,
            behavior: "smooth"
            })
        }, 100);
        shuffle(questions)
        setCorrectAnswers(0)
        setAnswered(false)
        setIsCorrectAnswer(false)
        setCurrentQuestion(0)
    }

    function nextQuestion() {
        setAnswered(false)
        setIsCorrectAnswer(false)
        if (currentQuestion!==questionsLenght) {
            setCurrentQuestion(currentQuestion+1)   
        }
    }
    
    return(
        currentQuestion===questionsLenght
        ?
          <FinishComponent length={questionsLenght} replay={replay} correctAnswers={correctAnswers}/>
        :
          <>
            <img src={question.image} className='fullimage'/>
            <div className='fullscreen test' id='start'>  
              {
                answered
                ?
                <ResultComponent nextQuestion={nextQuestion} fact={fact} isCorrectAnswer={isCorrectAnswer}/>
                :
                <QuestionComponent setAnswered={setAnswered} setCorrectAnswers={setCorrectAnswers} setFact={setFact} setIsCorrectAnswer={setIsCorrectAnswer} correctAnswers={correctAnswers} question={question} questionsLength={questionsLenght} currentQuestion={currentQuestion}/>
              }
              <FooterComponent color={question.color}/>
            </div>
          </>
    )
}

export default QuizComponent