import { useCartContext } from "@/app/context/CartContext";
import { routes } from "@/app/routes";
import { getProductById } from "@/app/services/products";
import { IProduct } from "@/types";
import { redirect } from "next/navigation";

import React, { useState } from "react"
import AgregarProductoToCart from "./ProductComponent";

export const fetchProduct = async (id:string) => {
    const response = await fetch(`http://localhost:3004/productDetail/${id}`,{
        cache: "no-cache"
    })
    const product = await response.json()
    return product
}


type Params<T> = Promise<T>

export default async function Page({
    params,
}: {
    params: Params<{slug: string[]}>,
}) {
    const {slug} = await params;

    const [idString] = slug; 
    const id = Number(idString);

    const product = await getProductById(id);
    if(!product) return redirect(routes.notFound)


    return (
        <div className="pt-1 md:pt-5">
            <div className="bg-white mt-[100px] md:mt-[120px] h-fit md:h-[500px] lg:h-[600px] w-[80%] m-auto mb-[50px] rounded-[30px] gap-6 md:gap-0 flex flex-col md:flex-row items-center justify-around">
                <div className="mt-5 md:mt-0 w-[50%] h-[90%] flex justify-center items-center">
                    <img className="h-[30%] md:h-[80%]" src={product.image} alt="imagen no carga" />
                </div>
                <div className="w-[90%] md:w-[50%] lg:w-[40%] h-[40%] md:mx-4 md:h-[90%] mb-5 md:mb-0 bg-gris-primario rounded-[30px] flex flex-col justify-around">
                    <h1 className="mt-10 text-3xl font-bold text-center text-black lg:mb-10">{product.name}</h1>
                    <p className="w-4/5 text-[#7B7B7B] text-center mr-auto ml-auto mt-5 md:mb-4 lg:mb-12">{product.description}</p>
                    <span className="mt-4 ml-10 text-3xl font-bold text-black">$ {product.price}</span>
                    <span className="p-1 pl-2 pr-2 mt-2 ml-4 text-white rounded-full lg:ml-10 bg-violeta-secundario w-fit">{product.stock} productos restantes</span>
                    <AgregarProductoToCart id={product.id} name={product.name} price={product.price} image={product.image} description={product.description} stock={product.stock} categotyId={product.categotyId}/>
                </div>
            </div>
        </div>
    )
}