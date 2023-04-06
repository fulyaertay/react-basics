import { useState,useEffect } from 'react'

export default function MainPage() {
 const [questions, setQuestions]=useState([])

 useEffect(()=>{
  fetch("https://opentdb.com/api.php?amount=5")
  .then(res=>res.json())
  .then(data=>{
    setQuestions(data.results)
  })
},[])



  


  return (
    
    <div className="container">
 {questions.map((question)=>{
       <h4 className='mainText'>{question.question}</h4>

      })}
      
      

    

     
    </div>
  )
}
