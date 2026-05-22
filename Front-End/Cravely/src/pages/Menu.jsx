

import React from 'react'
  import HomeFooter from '../components/HomeFooter/HomeFooter'
  import Navbar from '../components/Navbar/Navbar'
  import styles from '../pages/Menu.module.css'
  import MenuHeroSection from '../components/MenuHeroSection/MenuHeroSection'
function Menu() {

  return (
    
     
      <div className='bg-black' >

          <Navbar/> 


        <div  className=" min-vh-100  text-white" > 
         
         <MenuHeroSection /> 


        </div>





     <HomeFooter/>
 
             </div>
      
    


  )
}

export default Menu