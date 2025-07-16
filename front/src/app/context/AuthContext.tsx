"use client"
import { IUser, LoginResponse } from "@/types";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuth: boolean | null
    user: IUser | null,
    token: string | null
    saveUserData: (data:LoginResponse) => void
    resetUserData: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null)
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const AUTH_KEY = "authData"
    
    const saveUserData = (data:LoginResponse) => {
        setUser(data.user)
        setToken(data.token)
        setIsAuth(true)

        localStorage.setItem(
            AUTH_KEY,
            JSON.stringify(data)
        )
    }


    const resetUserData = () => {
        setUser(null)
        setToken(null)
        setIsAuth(false)

        localStorage.removeItem(AUTH_KEY)
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem(AUTH_KEY) || "{}")

        if(storage === undefined || !Object.keys(storage)?.length){
            setIsAuth(false)
            return
        }
        
        const storageType = storage as any;

        setUser(storage?.user)
        setToken(storageType.token)
        setIsAuth(storage?.login)
    }, [])

    return (
        <AuthContext.Provider value={{user, isAuth, saveUserData, token, resetUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useLoginContext debe usarse dentro de un AuthProvider")
  }
  return context
}