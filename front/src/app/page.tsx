import React, { useState } from "react";
import ProductList from "./componentsHome/Card/productList";
import Navbar from "@/app/components/Navbar/Navbar";
import ProductosDestacados from "./componentsHome/ProductosDestacados/ProductosDestacados"
import Image from "next/image";
import imagenFondo from "./assets/imagenFondo.png"
import Footer from "@/app/components/footer/Footer";
import { getProducts } from "./services/products";
import { CartProvider } from "./context/CartContext";


const getData = async () => {
    const products = await getProducts()

    return {
        products
    }
}

const Home = async () => {
    const {products} = await getData();

    return (
        <CartProvider>
            <div className="pb-1 bg-gris-primario min-h-100vh h-fit">
                <Navbar />
                <Image priority height={400} className="w-screen" src={imagenFondo} alt="fondo"/>
                <ProductosDestacados />
                <ProductList products={products}/>
                <Footer />
            </div>      
        </CartProvider>
    )
}

export default Home