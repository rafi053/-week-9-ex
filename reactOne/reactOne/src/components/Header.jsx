import React from 'react'

const Header = () => {
    const bu = () => {
        return <button>login</button>
    }
  return (
    <div>
        <h1>My app</h1>
        {bu()}
    </div>
  )
}

export default Header
