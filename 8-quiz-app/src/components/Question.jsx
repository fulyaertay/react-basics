import React from "react"


export default function Question(props) {

  const styles={
    backgroundColor:props.isClicked ? "#D6DBF5" : "aliceblue"
  }
  console.log(props.correctAnswer)
  const incorrectAnswers =props.inCorrectAnswers[0].map(answer=>
    
   
       <button  className="choiceBtn" style={styles} onClick={props.toggleClick}>{answer}</button>
  

)

const correctAnswers= props.correctAnswer.map(answer=>
  <button  className="choiceBtn" style={styles} onClick={props.toggleClick}>{answer}</button>
)
    
   

const shuffleChoices=[incorrectAnswers,correctAnswers]
let shuffled = shuffleChoices
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

  return (
    
      <div className="questions">
        <h3 className='mainText'>{props.question}</h3>
        <div className='choices'>
          {
            shuffled
          }
         
        </div>
      </div>
  
  )
}
