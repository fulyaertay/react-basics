import React from "react"

export default function QuizPage(props) {
  console.log(props.answers)
  return (
    

      <div className="questions">
        <h3 className='mainText'>{props.question}</h3>
        <div className='choices'>
          {props.answers.map(answer=>{
            return <button className="choiceBtn">{answer}</button>

          })}
         
        </div>
      </div>
      
      

      
  
  )
}
