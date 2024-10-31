import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <video width="320" height="240" controls >
  <source src="myVideo.mp4" type="video/mp4" />
  
</video>
    </>
  )
}

export default App
