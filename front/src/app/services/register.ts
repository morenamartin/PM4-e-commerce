"use server"
import { RegisterUserDto } from "@/types"
import axios from "axios";

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,
})


const register = async (data: RegisterUserDto) => {
    try{
        const res = await axiosApiBack.post("/users/register", data)

        if(!res.data){
            console.warn("invalid post register data format", res.data)
            return {
                message: "Error al registrar el usuario",
                errors: res.data
            }
        }

        return {
          message:  "Usuario registrado con exito"
        }
    }catch(e: unknown) {
        if(e instanceof Error){
            console.warn("Error fetching post register", e?.message)
        }
        return {
            message: "Error al registrar el usuario",
            errors: (e as Error).message || "error desconocido"
        }
    }
}

export default register; 
