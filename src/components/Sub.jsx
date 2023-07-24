import React from 'react'

const Sub = (props) => {
    console.log(props)
  return (
    <div>
      

<h1>{props.title} </h1> 
<p>{props.para}</p>

    </div>
  )
}

export default Sub
