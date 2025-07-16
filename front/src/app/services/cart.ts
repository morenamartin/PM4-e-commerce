"use server"
import { CreateOrderDto } from "@/types";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,
})


const createOrder = async (data: Partial<CreateOrderDto>, token: string) => {
    try{
        const res = await axiosApiBack.post("/orders", data,{
            headers: {
                Authorization: token
            }
        })

        if(!res.data){
            console.warn("Invalid products data format", res.data)
            return alert("error");
        }

        return {
            message: "Orden creada correctamente",
            data: res.data,
        }
    }catch(e){
        if(e instanceof Error){
            console.warn("Error fetching post createOrder", e?.message)
        }

        return{
            message: "Error creando orden",
            errors: (e as Error).message || "Error desconocido"
        }
    }
}


export default createOrder