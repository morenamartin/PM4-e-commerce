import React, { FC } from "react"
import Card from "./card"
import { IProduct } from "@/types"


interface ProductsListProps {
  products: IProduct[]
}

const ProductList: FC<ProductsListProps> = async ({products}) => {
      return(
        <div className="pt-10 pb-10 bg-white">
          <h1 className="ml-20 font-sans text-3xl font-bold text-black">Nuestros productos</h1>
          <section className="flex justify-center w-5/6 h-full pt-10 pb-20 m-auto "> 
            <ul className="flex flex-row flex-wrap justify-center w-4/5 gap-20">
                {products?.map((producto, index) => {
                return (
                      <li className="border-2 border-gris-primario w-60 h-[360px] rounded-[26px] mb-8" key={index}><Card {...producto} key={producto.id}/></li>
                    )
                })}
            {!products?.length && <div className="w-screen font-bold text-violeta-secundario">
              <span>No hay productos disponibles</span>
              </div>}
            </ul>
          </section>
        </div>
      )
}


export default ProductList;