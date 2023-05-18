
import React from 'react'
import styles from './style'
import { NavBar,Hero, Stats,Business,Billing,CardDeal,Testimonials,Clients,Cta,
Footer } from './components'

const App = () => {
  return (
    <div className='bg-black-primary w-full overflow-hidden' >
      <div className={`  ${styles.flexCenter}  justify-center`}>
       <div className={`bg-primary ${styles.boxWidth}`}>
        <NavBar />
       </div> 
      </div>
    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX}`}>
    <div className={`${styles.boxWidth} `}>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <Cta />
      <Footer />
    </div>
  </div>


    

      
    </div>
  )
}

export default App
