import ProductList from "@/app/componentsHome/Card/productList"
import { categories } from "@/app/helpers/categories"
import { routes } from "@/app/routes"
import { getProductsByCategory } from "@/app/services/products"
import { clsx } from "clsx"
import Link from "next/link"
import React from "react"
type SearchParams<T> = Promise<T>

const ProductsPage = async ({
    searchParams
}: {
    searchParams?: SearchParams<{ category: string }>
}) => {
    const {category = undefined} = (await searchParams || {})
    console.log("Category:", category)

    const products = await getProductsByCategory(category || "all")

    return (
    <div>
        <div className="pt-20">   
            <div className="flex flex-row flex-wrap justify-center gap-8 py-5 mt-10 md:py-2 bg-violeta-primario">
                <Link 
                    href={routes.products + "?category=all"}
                    className={clsx(
                        "font-bold",
                        category === "all" || !category ? "text-violeta-400" : "text-white"
                )}>
                    <span>Ver todos</span>
                </Link>
                {categories.map((cat) => (
                    <Link href={routes.products + `?category=${cat.id}`} key={cat.id}>
                        <span className={clsx(
                            "font-bold",
                            cat.id.toString() === category ? "text-violeta-400" : 'text-white'
                        )}>
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
            <ProductList products={products}/>
    </div>
    )
}

export default ProductsPage