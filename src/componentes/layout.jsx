import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  return (
    <>
    
<Navbar/>

<div className="container p-5 my-4">

  <Outlet/>

</div>

<Footer/>


    </>
  )
}
