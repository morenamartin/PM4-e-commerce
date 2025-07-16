"use client"
import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { IProduct } from "@/types";
import { usePathname } from "next/navigation";

interface CartContextProps {
    cart: IProduct[] | undefined,
    total: number | undefined,
    priceTotal: () => number | undefined,
    agregarProducto: (producto: IProduct) => void
    borrarProducto: (id: number) => void
    vaciarCarrito: () => void
    isProductInCart: (productId?: number) => boolean | undefined
}

export const CartContext = createContext<CartContextProps | null>(null)

export const CartProvider: FC<{children: ReactNode}> = ({children}) => {
    const pathname = usePathname()
    const [cart, setCart] = useState<IProduct[] | null>(null)
    const [total, setTotal] = useState<number>()

    const priceTotal = useCallback(() => {
        if(!cart || cart?.length === 0) return 0
        
        return cart.reduce((acc, item) => acc + (item.price || 0), 0)
    },[cart])

    useEffect(() => {
        if(!cart){
            return;
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("total", JSON.stringify(total))
    }, [cart, total])


    useEffect(() => {
        const storedCart = localStorage.getItem("cart")
        const storedTotal = localStorage.getItem("total")

        if(!storedCart || !storedTotal){
            setCart([])
            setTotal(0)
            return
        }

        setCart(JSON.parse(storedCart))
        setTotal(JSON.parse(storedTotal))
    }, [pathname])


    
    //FUNCIONES
    const isProductInCart = (productId: number | undefined) => {
        if(!productId) return
        return cart ? cart.some((item) => item.id === productId) : false;
    }


    const agregarProducto = (producto:IProduct) => {
        setCart(prevCart => [...(prevCart || []), producto])
        
        setTotal(prevTotal => (prevTotal || 0) + 1)
    }

    const borrarProducto = (id:number) => {
        setCart((prevCart) => {
            if(!prevCart){
                return []
            }
            
            const updatedCart = prevCart?.filter(item => item.id !== id) || []
            return updatedCart
        });

        setTotal((prevTotal) => {
            if(prevTotal === undefined || prevTotal <= 0){
                return 0;
            } 

            return prevTotal - 1
        })
    }

    const vaciarCarrito = () => {
        setCart([])
        setTotal(0)
    }

    return(
        <CartContext.Provider value={{cart:cart || [], agregarProducto, borrarProducto, vaciarCarrito, total, priceTotal, isProductInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider")
  }
  return context
}