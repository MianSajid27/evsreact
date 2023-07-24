// // import './App.css';
// // import List from './components/List';
// // //import Test from "./components/managecategories/test";
// // import Create from './components/Create';


// // function App() {
// //   return (
// //     <div className="container-fluid my-3">
// //       <div className='row'>
// //         <div className='col-3'>
// //           {/* <Test />
// //           <Test /> */}
// //           <Create />
// //         </div>
// //         <div className='col-9' >
// //           <List />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import './App.css';
// import { Routes, Route, Link } from 'react-router-dom';
// import Home, { About, NotFound, Portfolio } from './components/demo1/pages';
// import Products, { Create, ProductDetail, ProductLayout } from './components/demo1/products';

// function App() {

//   const products = [ 
//       {id: 1, name : "Aaaa"},
//       {id: 2, name : "Bbbb"},
//       {id: 3, name : "Cccc"},
//       {id: 4, name : "Dddd"}
//   ];

//   return (
//     <div className='container-fluid my-3'>
//       <div className='row'>
//         <div className='col-2'>
//           <ul className='list-group'>
//             <li className='list-group-item'>
//               <Link to="/home">Home</Link>
//             </li>
//             <li className='list-group-item'>
//               <Link to="/products">Products List</Link>
//             </li>
//             {
//               products.map(p => {
//                 return (
//                   <li className='list-group-item'>
//                     <Link to={`/products/${p.id}/${p.name}`}>{p.name}</Link>
//                   </li>)
//               })
//             }
//              <li className='list-group-item'>
//               <Link to="/products/create">Create Product</Link>
//             </li>
//             <li className='list-group-item'>
//               <Link to="/projects">Projcts</Link>
//             </li>
//             <li className='list-group-item'>
//               <Link to="/about">About Us</Link>
//             </li>
//           </ul>
//         </div>
//         <div className='col'>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/home' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/projects' element={<Portfolio />} />
//             <Route path='/products' element={<ProductLayout />} >
//               <Route index element={<Products />} />
//               <Route path=':id/:name' element={<ProductDetail />} />
//               <Route path='create' element={<Create/>} />
//             </Route>

//             <Route path='*' element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React from 'react'
// import Card from './components/Card'
// const App = () => {
//   return (
//     <div>
//       <Card  title="hello" 
      
//       para="Get ready for your first sale. Complete the setup to get started"
//       btn="install plugin"
      
//       />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import axios from 'axios'
// import './App.css';

// import { ExportToExcel } from './components/ExportToExcel';

// function App() {
//   const [data, setData] = React.useState([])
//   const fileName = "myfile"; // here enter filename for your excel file

//   React.useEffect(() => {
//     const fetchData = () =>{
//      axios.get('https://jsonplaceholder.typicode.com/posts').then(postData => {

//      // reshaping the array
//      const customHeadings = postData.data.map(item=>({
//        "Article Id": item.id,
//        "Article Title": item.title
//      }))

//       setData(customHeadings) 
//      })
//     }
//     fetchData()
//   }, [])

//   return (
//     <div className="App">
//       <ExportToExcel apiData={data} fileName={fileName} />
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Useeffect from './components/Useeffect'
import Increment from './components/Increment'
import Use from './components/Use'
import Prp from './components/Prp'

const App = () => {

  return (
    <div>
      {/* <Increment/> */}
      {/* <Useeffect/> */}
      {/* <Use/> */}
      <Prp/>
      
    </div>
  )
}

export default App


