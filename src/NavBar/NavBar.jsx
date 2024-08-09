import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Portfolio from '../Portofolio/Portfolio'
import About from '../About/About'
import Home from '../Home/Home'
import 'flowbite';

export default function NavBar() {
  return (
    // <div className='fixed top-0 left-0 right-0 text-white bg-slate-600'>
      

<nav className="fixed top-0 left-0 right-0 z-10 items-center pt-10 text-center text-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-slate-600 h-36">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">

  <h1 className='text-3xl font-bold'> <Link to={""}>Start Framework</Link></h1>
        
    
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">

      <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        
        <li>
          <NavLink to={"About"} className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
        </li>
        <li>
          <NavLink to={"Portfolio"} className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to={"Contact"} className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    // </div>
  )
}
