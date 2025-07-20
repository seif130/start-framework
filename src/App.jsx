import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './componentes/contact';
import Home from './componentes/home'
import About from './componentes/About';
import Portfolio from './componentes/portfolio';
import Layout from './componentes/layout';
import NotFound from './componentes/not found'






let x = createBrowserRouter([
  {path: "/" , element : <Layout/> ,
      children: [
     {index: true , element : <Home/>},
   {path: "about" , element : <About/>} ,
   {path: "portfolio" , element : <Portfolio/>} ,
    {path:"contact" , element : <Contact/>} ,
    {path: "*" , element: <NotFound/>}
  ]
   } 


])



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={x} ></RouterProvider>
      
    </>
  )
}

export default App
