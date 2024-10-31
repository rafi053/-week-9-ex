import { useState } from 'react'
import './App.css'
import Data from './data/data.ts'
import { NinjaTurtles } from './types/ninjaTurtles.ts'
import Ninja from './components/Ninja/Ninja.tsx'
import NinjaList from './components/NinjaList/NinjaList.tsx'
import AddPizza from './components/AddPizza/AddPizza.tsx'

const App: React.FC = () => {
  const [ninjaList, setDataList] = useState(Data)
  const [toppingsList, setToppingsList] = useState(Data)

  return (
    <>
     <h1>Ninja Turtles</h1>
      <h2>Order pizza with the turtles</h2>
      <div>
        <NinjaList ninjaList={ninjaList} />
        <AddPizza toppingsList={toppingsList} />

      </div>
      <h3>Our order</h3>
    </>
  )
}

export default App
