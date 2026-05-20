import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Signature Truffle Burger',
      tags: ['NO ONIONS', 'EXTRA TRUFFLE'],
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&q=80',
      price: 24.00,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Heirloom Burrata Salad',
      tags: ['BALSAMIC GLAZE'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=80',
      price: 18.50,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Smoked Old Fashioned',
      tags: ['SINGLE LARGE CUBE'],
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=120&q=80',
      price: 16.00,
      quantity: 1,
    },
  ]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
