"use client"

import React from "react"
import RegisterForm from "./components/RegisterForm"

const Login:React.FC = () => {
    return(
        <div className="w-full p-6 pl-12 pr-12 h-fit md:w-2/3 bg-violeta-primario">
            <p className="text-xl font-bold text-center text-white">REGISTRARME</p>
            <RegisterForm />
            <div className="flex flex-col justify-center text-center md:flex-row md:gap-2">
                <span>¿Ya tenes cuenta?</span>
                <a href="/login" className="text-violeta-950">Inicia sesión</a>
            </div>
        </div>
    )
}

export default Login