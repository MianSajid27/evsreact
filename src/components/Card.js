import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>    {props.para}  </p>

      <button>{props.btn} </button>
    </div>
  )
}

export default Card
