import React from 'react'

export const Post = (props) => {
  return (
    <div style={{border: "1px solid black"}}>
        <h1>product name: {props.name}</h1>
        <h2>product price: {props.price}</h2>
        <button>buy: {props.name}</button>
    </div>
  )
}
export default Post