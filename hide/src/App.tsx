import { useState } from 'react'
import './App.css'

function App() {
 const [showBox, setShowBox] = useState<boolean>(true);


  return (
    <>
      <div>
        <button onClick={()=>{setShowBox(!showBox)}} >show/hide</button>
        {showBox && <div id='box'></div>}
      </div>
    </>
  )
}

export default App
