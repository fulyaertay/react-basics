import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className='mainText'>Quizzical</h1>
      <h4 className='mainText'>Let's Play!</h4>
      <button className='startQuizBtn'>Start Quiz</button>

     
    </div>
  )
}

export default App
