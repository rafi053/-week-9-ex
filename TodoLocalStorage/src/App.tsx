import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import Input from './components/Input/Input'

function App() {
  

  return (
    <>
      <Header/>
      <Input
      />
      <TodoList/>
    </>
  )
}

export default App
