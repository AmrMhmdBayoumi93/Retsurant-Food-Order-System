import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)


    // activePage
      const [activePage,setActivePage]=useState("home")

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    } 

    const isLoggedIn = user !== null

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn,activePage,setActivePage }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}