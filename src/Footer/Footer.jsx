import React from 'react'

export default function Footer() {
  return (
    <div className='text-white bg-slate-600 bottom-0 right-0 left-0 justify-center items-center '>
       <div className="container py-7">
          <div className="grid md:grid-cols-3 py-6 gap-8">
            <div className="location p-4">
              <h2 className="text-3xl font-semibold mb-2">LOCATION</h2>
              <p className="text-base mb-4">2215 John Daniel Drive</p>
              <p className="text-base mb-4">Clark, MO 65243</p>
            </div>

            <div className="social p-4">
              <h2 className="text-3xl font-semibold mb-2">AROUND THE WEB</h2>
              <div className="icons flex justify-center items-center flex-wrap">
                <div className="me-2 border rounded-full center-div cursor-pointer duration-500 hover:text-emerald-400">
                  <i className="fa-brands fa-facebook p-2"></i>
                </div>

                <div className="me-2 border rounded-full center-div cursor-pointer duration-500 hover:text-emerald-400">
                  <i className="fa-brands fa-twitter p-2"></i>
                </div>

                <div className="me-2 border rounded-full center-div cursor-pointer duration-500 hover:text-emerald-400">
                  <i className="fa-brands fa-linkedin-in p-2"></i>
                </div>

                <div className="me-2 border rounded-full center-div cursor-pointer duration-500 hover:text-emerald-400">
                  <i className="fa-solid fa-globe p-2"></i>
                </div>
              </div>
            </div>

            <div className="about p-4">
              <h2 className="text-3xl font-semibold mb-2">ABOUT FREELANCER</h2>
              <p className="text-base mb-4">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A252F] py-4">
          Copyright © Your Website 2021
        </div>
    </div>
  )
}
