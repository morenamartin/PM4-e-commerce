"use server"
import axios from "axios";
import { OrderServiceResponse } from "@/types";
import { useAuthContext } from "../context/AuthContext";


const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,
})

const getUserOrders = async (token: string): Promise<OrderServiceResponse | undefined> => { 
    try{
        const res = await axiosApiBack.get("/users/orders",{
            headers: {
                Authorization: token
            }
        })
    
        if(!res.data || !Array.isArray(res.data)){
            console.warn("Invalid get user orders data format", res.data)
            return{
                message: "Error al traer los datos",
                errors: res.data
            }
        }

        return{
            message: "Ordenes fetch correcto",
            data: res.data,
        }
    }catch(e){
        if(e instanceof Error){
            console.warn("Error fetching orders", e?.message)
        }
        
        return{
            message: "Error fetching orders",
            errors: (e as Error).message || "Error desconocido"
        }
    }
    }

export default getUserOrders