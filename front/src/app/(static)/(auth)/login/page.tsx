import React from "react"
import LoginForm from "./components/LoginForm"

const Login:React.FC = () => {
    return(
        <div className="p-6 pl-12 pr-12 mt-20 h-fit bg-violeta-primario">
            <p className="text-xl font-bold text-center text-white">INICIAR SESIÓN</p>
            <LoginForm />
            <div className="flex flex-row gap-2">
                <span>¿No tenes cuenta?</span>
                <a href="/register" className="text-violeta-950">Registrate</a>
            </div>
        </div>
    )
}

export default Login