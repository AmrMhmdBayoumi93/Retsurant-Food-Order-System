import React from 'react'
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
function MenuCard({ id, title, price, description, image }) {
    const { addToCart } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();
    const favorite = isInWishlist(id);
    return (

        <div
            className="card h-100 border-0"
            style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '20px',
                overflow: 'hidden'
            }}
        >

            <img
                src={image}
                className="card-img-top"
                alt={title}
                style={{
                    height: '250px',
                    objectFit: 'cover'
                }}
            />

            <div className="card-body">

                <h5 className='text-white'>
                    {title}
                </h5>

                <p style={{ color: '#aaa' }}>
                    {description}
                </p>

                <div className='d-flex justify-content-between align-items-center mb-3'>

                    <p className='text-white fw-bold m-0'>
                        ${price}
                    </p>

                    <button
                        onClick={() =>
                            addToWishlist({
                                id,
                                title,
                                price,
                                description,
                                image
                            })
                        }
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >

                        <i
                            className={`bi ${favorite ? 'bi-heart-fill text-danger' : 'bi-heart text-white'}`}
                            style={{
                                fontSize: '22px',
                                transition: '0.3s'
                            }}
                        ></i>

                    </button>

                </div>

                <button
                    onClick={() =>
                        addToCart({
                            id,
                            title,
                            price,
                            description,
                            image
                        })
                    }
                    className='btn w-100'
                    style={{
                        backgroundColor: '#8B1A1A',
                        color: '#fff',
                        border: 'none'
                    }}
                >
                    Add To Order
                </button>

            </div>

        </div>

    )
}

export default MenuCard
// import React, { useEffect } from 'react'
// import { useState } from 'react'

// import axios from "axios";

// function MenuCard({ title, price, description, image }) {

//     return (
//         <div>
//             <div className="card" style={{ width: "18rem", backgroundColor: '#473535' }}>
//                 <img src={image} className="card-img-top" alt="..." />
//                 <div className="card-body" style={{ backgroundColor: '#000000' }}>
//                     <h5 className="card-title" style={{ color: 'antiquewhite' }}>{title}</h5>
//                     <p className="card-text" style={{ color: '#aea393' }}>{description} </p>
//                     <p className='text-white'>${price.toFixed(2)}</p>
//                     <a href="#" className="btn btn-primary" style={{ backgroundColor: '#410505', border: 'none', width: '100%' }}>Add To Order</a>
//                 </div>
//             </div>



//         </div>
//     )
// }

// export default MenuCard
