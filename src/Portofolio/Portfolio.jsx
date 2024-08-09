import React, { useState } from 'react'
import image1 from "./../assets/Images/image1.png"
import image2 from "./../assets/Images/image2.png"
import image3 from "./../assets/Images/image3.png"
export default function Portfolio() {
    const [imageSrc, setImageSrc] = useState("");
    const [show,setShow ] = useState(false);
  return (
    <>
        <section className='relative pb-20 text-center bg-white  pt-38'>
             <h2 className='pt-12 text-3xl font-extrabold uppercase text-slate-700'>portfolio component</h2>
            <div className="flex items-center justify-center my-5 star">
              <span className="w-20 h-1 bg-slate-700"></span>
                <i className="mx-5  text-slate-700 fa-solid fa-star"></i>
              <span className="w-20 h-1 bg-slate-700"></span>
            </div>

            <div>
                <div className='container flex flex-wrap justify-between'>
                 <div onClick={()=> {setImageSrc(image1); setShow(true)}} className="w-full p-5 box md:w-1/2 lg:w-1/3">
                    <div className='relative'>
                        <img className='rounded-lg' src={image1} alt="poert1 Image" />
                         <div className='absolute inset-0 flex items-center justify-center duration-1000 rounded-lg opacity-0 overlay bg-emerald-400 hover:opacity-90'>
                            <i className='text-white fa-solid fa-plus fa-6x'></i>
                         </div>
                    </div>
                 </div>
                        
                    
                 <div onClick={()=> {setImageSrc(image2); setShow(true)}} className="w-full p-5 box md:w-1/2 lg:w-1/3">
                    <div className='relative'>
                        <img className='rounded-lg' src={image2} alt="poert1 Image" />
                         <div className='absolute inset-0 flex items-center justify-center duration-1000 rounded-lg opacity-0 overlay bg-emerald-400 hover:opacity-90'>
                            <i className='text-white fa-solid fa-plus fa-6x'></i>
                         </div>
                    </div>
                 </div>
                
            
                 <div onClick={()=> {setImageSrc(image3); setShow(true)}} className="w-full p-5 box md:w-1/2 lg:w-1/3">
                    <div className='relative'>
                        <img className='rounded-lg' src={image3} alt="Image" />
                        <div className='absolute inset-0 flex items-center justify-center duration-1000 rounded-lg opacity-0 overlay bg-emerald-400 hover:opacity-90'>
                            <i className='text-white fa-solid fa-plus fa-6x'></i>
                        </div>
                    </div>
                 </div>



                 <div onClick={()=> {setImageSrc(image1); setShow(true)}} className="w-full p-5 box md:w-1/2 lg:w-1/3">
                    <div className='relative'>
                        <img className='rounded-lg' src={image1} alt="poert1 Image" />
                         <div className='absolute inset-0 flex items-center justify-center duration-1000 rounded-lg opacity-0 overlay bg-emerald-400 hover:opacity-90'>
                            <i className='text-white fa-solid fa-plus fa-6x'></i>
                         </div>
                    </div>
                 </div>
                        
                    
                 <div onClick={()=> {setImageSrc(image2); setShow(true)}} className="w-full p-5 box md:w-1/2 lg:w-1/3">
                    <div className='relative'>
                        <img className='rounded-lg' src={image2} alt="poert1 Image" />
                         <div className='absolute inset-0 flex items-center justify-center duration-1000 rounded-lg opacity-0 overlay bg-emerald-400 hover:opacity-90'>
                            <i className='text-white fa-solid fa-plus fa-6x'></i>
                         </div>
                    </div>
                 </div>
                
            
                 <div onClick={()=> {setImageSrc(image3); setShow(true)}} className="w-full p-5 box md:w-1/2 lg:w-1/3">
                    <div className='relative'>
                        <img className='rounded-lg' src={image3} alt="Image" />
                        <div className='absolute inset-0 flex items-center justify-center duration-1000 rounded-lg opacity-0 overlay bg-emerald-400 hover:opacity-90'>
                            <i className='text-white fa-solid fa-plus fa-6x'></i>
                        </div>
                    </div>
                 </div>


                     



                </div>
            </div>
        </section>




        <section onClick={(ele) => ele.target.id == "modal" && setShow(false)} id='modal' className={`px-10 fixed inset-0 top-24 bg-opacityGray z-50 justify-center items-center ${show? 'flex' : 'hidden'}`}>
          <div className="w-full modalBox sm:h-3/4 md:w-3/4 lg:w-1/2 h-1/2">
              <img className='rounded-xl' src={imageSrc} alt="image" />
          </div>
      </section>
    </>
  )
}
