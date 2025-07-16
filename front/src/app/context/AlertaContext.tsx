"use client"
import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "./CartContext";
import { useAuthContext } from "./AuthContext";
import createOrder from "../services/cart";
import { routes } from "../routes";

interface CartContextProps {
    alerta: React.ReactNode
    avisoError: React.ReactNode
    alertaFinal: React.ReactNode
    openAlert: () => void
    closeAlert: () => void
    confirmAlert: () => void
}

export const AlertaContext = createContext<CartContextProps | null>(null)

export const AlertaProvider: FC<{children: ReactNode}> = ({children}) => {
    const router = useRouter()
    const {cart, vaciarCarrito} = useCartContext()
    const {user, token} = useAuthContext()
    const [alerta, setAlerta] = useState(false)
    const [avisoError, setAvisoError] = useState(false)
    const [alertaFinal, setAlertaFinal] = useState(false)

    useEffect(() => {
        if(!alerta){
            return;
        }

        localStorage.setItem("alerta", JSON.stringify(alerta))
    }, [])


    useEffect(() => {
        const storedAlerta = localStorage.getItem("alerta")

        if(!storedAlerta){
            setAlerta(false)
            return
        }

        setAlerta(JSON.parse(storedAlerta))
    }, [])


    
    //FUNCIONES
    const openAlert = () => {
        if(!cart?.length){
            setAvisoError(true)
            setTimeout(() => {
                setAvisoError(false)
            },1000)
            return
        }
        setAlerta(true)
    }

    const closeAlert = () => {
        setAlerta(false)
    }


    const confirmAlert = async () => {
        const orderData = {
            userId: user?.id,
            products: cart!.map((producto) => producto.id)
        }
        
        const orden = await createOrder(orderData, token!)
        setAlerta(false)
        setAlertaFinal(true)
        setTimeout(() => {
            setAlertaFinal(false)
            vaciarCarrito()
            router.push(routes.profile)
        }, 2000)
    }


    return(
        <AlertaContext.Provider value={{alerta, openAlert, closeAlert, confirmAlert, avisoError, alertaFinal}}>
            {children}
        </AlertaContext.Provider>
    )
}

export const useAlertaContext = () => {
  const context = useContext(AlertaContext)
  if (!context) {
    throw new Error("useAlertContext debe usarse dentro de un AlertProvider")
  }
  return context
}