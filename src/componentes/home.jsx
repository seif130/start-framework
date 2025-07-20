import React from 'react'
import img from "../assets/avataaars.svg"

export default function Home() {
  return (


    <div className='text-center p-2 home text-white vh-100' >
<img src={img} alt="logo" className='w-25' />
<h1 className='text-white'>start framework</h1>
<i className='fa-solid fa-star'></i>
<p className='pt-2'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
