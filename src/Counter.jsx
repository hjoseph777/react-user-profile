import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      {count === 0 && (
        <p className="zero-message">The counter is currently at zero!</p>
      )}

      <div className="button-group">
        <button 
          className="counter-button decrement"
          onClick={decrement}
        >
          Decrease
        </button>

        <button 
          className="counter-button reset"
          onClick={reset}
        >
          Reset
        </button>

        <button 
          className="counter-button increment"
          onClick={increment}
        >
          Increase
        </button>
      </div>
    </div>
  )
}

export default Counter
