import { useState,useEffect } from 'react'

export default function MainPage() {
 const [questions, setQuestions]=useState([])
  const [start,setStart]=useState(true)
 useEffect(()=>{
  fetch("https://opentdb.com/api.php?amount=5")
  .then(res=>res.json())
  .then(data=>{
    setQuestions(data.results)
  })
},[start])



  


  return (
    
    <div className="container">
      {questions.map((question)=>{
        return <div className="questions">
        <h3 className='mainText'>{question.question}</h3>
      </div>
      }
      )}
      
    </div>
  )
}
