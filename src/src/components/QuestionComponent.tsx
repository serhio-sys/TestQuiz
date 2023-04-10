import { QuestionProps } from "../@types/interfaces"

const QuestionComponent = (props:QuestionProps) => {

    function answerHandler(e: any) {
        const answerText = e?.target.parentElement.querySelector(".answer-btn-text").innerText
        props.setAnswered(true)
        document.body.style.overflow = 'hidden';
        if (answerText===props.question.correctAnswer) {
            props.setCorrectAnswers(props.correctAnswers+1)
            props.setIsCorrectAnswer(true)
            props.setFact(props.question.goodfact)
        }
        else{
            props.setFact(props.question.badfact)
        }
    }


    return(
        <div style={{backgroundColor:`${props.question.color}`}} className='fullscreen-hello test-block'>
            <div className='question'><img className='question-icon' src='question.png' />{props.question.question}</div>
            <div className='progress-show'><div className='progress-bar'><div className='progress' style={{width:((props.currentQuestion+1)/props.questionsLength)*100+`%`}}></div></div>{props.currentQuestion+1}/{props.questionsLength}</div>
            <div className='answers'>
                {
                    props.question.answers.map((item,index)=>(
                    <div className='answer-btn' key={index}><div className='answer-btn-index' style={{background:props.question.color}} onClick={answerHandler}>{index+1}</div><div className='answer-btn-text' onClick={answerHandler}>{item}</div></div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionComponent