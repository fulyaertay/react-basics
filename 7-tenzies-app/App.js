import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [rollCount, setRollCount]=React.useState(0)
    const [previousScore,setPreviousScore]=React.useState( () => JSON.parse(localStorage.getItem("previousScore")) || 0)

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
           
            setTenzies(true)
            if(firstValue===1){
                setPreviousScore(10)
            }
            else if(firstValue===2){
                setPreviousScore(20)
            }else if(firstValue===3){
                setPreviousScore(30)
            }else if(firstValue===4){
                setPreviousScore(40)
            }else if(firstValue===5){
                setPreviousScore(50)
            }else if(firstValue===6){
                setPreviousScore(60)
            }else{
                setPreviousScore(0)
            }
            localStorage.setItem("peviousScore", JSON.stringify(previousScore))
        }
  
       
       

    }, [dice])


    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
            setRollCount(oldRollCount=> oldRollCount+1)
        } else {
            
            setTenzies(false)
            setDice(allNewDice())
            setRollCount(0)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <h3 >Roll Count: {rollCount}</h3>
            <h3 >Previous Best Score: {previousScore}</h3>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}