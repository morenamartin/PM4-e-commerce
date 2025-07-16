"use server"
import { LoginServiceResponse, LoginUserDto } from "@/types"
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,
})

const Login = async (data: LoginUserDto): Promise<LoginServiceResponse> => {
    try{
        const res = await axiosApiBack.post("/users/login", data)
    
        if(!res.data){
            console.warn("Invalid post login data format", res.data)
            return{
                message: "Error al iniciar sesión",
                errors: res.data
            }
        }

        return{
            message: "Usuario incio sesión correctamente",
            data: res.data,
        }
    }catch(e){
        if(e instanceof Error){
            console.warn("Error fetching post login", e?.message)
        }

        return{
            message: "Error iniciando sesión",
            errors: (e as Error).message || "Error desconocido"
        }
    }
}

export default Login