import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState<number>(0)
  const [color, setColor] = useState<string>('yellow')
  const changeColor =  () => {
    if (counter == 0) {
      setColor('yellow')
    }
    else if (counter >= 1) {
      setColor('green')
    }
    else if (counter <= 1) {
      setColor('red')
    }
    

  }
  const handleIncrease = () => {
    if (counter >= 10) {
      return 
    }
    setCounter((prev) => prev + 1);
    changeColor()
  };
  const handleDecrease = () => {
    if (counter <= -10) {
      return 
    }
    setCounter((prev) => prev - 1);
    changeColor()
  };

  return (
    <>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <label style={{backgroundColor: color}}>The Counter is: {counter}</label>
      </div>
      
    </>
  )
}

export default App
