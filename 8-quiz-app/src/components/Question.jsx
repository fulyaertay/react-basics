import React from "react"


export default function Question(props) {

  const styles={
    backgroundColor:props.isClicked ? "#D6DBF5" : "aliceblue"
  }
  return (
    
      <div className="questions">
        <h3 className='mainText'>{props.question}</h3>
        <div className='choices'>
          {props.answers.map((answer,key)=>{
 
            return <button id={key} className="choiceBtn" style={styles} onClick={props.toggleClick}>{answer}</button>

          })}
         
        </div>
      </div>
  
  )
}
