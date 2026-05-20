
    import React from 'react'

    import styles from '../MenuHeroSection/MenuHeroSection.module.css'
      import MenuCard from '../MenuCard/MenuCard'
      
       
      
      
      function MenuHeroSection() {
      
      const cards = [
        {title:"burger1" , price:10 , description:"this is good meal1"},
        {title:"burger" , price:15 , description:"this is good meal"},
        {title:"burger" , price:15 , description:"this is good meal"},
        {title:"burger" , price:15 , description:"this is good meal"},
        {title:"burger" , price:15 , description:"this is good meal"},
        {title:"burger" , price:15 , description:"this is good meal"},
      ]


      return (
        <>
          

          
      <div className='align-items-center d-flex flex-column justify-content-center my-4'>  

          <div className="header d-flex flex-column  ">
                <h1 className={styles.h1}>Our Menu </h1>
                <h6 className={styles.h6} >Discover our crave-worthy selection of artisan burgers, handcrafted
 sides, and refreshing beverages tailored for the gourmet soul.  </h6>



      {/* // here Tabs  consists of 4 adj buttons*/}


 <div className='d-flex   py-3 my-5 gap-4 '>
 
  
    <button style={{    cursor: 'pointer', 
      backgroundColor: "#8B1A1A", borderRadius: "50px", color: '#fff' }} className="px-4"> Signature Burgers </button>
    <button style={{     cursor: 'pointer', 
       backgroundColor: "#342725", borderRadius: "50px", color: '#fff' }} className="px-4"  > Sides & Meals </button>
    <button style={{    cursor: 'pointer', 
       backgroundColor: " #342725", borderRadius: "50px", color: '#fff' }} className="px-4" > Chilled Drinks </button>
    <button style={{ padding: '10px 50px',  cursor: 'pointer', 
       backgroundColor: " #342725", borderRadius: "50px", color: '#fff' }}  > Desserts </button>
     
   


      </div>
</div>

 

      


 

   {/* //Cards */}



      <div className="container">
        <div className="row">

        {cards.map((card,index)=>(
          <div className='col-4 mb-5' key={index}>
            <MenuCard title={card.title} price={card.price} description ={card.description}  /> 
          </div>
        ))}
        </div>
      </div>
        
      


        
      </div>














      
         
      
      
        </>



      )
    }
    
    export default MenuHeroSection
    