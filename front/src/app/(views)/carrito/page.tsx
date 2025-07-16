"use client"
import { useCartContext } from "@/app/context/CartContext"
import React, { useEffect, useState } from "react"
import Alerta from "@/app/components/alerta/Alerta"
import AlertaConfirmar from "./AlertaConfirmar"
import { useAlertaContext } from "@/app/context/AlertaContext"

const Carrito: React.FC = () => {
    const {cart, borrarProducto, vaciarCarrito, priceTotal} = useCartContext()
    const {alerta, confirmAlert, openAlert,closeAlert, avisoError, alertaFinal} = useAlertaContext()
    

    return (
        <div className="pt-32 pb-40 h-fit">
            <div className="w-[90%] bg-white md:w-[75%] m-auto min-h-[300px] h-fit pt-10 pb-5">
                <div className="h-[2px] w-[80%] m-auto mb-10 bg-violeta-primario"></div>
                {cart?.length && <ul className="text-white md:w-[30%] ml-[26%] mb-5 lg:text-black font-bold flex flex-row justify-between">
                    <li>nombre</li>
                    <li>precio</li>
                </ul>}
                
                {cart?.length ? <ul>
                    {cart?.map((product) => {
                        return (
                            <div key={product.id} className="w-[80%] h-fit md:h-28 m-auto mb-10 flex flex-col md:flex-row justify-between">
                                <div className="flex flex-row w-[80%]">
                                    <div className="bg-gris-primario h-full w-[120px] flex justify-center items-center mr-10">
                                        <img className="object-contain h-[90%]" src={product.image}></img>
                                    </div>
                                    <div className="text-black w-[48%] gap-2 flex flex-col md:flex-row row-2 md:justify-between pt-5">
                                        <li key={product.id}>{product.name}</li>
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5 md:justify-end">
                                    <button onClick={() => borrarProducto(product.id)} className="mr-5 bg-violeta-primario h-8 pr-3 pl-3 text-black hover:bg-[#813C84]">ELIMINAR</button>
                                </div>
                            </div>
                        )
                    })}
                </ul>:
                    <div className="flex flex-col items-center text-black mb-14">
                        <span className="m-auto text-sm">NO HAY PRODUCTOS AGREGADOS EN EL CARRITO</span>
                        <span className="text-xs ">Podes hacerlo desde el inicio</span>
                    </div>
                }

                {avisoError == true && <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-100">
                    <div className="flex flex-col items-center justify-center h-40 gap-4 bg-black shadow-lg w-80 shadow-gris-950">
                        <span className="text-xl font-bold text-white">No tenes items en tu carrito</span>
                    </div>
                </div>}

                {alertaFinal == true && <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-100">
                    <Alerta texto="La orden fue realizada con exito"/>
                </div>}
                
                <div className="flex items-center justify-center md:justify-end">
                    <div className="w-[80%] md:w-fit md:mr-10 lg:mr-24 gap-6 flex justify-center items-center text-black pt-5 border-t-[2px] border-t-violeta-primario">
                        {Boolean(cart?.length) && <button className="p-1 pl-3 pr-3 bg-violeta-primario hover:bg-[#813C84]" onClick={() => vaciarCarrito()}>VACIAR CARRITO</button>}
                        <span><strong>Total: </strong> $ {priceTotal()}</span>
                        <button onClick={openAlert} className="p-3 text-xs md:text-lg rounded-xl md:rounded-full bg-violeta-primario hover:bg-[#813C84]">COMPLETAR ORDEN</button>
                    </div>
                </div>

                {alerta === true &&
                <div>
                    <AlertaConfirmar>
                        <div className="flex flex-row gap-8">
                            <button className="hover:text-gris-950" onClick={closeAlert}>Cancelar</button>
                            <button className="px-2 py-1 hover:text-gris-950 bg-violeta-primario" onClick={confirmAlert}>Confirmar</button>
                        </div>
                    </AlertaConfirmar>
                </div>}
            </div>
        </div>
    )
}

export default Carrito