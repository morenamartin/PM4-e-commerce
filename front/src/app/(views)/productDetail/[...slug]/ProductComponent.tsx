"use client"

import { useAuthContext } from "@/app/context/AuthContext"
import { useCartContext } from "@/app/context/CartContext"
import { IProduct } from "@/types"
import { useEffect, useState } from "react"

const AgregarProductoToCart:React.FC<Partial<IProduct>> = ({id, name, price,image, description, stock, categotyId}) => {
    const {cart, agregarProducto} = useCartContext()
    const {isAuth} = useAuthContext()
    const [aviso, setAviso] = useState(false)
    const [boton, setBoton] = useState(false)

    
    const handleCartOnClick = () => {
        const producto = {id, name, price,image, description, stock, categotyId} as IProduct

        setAviso(true)
        agregarProducto(producto)
        setTimeout(() => { 
            setAviso(false)
            setBoton(true)
        },1000)
    }


    return(
        <>
            {aviso == true && <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-100">
                <div className="flex flex-col items-center justify-center h-40 gap-4 bg-black w-80">
                    <span className="text-xl font-bold text-white">Agregando al carrito...</span>
                </div>
            </div>}
            {isAuth ? <button onClick={handleCartOnClick} disabled={boton} className="text-xl m-auto mb-3 mt-3 lg:mt-10 p-3 w-[90%] rounded-full bg-black">
                {boton == true ?  "AGREGADO" : "AGREGAR AL CARRITO"}
            </button>
            :
            isAuth === null ?
            <span className="my-2 text-center text-violeta-primario">Loading...</span>
            :
            <div className="flex items-center justify-center w-[90%] m-auto mt-4 mb-5 font-bold text-center text-black md:mt-0 h-fit md:h-8 lg:left-7 border-solid border-2 border-gris-900">
                <span>Para agregar productos inicia sesión</span>
            </div>}
            
        </>
    )
    
}

export default AgregarProductoToCart;