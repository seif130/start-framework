import React from 'react'


export default function Contact() {
  return (
    <>
    <div className='text-center p-5 vh-100 '>
      <h1 className='contact-text'>contact section</h1>
      <i className='fa-solid fa-star  contact-text mb-4'></i>
      <div className=' text-start'>
        <input type="text" placeholder='username' className='form-control mb-4 ' />
          <input type="number" placeholder='userage' className='form-control mb-4' />
             <input type="email" placeholder='useremail' className='form-control mb-4' />
              <input type="text" placeholder='userpassword' className='form-control mb-4' />
              <button className='btn btn-success '>send message</button>
      </div>
      
    </div>
    </>
  )
}
