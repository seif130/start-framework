import React from 'react'
import pic1 from '../assets/poert1.png'
import pic2 from '../assets/port2.png'
import pic3 from '../assets/port3.png'
import { useState } from "react";


export default function Portfolio() {
  const images = [pic1, pic2, pic3, pic1, pic2, pic3];
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="text-center port vh-100 pt-4 position-relative">
      <h1 className="fw-bold">Portfolio Component</h1>
      <i className="fa-solid fa-star pb-4 "></i>

      
      <div className="row gy-4">
        {images.map((img, index) => (
          <div className="col-md-4 item hover-bg" key={index} onClick={() => setSelectedImg(img)}>
            <img src={img} alt='photo' className="w-100" />
          </div>
        ))}
      </div>

    
      {selectedImg && (
        <div
          className="lightbox vh-100 d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 bg-dark bg-opacity-75"
          onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="lightbox" className="w-50 " />
        </div>
      )}
    </div>
  );
}
