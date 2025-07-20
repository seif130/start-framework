import React from 'react'
import { Link, NavLink } from 'react-router-dom'






export default function Navbar() {
  return (
    <>
    <div className='bar  fixed-top '>
        <ul className='list-unstyled pt-3 d-flex justify-content-between'>
         <li> <NavLink to="/" className='text-decoration-none text-white fw-bold'>start framework</NavLink> </li>

         <div className='d-flex gap-4'>
             <li> <NavLink to="about"  className='text-decoration-none text-white'>about</NavLink> </li>
           <li> <NavLink to="Portfolio" className='text-decoration-none text-white'>Portfolio</NavLink> </li>
            <li> <NavLink  to="contact"  className='text-decoration-none text-white'>Contact</NavLink> </li>
         </div>
       
        </ul>
    </div>
    </>
  )
}
