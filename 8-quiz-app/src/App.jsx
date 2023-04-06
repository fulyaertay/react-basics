
import { useState,useEffect } from 'react'
import {nanoid} from "nanoid"
import QuizPage from "./components/QuizPage"
import './App.css'

function App() {
  const [questions, setQuestions]=useState([])

  const [start,setStart]=useState(true)

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
        answers={[question.incorrect_answers,question.correct_answer]}
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
