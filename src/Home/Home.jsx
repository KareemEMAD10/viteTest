import React from 'react'
import image from "./../assets/Images/image.svg"

export default function Home() {
  return (
    <>
      <main className=' bg-teal-600 text-white h-screen flex  justify-center items-center '>
         <div className='text-center '>
            <img src={image} className='size-64 mx-auto mb8 pb-8' alt="ImgHome" />
            <h2 className="uppercase text-4xl font-bold pt-6">start framework</h2>

            <div className="star my-5 flex items-center justify-center p-4">
            <span className="w-20 h-1 bg-white"></span>
            <i className="fa-solid fa-star mx-5"></i>
            <span className="w-20 h-1 bg-white"></span>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>
         </div>
      </main>
    </>
  )
}
