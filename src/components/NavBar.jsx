import React from 'react'
import { useState } from 'react'
import {close,logo,menu} from '../assets'
import { navLinks } from '../constans'


const NavBar = () => {
  return (
   
   <nav className='w-full flex py-6  items-center navba justify-around' >
    <div className='container flex justify-between text-center items-cente flex-wrap  '> 
      <div className='items-start flex  space-x-4 '> 
        <div className=''>
        <h1>logo</h1>
        </div> 
      </div>
        <div className='  items-end text-center content-end  space-x-4 '>
          <div className='flex  space-x-4 items-end  '>
            <p>Home </p>
            <p>About Us </p>
            <p>Features</p>
            <p>Solution</p>
          </div>
        </div>
     </div>
   </nav>
  )
}

//container flex flex-wrap items-center justify-between mx-auto
export default NavBar
