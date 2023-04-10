import React, { useState, useEffect } from 'react';
import '../public/stylesheet.css';
import './Question.css';
import BodyComponent from './components/BodyComponent';
import NavBarComponent from './components/NavBarComponent';
import Questions from './data/Questions';
import shuffle from './utils/shufle';
import QuizComponent from './components/QuizComponent';

function App() {
  const questions = Questions
  const [started, setStarted] = useState<boolean>(false)

  useEffect(()=>{
    shuffle(questions)
  },[])

  function start() {
    setStarted(true)
    setTimeout(() => {  
      const start = document.getElementById("start")
      window.scroll({
        top:start?.offsetTop,
        left:0,
        behavior: "smooth"
      })
    }, 100);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
    <NavBarComponent/>
    <BodyComponent start={start}/>
    {
      started
      ?
        <QuizComponent questions={questions}/>
      : 
        <></>
    }
    </>
  );
}

export default App;
