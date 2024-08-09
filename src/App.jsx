import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './LayOut/LayOut'
import Portfolio from './Portofolio/Portfolio'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'
import About from './About/About'
import Home from './Home/Home'
import 'flowbite';



 const routers =createBrowserRouter([
  {path:"",element:<LayOut/>, children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/>}
  ]},
])



function App() {
  // const [count, setCount] = useState(0)

  

  return (
    <>
         <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
