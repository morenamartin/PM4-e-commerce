"use client"
import { RiShoppingCartLine } from "react-icons/ri";
import { routes } from "@/app/routes";
import React, { useContext, useEffect, useState } from "react"
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { CartContext, useCartContext } from "@/app/context/CartContext";
import { useAuthContext } from "@/app/context/AuthContext";



const Card:React.FC<Partial<IProduct>> = ({id, name, price,image, description, stock, categotyId}) => {
    const {agregarProducto, isProductInCart} = useCartContext()
    const {isAuth} = useAuthContext()

    const router = useRouter()
    const handleOnClick = () => {
        router.push(`${routes.productDetail}/${id}/${name}`)
    }


    const [aviso, setAviso] = useState(false)
    const [yaAgregado, setYaAgregado] = useState(false)

    const handleCartOnClick = () => {
        const producto = {id, name, price,image, description, stock, categotyId} as IProduct

        const isOnCart = isProductInCart(producto.id | 0)

        if(isOnCart){
            setYaAgregado(true)
            setTimeout(() => { 
                setYaAgregado(false)
            },2000)
            return
        }  

        setAviso(true)
        agregarProducto(producto)
        setTimeout(() => { 
            setAviso(false)
        },1000)
    }
    

    const [alert, setAlert] = useState(false)

    const handleError = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        },2000)
    }
    

    return (
        <>

            {aviso == true && <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 inset-5">
                <div className="flex flex-col items-center justify-center h-40 gap-4 bg-black w-80">
                    <span className="text-xl font-bold text-white">Se agrego al carrito</span>
                </div>
            </div>}
            <div className="relative flex flex-col justify-between w-full h-full bg-white cursor-pointer rounded-3xl border-red-50">
                <div className="flex items-center justify-center w-full h-full bg-gris-primario rounded-3xl" onClick={handleOnClick}>
                    <img className="h-40 " src={image} alt="imagen no carga" />
                </div>
                <div className="bg-white rounded-b-3xl h-fit" onClick={handleOnClick}>
                    <h1 className="mt-5 ml-3 font-bold text-left text-black">{name}</h1>
                    <p className="mr-3 font-bold text-right text-black">$ {price}</p>
                </div>
                <div className="flex justify-between w-full p-2">
                    {isAuth ? <button onClick={handleCartOnClick}  className="bg-gris-primario hover:bg-[#BABABA] rounded-3xl text-black p-3">
                        <RiShoppingCartLine />
                    </button> : 
                        <button onClick={handleError} className="p-3 text-black bg-gris-300 rounded-3xl">
                        <RiShoppingCartLine />
                    </button>
                    }
                    <button onClick={handleOnClick} className="bg-violeta-primario p-2 pl-7 pr-7 rounded-3xl text-black font-sans font-semibold hover:bg-[#884B8B]" >Ver más</button>
                </div>
            </div>
            {alert == true && <div className="absolute flex items-center justify-center w-screen h-8 font-bold text-center text-white md:h-fit md:w-full md:relative -left-0 bg-violeta-primario ">
                <span>Para agregar productos inicia sesión</span>
            </div>}
            {yaAgregado == true && <div className="absolute flex items-center justify-center w-screen h-8 font-bold text-center text-white md:h-fit md:w-full md:relative -left-0 bg-violeta-primario ">
                <span>Este producto ya esta agregado en el carrito</span>
            </div>}
        </>
    )
}

export default Card;