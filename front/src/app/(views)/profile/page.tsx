"use client"
import React, { useEffect, useState } from "react"
import { IUser, OrderResponse, OrderServiceResponse } from "@/types"
import { useAuthContext } from "@/app/context/AuthContext"
import { routes } from "@/app/routes"
import Alerta from "@/app/components/alerta/Alerta"
import getUserOrders from "@/app/services/profile"
import { useCartContext } from "@/app/context/CartContext"
import { usePathname } from "next/navigation"
 
const Profile:React.FC = () => {  
    const {user, resetUserData, token} = useAuthContext()
    const {vaciarCarrito} = useCartContext()
    const [aviso, setAviso] = useState(false)
    const pathname = usePathname()

    const handleOnClick = () => {
        setAviso(true)
        resetUserData()
        vaciarCarrito()
        
        setTimeout(() => { 
            setAviso(false)
            location.assign(routes.home)
        },2000)
    }


    const [orders, setOrders] = useState<OrderResponse[]>([])
    
    useEffect(() => {
        if(!token) return
        
        const getOrders = async ()=> {
            const ordersArray = await getUserOrders(token!)
            setOrders(ordersArray?.data || [])
        }
        getOrders()
    },[token])

    return (
            <div className="pt-5">

                {aviso == true && 
                    <Alerta texto="Cerrando sesión">
                        <div className="three-body">
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                        </div>
                    </Alerta>
                }

                <div className="lg:w-[40%] md:w-[70%] w-[95%] bg-violeta-primario mb-10 m-auto mt-24 shadow-lg shadow-gris-950">
                    <div className="flex flex-col gap-4 p-10 pb-0">
                        <span><strong className="text-black"> - Nombre: </strong><em className="text-gris-300">{user?.name}</em></span>
                        <span><strong className="text-black"> - e-mail: </strong><em className="text-gris-300">{user?.email}</em></span>
                        <span><strong className="text-black"> - Address: </strong><em className="text-gris-300">{user?.address}</em></span>
                        <span><strong className="text-black"> - Phone: </strong> <em className="text-gris-300">{user?.phone}</em></span>
                        <span><strong className="text-black"> - User role: </strong> <em className="text-gris-300">{user?.role}</em></span>
                    </div>
                        <div className="flex justify-end pb-5 pr-10">
                            <button onClick={handleOnClick} className="p-2 pl-6 pr-6 bg-white rounded-full text-violeta-primario hover:bg-gris-primario">CERRAR SESIÓN</button>
                        </div>
                </div>
                <div className="md:p-10 pb-10 mb-20 flex flex-col items-center bg-white w-[95%] md:w-[80%] min-h-10 h-fit m-auto shadow-lg shadow-gris-950">
                    <h1 className="text-xl font-bold text-violeta-primario">TUS COMPRAS</h1>

                    {orders.map((order) => (
                        <div className="w-[95%] h-fit h-min-[500vh] p-5 bg-violeta-primario my-5" key={order.id}>
                            <div className="flex flex-col">
                                <span>Orden N°: {order.id}</span>
                                <span>Estado: {order.status}</span>    
                            </div>
                            
                            <div className="p-1 mt-6 mb-4 text-center rounded-lg bg-violeta-700">
                                <span >PRODUCTOS</span>
                            </div>

                            <div className="flex flex-row flex-wrap items-center justify-center gap-10 ">
                                {order.products.map((product) => (
                                    <div key={product.id} className="flex flex-col items-center justify-between w-full py-4 rounded-md md:px-2 md:py-0 md:justify-center md:gap-4 md:w-44">
                                            <span className="text-center">{product.name}</span>
                                            <div className="flex flex-row justify-between w-full p-4 md:p-0 md:items-center md:gap-4 md:flex-col">
                                                <img className="h-20 w-fit" src={product.image}></img>
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-sm text-center"> Quedan {product.stock} productos</span>
                                                    <span className="text-center"> $ {product.price}</span>
                                                </div>
                                            </div> 

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {!orders.length && 
                        <div className="flex justify-center mt-4">
                            <span className="text-black">No tienes ordenes realizadas</span>
                        </div>
                    }
                </div>
            </div>
    )
}

export default Profile