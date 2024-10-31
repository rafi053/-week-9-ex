import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'

function App() {

  const products = [
    { name: "a", price: 20},
    { name: "b", price: 30},
    { name: "c", price: 40}
  ]


    return (
      <div>
        <Header/>
        {products.map((product, index) => {
          return <Post name= {product.name}  price= {product.price} key={index}/>
        })}
      </div>
    

  )
}

export default App
