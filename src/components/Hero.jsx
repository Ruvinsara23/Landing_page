import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => 
(
   <section id="home" className={`flex md:flex-row flex-col ${styles.padding}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-slate-900 to-gray-900 rounded-[10px]'>
         <img src={discount} alt='discount'className='w-[32px] h-[32px]'></img>
         <p className={`${styles.paragraph }`}>
         <span className='text-white '> 20% {""}
         </span>
          Discount for {""}
          <span className='text-white '> 1 month {""}
         </span>
         Account
         </p>
      </div>
      <div className='flex flex-row items-center justify-between'>
      <h1 className='text-[52px] xs:text-[48px] ss:text-[72px] font-semibold font-poppins text-white'>The Next <br className='sm:block hidden'></br> <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200'>Generation </span><br></br> 
       Payment Method.</h1>
       <div className='ss:flex hidden md:mr-4 mr-0 ml-5'>
       <GetStarted />
       </div>
       
      </div>
      <p className={`${styles.paragraph} max-w-[420px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
      We examine annual percentage rates, annual fees.
      </p>
   </div>
   
   <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
   <img src={robot} alt='bilding' className='ss:pt-[100px] relative z-[5]'/>
   <div className='absolute z-[110] w-[50%] h-[50%] right-20 bottom-20 to-blue-300'></div>
   </div> 
   </section>
  )


export default Hero