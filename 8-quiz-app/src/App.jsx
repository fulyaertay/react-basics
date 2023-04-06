import { useState } from 'react'
import MainPage from './components/main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage></MainPage>
    </>
  )
}

export default App
