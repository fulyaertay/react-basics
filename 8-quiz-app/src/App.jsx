
import { useState,useEffect } from 'react'
import {nanoid} from "nanoid"
import Questions from "./components/Question"
import './App.css'

function App() {
  const [questions, setQuestions]=useState([])
  const [clickedAnswer,setClickedAnswer]=useState(false)
  const [start,setStart]=useState(true)
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res=>res.json())
    .then(data=>{
      setQuestions(data.results)
    })
  },[start])

  const toggleClick=()=>{
    setClickedAnswer(clickedAnswer=> !clickedAnswer)

  }

  const getQuestions = questions.map(question => (
  
    <Questions 
        key={nanoid()} 
        question={question.question} 
        answers={ [question.incorrect_answers.map(incorrectAnswers=>{return incorrectAnswers}),question.correct_answer]}
        toggleClick={toggleClick}
          isClicked={clickedAnswer}
          
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
