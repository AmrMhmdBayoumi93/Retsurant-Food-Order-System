    
    import React, { useEffect } from 'react'
    import { useState } from 'react'
  
   import axois from 'axios'

    
    
    function MenuCard({title,price,description,image}) {

      
      return (
        <div>
          <div className="card" style={{width: "18rem", backgroundColor: '#473535'}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body" style={{ backgroundColor: '#000000'}}>
    <h5 className="card-title" style={{ color: 'antiquewhite' }}>{title}</h5>
    <p className="card-text" style={{ color: '#aea393' }}>{description} </p> 
    <p className='text-white'>${price.toFixed(2)}</p>
    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#410505', border: 'none', width: '100%' }}>Add To Order</a>
  </div>
</div>
        


        </div>
      )
    }
    
    export default MenuCard
    