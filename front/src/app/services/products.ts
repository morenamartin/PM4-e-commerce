"use server"
import { IProduct } from "@/types"
import axios from "axios"

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,
})

export const getProducts = async () => {
    try{
        const res = await axiosApiBack.get("/products")

        if(!res.data || !Array.isArray(res.data)){
            console.warn("Invalid products data format", res.data)
            return[];
        }

        return res.data
    }catch(e) {
        if(e instanceof Error){
            console.warn("Error fetching products list", e?.message)
        }

        return[];
    }
}

export const getProductById = async (id:number): Promise<IProduct | null> => {
    try{
        const res = await axiosApiBack.get("/products/" + id)
        // const res = null 

        if(!res.data){
            console.warn("Invalid product data format", res.data)
            return null;
        }

        return res.data
    }catch(e) {
        if(e instanceof Error){
            console.warn("Error fetching product", e?.message)
        }

        return null;
    }
}


export const getProductsByCategory = async (
    categoryId: string
): Promise<IProduct[]> => {
    try {
        const res = await axiosApiBack.get("/products/category/" + categoryId);

        if(!res.data || !Array.isArray(res.data)) {
            console.warn("Invalid products by category data format", res.data);
            return []
        }

        return res.data
    }catch(e) {
        if(e instanceof Error) {
            console.warn("Error fetching product by category", e?.message)
        }

        return[]
    }
}