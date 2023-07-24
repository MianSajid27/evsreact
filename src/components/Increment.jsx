import React,{useState} from 'react'

const Increment = () => {
    const [load,setload] = useState(0)
    const update = () => {

setload(load+1)

    }
  return (
    <div>
      <h2>hello</h2>
      <button onClick={update}> update - {load}</button>
    </div>
  )
}

export default Increment
