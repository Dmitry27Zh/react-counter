import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClickMinus = () => {
    setCount(count - 1)
  }
  const handleClickPlus = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={handleClickMinus}>
          - Минус
        </button>
        <button className="plus" onClick={handleClickPlus}>
          Плюс +
        </button>
      </div>
    </div>
  )
}

export default App
