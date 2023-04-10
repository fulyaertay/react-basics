import React from "react"


export default function Question(props) {
  console.log(props.key)
  const styles={
    backgroundColor:props.isClicked ? "#D6DBF5" : "aliceblue"
  }
  return (
    
      <div className="questions">
        <h3 className='mainText'>{props.question}</h3>
        <div className='choices'>
          {props.answers.map(answer=>{
            if (answer!=undefined)
            return <button id={props.key} className="choiceBtn" style={styles} onClick={props.toggleClick}>{answer}</button>

          })}
         
        </div>
      </div>
  
  )
}
