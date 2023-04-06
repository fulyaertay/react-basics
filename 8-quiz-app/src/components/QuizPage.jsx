import React from "react"

export default function QuizPage(props) {

  return (
    

      <div className="questions">
        <h3 className='mainText'>{props.question}</h3>
        <div className='choices'>
          <button className="choiceBtn">{props.answers}</button>
        </div>
      </div>
      
      

      
  
  )
}
