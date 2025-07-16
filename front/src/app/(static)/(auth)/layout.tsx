"use client"

import {FC, useState} from "react"
import Image from "next/image"
import imagenLogin from "../../assets/fondoLogin.jpg"

interface LayoutAuthProps {
    children: React.ReactNode
}

const LayoutAuth:FC<LayoutAuthProps> = ({children}) => {
    return (
        <div className="flex flex-col justify-center h-fit md:flex-row">
            <div className="w-screen h-fit md:h-screen lg:w-2/5">
                <Image priority className="w-full h-96 md:h-full" src={imagenLogin} alt="fondo" />
            </div>
            <div className="flex justify-center w-screen md:h-screen h-3/6 md:items-center lg:w-3/4">
                {children}
            </div>
        </div>
    )
}

export default LayoutAuth