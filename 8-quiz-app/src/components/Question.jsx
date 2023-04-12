import React from "react"


export default function Question(props) {

  const styles={
    backgroundColor:props.isClicked ? "#D6DBF5" : "aliceblue"
  }
  const choices =props.answers.map(answer=>
   
       <button  className="choiceBtn" style={styles} onClick={props.toggleClick}>{answer}</button>
  

)
  return (
    
      <div className="questions">
        <h3 className='mainText'>{props.question}</h3>
        <div className='choices'>
          {choices}
         
        </div>
      </div>
  
  )
}
