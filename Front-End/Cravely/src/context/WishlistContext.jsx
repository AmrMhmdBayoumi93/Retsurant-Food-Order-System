import React, { createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState([])

    const addToWishlist = (item) => {
        setWishlistItems(prev => {
            const exists = prev.find(i => i.id === item.id)
            if (exists) {
                return prev.filter(i => i.id !== item.id)
            }
            return [...prev, item]
        })
    }

    const isInWishlist = (id) => wishlistItems.some(i => i.id === id)

    const wishlistCount = wishlistItems.length

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, isInWishlist, wishlistCount }}>
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    return useContext(WishlistContext)
}