import Image from "next/image";
import styles from "./ProductosDestacados.module.css"

//imagenes
import chargeSector from "../../assets/productos/chargeSector.png"
import homepod from "../../assets/productos/homepod.png"
import parlante from "../../assets/productos/parlante.png"
import purificadorDeAire from "../../assets/productos/purificadorDeAire.png"
import virtualReality from "../../assets/productos/virtualReality.png"

const ProductosDestacados = () => {
    return (
        <section className={styles.section}>
            <div className="w-[90%] md:w-[65%] h-3/4 m-auto flex">
                <a href="/productDetail/9/Purificador%20de%20aire%20inteligente" className={styles.contenedorProductos}>
                    <Image className="object-contain w-full h-full" src={purificadorDeAire} alt="purificadorDeAire" />
                </a>
                
                <div className="flex flex-col justify-between w-full h-full ml-10">
                    <div className="flex justify-between h-[45%]">
                        <a href="/productDetail/7/Estación%20de%20carga%203%20en%201" className={styles.miniContenedorProductos}>
                            <Image className="object-contain w-full h-full" src={chargeSector} alt="chargeSector"/>
                        </a>
                        <a href="http://localhost:3000/productDetail/8/Parlante%20Bluetooth%20resistente%20al%20agua" className={styles.contenedorProductos}>
                            <Image className="object-contain w-full h-full" src={parlante} alt="parlante" />
                        </a>
                    </div>
                    <div className="flex justify-between h-[45%]">
                        <a href="http://localhost:3000/productDetail/6/HomePod%20mini" className={styles.contenedorProductos}>
                            <Image className="object-contain w-full h-full" src={homepod} alt="homepod" />
                        </a>
                        <a href="http://localhost:3000/productDetail/10/Gafas%20de%20Realidad%20Virtual" className={styles.miniContenedorProductos}>
                            <Image className="object-contain w-full h-full" src={virtualReality} alt="virtualReality" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductosDestacados;