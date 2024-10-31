import React from 'react'
import { NinjaTurtles } from '../../types/ninjaTurtles'

const AddPizza: React.FC<{toppingsList: NinjaTurtles[]}> = ({ toppingsList
}) => {
  return (
    <div>
      <h4>Toppings:</h4>
      {toppingsList.map((topping, idx) => (
        <div key={idx}>
          <p>{topping.pizzaToppings.map((topping) => topping.name)}</p>

          <img src={topping.pizzaToppings[0].img} />
        </div>
      ))}
    </div>
  )
}

export default AddPizza
