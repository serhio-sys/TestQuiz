import React from "react";

export interface question {
    color: string,
    image: string,
    question: string,
    answers: string[],
    correctAnswer: string,
    badfact: string,
    goodfact: string,
}

export interface QuestionProps {
    question:question,
    currentQuestion:number,
    correctAnswers:number,
    setAnswered:(isAnswered:boolean)=>void,
    setFact:(fact:string)=>void,
    setCorrectAnswers:(countOfCorrectAnswers:number)=>void,
    setIsCorrectAnswer:(isCorrect:boolean)=>void,
    questionsLength:number,
}

export interface ResultProps{
    isCorrectAnswer:boolean,
    fact:string,
    nextQuestion:()=>void,
}

export interface BodyProps{
    start:()=>void
}

export interface FinishInterface{
    correctAnswers:number,
    length:number,
    replay:()=>void,
}