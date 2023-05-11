import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-ful bg-gradient-to-r from-cyan-400 to-cyan-100 p-[2px] cursor-pointer rounded-full`}>
   <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary `}>
    <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[24px] leading-[24px] text-white'><span className='text-gradient'>Get <br></br>Started
            </span>
            </p>
    </div>
 </div>   
    </div>
  )
}

export default GetStarted
