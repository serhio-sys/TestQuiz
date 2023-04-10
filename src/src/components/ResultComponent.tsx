import {useEffect, useState} from 'react'
import { ResultProps } from '../@types/interfaces'

const ResultComponent = (props:ResultProps) => {
    const [time,setTime] = useState(10)

    useEffect(()=>{
        if (time===0) {
            props.nextQuestion()
        }
        else{
            setTimeout(()=>{
                setTime(time-1)
            },1000)
        }
    },[time])

    return (  
        props.isCorrectAnswer
        ?
        <div className='goodanswer'>
            <div className='fullscreen-hello correct-block'>
              <div className='result-block'>
                <div style={{flex:"20%"}}><div className='timer'>{time}</div></div>
                <div className='text'>Правильна відповідь!</div>
                <div className='arrow' onClick={props.nextQuestion}>➜</div>
              </div>
              <img className="result-smile" src="smile.png"/>
              <div className="result-text">
                {props.fact}
              </div>
            </div>
        </div>
        :
        <div className='badanswer'>
            <div className='fullscreen-hello incorrect-block'>
              <div className='result-block'>
                <div style={{flex:"20%"}}><div className='timer'>{time}</div></div>
                <div className='text'>Неправильна відповідь!</div>
                <div className='arrow' onClick={props.nextQuestion}>➜</div>
              </div>
              <img className="result-smile" src="angry.png"/>
              <div className="result-text">
                {props.fact}
              </div>
            </div>
        </div>
    )
}

export default ResultComponent