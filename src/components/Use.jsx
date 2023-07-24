// import React,{useState} from 'react'

// const Use = () => {
// const [load,setload] = useState(0)



//   return (
//     <div>
//       <h1>Mian Sajid {load}</h1>
//       <button onClick={() => setload(load+1)}> update</button>
//     </div>
//   )
// }

// export default Use
import React,{useState} from 'react'

const Use = () => {
const [show,setshow] = useState()
  return (
    <div>
      <h1>Mian Sajid</h1>
      <button onClick={() => setshow(!show)}>update</button>
{
show ?

      <h1> Mian Brother</h1>
      :null
}


    </div>
  )
}

export default Use
