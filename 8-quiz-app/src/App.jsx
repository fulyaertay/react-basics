
import { useState,useEffect } from 'react'
import {nanoid} from "nanoid"
import QuizPage from "./components/QuizPage"
import './App.css'

function App() {
  const [questions, setQuestions]=useState([])

  const [start,setStart]=useState(true)
  let incorrectAnswers = []
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res=>res.json())
    .then(data=>{
      setQuestions(data.results)
    })
  },[start])



  const getQuestions = questions.map(question => (
  
    <QuizPage 
        key={nanoid()} 
        question={question.question} 
        answers={[question.incorrect_answers[0] ? question.incorrect_answers[0]:undefined,
          question.incorrect_answers[1] ? question.incorrect_answers[1]:undefined,
          question.incorrect_answers[2] ? question.incorrect_answers[2]:undefined,
          question.correct_answer]}
    />
))
  return (
    <>
        <div className="container">
         {getQuestions}
        </div>
    </>
  )
}

export default App
