import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    description: "Experimentá potencia y elegancia con el iPhone 11: capturá momentos increíbles con su sistema de doble cámara, disfrutá de un rendimiento excepcional y sumergite en una brillante pantalla Liquid Retina. ¡Descubrí un mundo de posibilidades en la palma de tu mano!",
    price: 699,
    stock: 22,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/iphone11.png?updatedAt=1752014104987",
    categoryId: 1
  },
  {
    name: "MacBook Air",
    description: "Descubrí eficiencia y sofisticación con la MacBook Air: su diseño liviano se combina con un rendimiento poderoso, la impresionante pantalla Retina da vida a tu trabajo, y la batería de todo el día te mantiene productiva donde sea que vayas. Elevá tu experiencia informática con la MacBook Air.",
    price: 999,
    stock: 17,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/MacBookAir.png?updatedAt=1752014105071",
    categoryId: 2
  },
  {
    name: "Seagate Portable 2TB",
    description: "Disco duro externo portátil con 2TB de capacidad y conexión USB 3.0. Perfecto para almacenar fotos, videos y documentos importantes.",
    price: 75,
    stock: 18,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Seagate%20Portable%202TB.png?updatedAt=1752635991843",
    categoryId: 8
  },
  {
    name: "Kingston DataTraveler 64GB",
    description: "Pendrive USB 3.0 con 64GB de almacenamiento. Rápido y compacto, ideal para transportar archivos y documentos de manera segura.",
    price: 22,
    stock: 25,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Kingston%20DataTraveler%2064GB.png?updatedAt=1752637110119",
    categoryId: 8
  },
  {
    name: "Adaptador WiFi USB TP-Link Archer T2U",
    description: "Adaptador WiFi USB dual band para conectar tu PC o laptop a redes inalámbricas con velocidades rápidas y estabilidad mejorada.",
    price: 25,
    stock: 15,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Adaptador%20WiFi%20USB%20TP-Link%20Archer%20T2U.png?updatedAt=1752636189885",
    categoryId: 7
  },
  {
    name: "Samsung Galaxy Tab S7",
    description: "Tablet con pantalla de 11 pulgadas, procesador potente y batería de larga duración. Perfecta para trabajo y entretenimiento.",
    price: 650,
    stock: 14,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Samsung%20Galaxy%20Tab%20S7.png?updatedAt=1752636574043",
    categoryId: 3
  },
  {
    name: "Lenovo Tab P11",
    description: "Tablet de 11 pulgadas con pantalla IPS, sonido Dolby Atmos y un diseño delgado y liviano para uso diario.",
    price: 300,
    stock: 20,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Lenovo%20Tab%20P11.png?updatedAt=1752636574374",
    categoryId: 3
  },
  {
    name: "Amazon Fire HD 10",
    description: "Tablet con pantalla Full HD de 10 pulgadas, ideal para lectura, navegación y streaming con buena batería.",
    price: 150,
    stock: 25,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Amazon%20Fire%20HD%2010.png?updatedAt=1752636574411",
    categoryId: 3
  },
  {
    name: "Dell XPS 13",
    description: "Laptop ultradelgada con pantalla InfinityEdge, procesador Intel Core i7 de última generación y gran autonomía para trabajar sin límites.",
    price: 1200,
    stock: 15,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Dell%20XPS%2013.png?updatedAt=1752636764243",
    categoryId: 2
  },
  {
    name: "HP Spectre x360",
    description: "Laptop convertible 2 en 1 con diseño elegante, pantalla táctil 4K y rendimiento potente para profesionales y creativos.",
    price: 1400,
    stock: 12,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/HP%20Spectre%20x360.png?updatedAt=1752636764210",
    categoryId: 2
  },
  {
    name: "Microsoft Surface Go 3",
    description: "Tablet 2 en 1 con Windows, pantalla táctil de 10.5 pulgadas y teclado desmontable. Ideal para productividad y movilidad.",
    price: 550,
    stock: 10,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Microsoft%20Surface%20Go%203.png?updatedAt=1752636574096",
    categoryId: 3
  },
  {
    name: "Samsung Galaxy S21",
    description: "Smartphone con pantalla AMOLED de 6.2 pulgadas, cámara triple avanzada y procesador potente para un rendimiento sin interrupciones.",
    price: 799,
    stock: 18,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Samsung%20Galaxy%20S21.png?updatedAt=1752636970888",
    categoryId: 1
  },
  {
    name: "Google Pixel 6",
    description: "Smartphone con cámara excepcional, sistema operativo Android puro y batería de larga duración para acompañarte todo el día.",
    price: 699,
    stock: 14,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Google%20Pixel%206.png?updatedAt=1752636970699",
    categoryId: 1
  },
  {
    name: "Xiaomi Redmi Note 11",
    description: "Smartphone económico con pantalla AMOLED de 6.43 pulgadas, cámara cuádruple y buen rendimiento para uso diario.",
    price: 299,
    stock: 22,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Xiaomi%20Redmi%20Note%2011.png?updatedAt=1752636970883",
    categoryId: 1
  },

  {
    name: "iPad Pro",
    description: "Liberá tu creatividad y productividad con el iPad Pro: su rendimiento potente, pantalla Liquid Retina deslumbrante y batería de larga duración lo convierten en la herramienta ideal para trabajar y jugar. Transformá tus ideas en realidad con el iPad Pro.",
    price: 799,
    stock: 26,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/iPadPro.png?updatedAt=1752014105035",
    categoryId: 3
  },
  {
    name: "Mouse Gamer Razer DeathAdder V2",
    description: "Mouse gamer ergonómico con sensor óptico de alta precisión, iluminación RGB personalizable y botones programables. Perfecto para gamers que buscan rendimiento y estilo.",
    price: 85,
    stock: 12,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Mouse%20Gamer%20Razer%20DeathAdder%20V2.png?updatedAt=1752636189899",
    categoryId: 7
  },
  {
    name: "Apple Watch Series 6",
    description: "Mantenete conectada y saludable con el Apple Watch Series 6: registrá tus entrenamientos, controlá tu salud y mantenete al tanto de la información y personas que más te importan. Viví el futuro del bienestar con el Apple Watch Series 6.",
    price: 399,
    stock: 14,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/AppleWatch.png?updatedAt=1752014105023",
    categoryId: 9
  },
  {
    name: "Cámara Canon EOS Rebel T7",
    description: "Cámara réflex digital con sensor CMOS de 24.1 MP, grabación Full HD y conectividad Wi-Fi. Ideal para principiantes y aficionados a la fotografía.",
    price: 450,
    stock: 9,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/C%C3%A1mara%20Canon%20EOS%20Rebel%20T7.png?updatedAt=1752636371730",
    categoryId: 5
  },
  {
    name: "AirPods Pro",
    description: "Sumergite en el sonido con los AirPods Pro: cancelación activa de ruido, modo de transparencia y un ajuste personalizable hacen que sean el compañero ideal para música, llamadas y todo lo que pase entre medio. Elevá tu experiencia de audio con los AirPods Pro.",
    price: 249,
    stock: 20,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/AirpodsPro.png?updatedAt=1752014105006",
    categoryId: 4
  },
  {
    name: "HomePod mini",
    description: "Mejorá el audio de tu hogar con el HomePod mini: sonido envolvente, asistente inteligente y centro de control para tu casa inteligente, todo en un solo dispositivo. Disfrutá de música, noticias y mucho más con el HomePod mini.",
    price: 185,
    stock: 19,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/HomePodmini.png?updatedAt=1752014104995",
    categoryId: 9
  },
  {
    name: "Estación de carga 3 en 1",
    description: "Carga de forma práctica y simultánea tu smartphone, smartwatch y auriculares con esta estación 3 en 1. Compacta, plegable y con diseño moderno, ideal para mantener todo organizado y siempre con batería.",
    price: 140,
    stock: 11,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/chargeSector.png?updatedAt=1752014105032",
    categoryId: 9
  },
  {
    name: "Parlante Bluetooth resistente al agua",
    description: "Llevá la música a todas partes con este parlante portátil Bluetooth. Resistente al agua, con graves potentes y luces LED, es perfecto para fiestas, playa o camping.",
    price: 260,
    stock: 18,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/parlante-removebg-preview.png?updatedAt=1752014105019",
    categoryId: 4
  },
  {
    name: "Purificador de aire inteligente",
    description: "Respirá aire puro con este purificador de aire que elimina hasta el 99.97% de partículas. Ideal para hogares con mascotas, alergias o simplemente para mejorar la calidad del aire.",
    price: 129,
    stock: 21,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/purificadorDeAire.png?updatedAt=1752014105002",
    categoryId: 9
  },
  {
    name: "Gafas de Realidad Virtual",
    description: "Viví la experiencia de la realidad virtual con estas gafas VR. Sumergite en juegos, recorridos y videos en 360° con una calidad impresionante y controles ergonómicos.",
    price: 500,
    stock: 27,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/realidadVirtual.png?updatedAt=1752014733168",
    categoryId: 9
  },
  {
    name: "Cámara de seguridad Wi-Fi",
    description: "Protegé tu hogar o negocio con esta cámara inteligente. Visión nocturna, detección de movimiento y acceso remoto desde tu celular",
    price: 430,
    stock: 13,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/C%C3%A1maradeseguridadWi-Fi.png?updatedAt=1752015417262",
    categoryId: 5
  },
  {
    name: "Lámpara LED inteligente",
    description: "Iluminá tus espacios con esta lámpara LED con control desde app o voz. Cambiá colores, intensidad y programá horarios fácilmente",
    price: 320,
    stock: 29,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/L%C3%A1mparaLEDinteligente.png?updatedAt=1752015417048",
    categoryId: 9
  },
  {
    name: "Drone con cámara HD",
    description: "Capturá increíbles tomas aéreas con este drone compacto. Fácil de manejar, con cámara HD, estabilización y control desde tu smartphone",
    price: 199,
    stock: 16,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Drone.png?updatedAt=1752015417237",
    categoryId: 5
  },
  {
    name: "Teclado mecánico RGB",
    description: "Disfrutá de una experiencia de escritura superior con este teclado mecánico retroiluminado. Ideal para gamers y programadores que buscan precisión y estilo",
    price: 600,
    stock: 12,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/tecladoMecanico.png?updatedAt=1752015722095",
    categoryId: 7
  },
  {
    name: "Auriculares inalámbricos",
    description: "Sumergite en tu música con estos auriculares con cancelación activa de ruido. Conexión Bluetooth estable, batería de larga duración y sonido envolvente",
    price: 349,
    stock: 14,
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Auriculares.png?updatedAt=1752015417063",
    categoryId: 4
  },
  //NUEVOS
    {
    name: "HP DeskJet 2755e",
    price: 89,
    description: "Impresora inalámbrica todo en uno con funciones de impresión, copia y escaneo. Compatible con HP Smart App.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/impresora.png?updatedAt=1752635392828",
    categoryId: 6,
    stock: 20
  },
  {
    name: "Canon PIXMA MG3620",
    price: 99,
    description: "Impresora multifunción con Wi-Fi. Imprimí desde tu celular o laptop sin cables. Ideal para el hogar.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/CanonPixmaG3160.png?updatedAt=1752635392615",
    categoryId: 6,
    stock: 15
  },
  {
    name: "Monitor LG 24'' Full HD",
    price: 149,
    description: "Pantalla LED de 24 pulgadas con resolución Full HD, ideal para trabajar, estudiar o mirar contenido multimedia.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/MonitorLG.png?updatedAt=1752635392881",
    categoryId: 7,
    stock: 12
  },
  {
    name: "Gabinete Thermaltake V200",
    price: 85,
    description: "Gabinete ATX con panel lateral de vidrio templado y ventilación RGB. Ideal para armado de PCs modernas.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/GabineteThermaltakeV200.png?updatedAt=1752635392587",
    categoryId: 7,
    stock: 8
  },
  {
    name: "WD My Passport 1TB",
    price: 59,
    description: "Disco externo portátil con 1TB de capacidad y conectividad USB 3.0. Ideal para backups y archivos grandes.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/WDMyPassport1TB.png?updatedAt=1752635395487",
    categoryId: 8,
    stock: 25
  },
  {
    name: "Samsung T7 500GB Portable SSD",
    price: 89,
    description: "SSD externo ultra rápido y resistente. Transferencias de datos veloces con USB-C. Perfecto para llevar a todos lados.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/SamsungT7500GBPortableSSD.png?updatedAt=1752635392429",
    categoryId: 8,
    stock: 18
  },
  {
    name: "SanDisk Ultra 128GB USB 3.0",
    price: 19,
    description: "Pendrive rápido y confiable para guardar fotos, música y documentos. Compacto y fácil de llevar.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/SanDiskUltra128GBUSB3.0.png?updatedAt=1752635395106",
    categoryId: 8,
    stock: 40
  },
  {
    name: "Combo Teclado y Mouse Logitech MK270",
    price: 35,
    description: "Combo inalámbrico de teclado y mouse confiable. Conexión estable y larga duración de batería, ideal para oficina o casa.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/ComboTecladoyMouseLogitechMK270.png?updatedAt=1752635392637",
    categoryId: 7,
    stock: 22
  },
  {
    name: "Brother HL-L2350DW",
    price: 149,
    description: "Impresora láser monocromo con Wi-Fi. Rápida, económica y confiable. Ideal para oficinas o estudiantes.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/Brother%20HL-L2350DW.png?updatedAt=1752635392421",
    categoryId: 6,
    stock: 10
  },
  {
    name: "Crucial X6 1TB Portable SSD",
    price: 79,
    description: "SSD externo compacto y resistente a golpes. Ideal para llevar tus archivos importantes en el bolsillo.",
    image: "https://ik.imagekit.io/qyifqnwzob/e-commerce/CrucialX61TBPortableSSD.png?updatedAt=1752635392688",
    categoryId: 8,
    stock: 22
  }

]

// const productsToPreLoad1: IProduct[] = [
//   {
//     name: "iPhone 11",
//     price: 699,
//     description:
//       "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
//     image:
//       "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
//     categoryId: 1,
//     stock: 10,
//   },
//   {
//     name: "MacBook Air",
//     price: 999,
//     description:
//       "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
//     image:
//       "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
//     categoryId: 2,
//     stock: 10,
//   },
//   {
//     name: "iPad Pro",
//     price: 799,
//     description:
//       "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
//     image:
//       "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
//     categoryId: 3,
//     stock: 10,
//   },
//   {
//     name: "Apple Watch Series 6",
//     price: 399,
//     description:
//       "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
//     image:
//       "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
//     categoryId: 4,
//     stock: 10,
//   },
//   {
//     name: "AirPods Pro",
//     price: 249,
//     description:
//       "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
//     image:
//       "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
//     categoryId: 5,
//     stock: 10,
//   },
//   {
//     name: "HomePod mini",
//     price: 99,
//     description:
//       "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
//     image:
//       "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
//     categoryId: 6,
//     stock: 10,
//   },
// ];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
