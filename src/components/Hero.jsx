import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'


const Hero = () => 
(
   <section id="home" className={`flex md:flex-row flex-col ${styles.padding}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-slate-900 to-gray-900 rounded-[10px]'>
         <img src={discount} alt='discount'className='w-[32px] h-[32px]'></img>
         <p className={`${styles.paragraph }ml-2`}>
         <span className='text-white '> 20% {""}
         </span>
          Discount for {""}
          <span className='text-white '> 1 month {""}
         </span>
         Account
         </p>
      </div>
      <div className='flex flex-row items-center justify-between'>
      <h1 className='text-[52px] ss:text-[72px] font-semibold font-poppins text-white'>The Next <br className='sm:block hidden'></br> <span className='text-green-400'>Generation </span><br></br> 
       Payment Method.</h1>
      </div>
      
   </div>
   
   </section>
  )


export default Hero