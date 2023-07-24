// import React from 'react'
// import Sub from './Sub'

// const Prp = () => {
//   return (
//     <div>
      
// <Sub
// title="hello"
// para="Search for the keywords to learn more about each warning."

// />


//     </div>
//   )
// }

// export default Prp

import React from 'react'
import "../App.css"
 import Man from '../img/Man.jpg'
const Prp = () => {
  return (
    <div>
      
      <div className='container'>
<img src={Man} />
<div className='overlay'>
<div className='content'>
<p> hello</p>
</div>

</div>
<div className='container'>
<img src={Man} />
<div className='overlay'>
<div className='content'>
<p> hello</p>
</div>

</div>

      </div>
      </div>
      
    </div>
  )
}

export default Prp

