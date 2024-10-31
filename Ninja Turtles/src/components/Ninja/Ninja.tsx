import React from 'react'
import { NinjaTurtles } from '../../types/ninjaTurtles'
import './Ninja.css'

interface NinjaProps {
    ninja: NinjaTurtles
}

const Ninja:React.FC<NinjaProps> = ({ninja}) => {
  return (
    <div className="Ninja" >
      <h3>name: {ninja.name}</h3>
      <img src={ninja.img}   alt={ninja.name} width="300" height="300"/>
      
      
      
    </div>

  )
}

export default Ninja
