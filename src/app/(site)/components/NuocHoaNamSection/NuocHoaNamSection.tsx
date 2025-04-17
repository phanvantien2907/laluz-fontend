import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  alias: string;
  price: string;
  brand: string;
  gender: string;
  status: string;
  image: string;
}

interface SectionProps {
  products: Product[]; 
}

const NuocHoaNamSection:React.FC<SectionProps> = ({products}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640, 
        settings: { slidesToShow: 2 },
      },
    ],
  };
const dataNuocHoaNam = products.filter((p: Product) => p.gender === "Nam");

  return (
    <>
      <motion.div className='nuoc-hoa-nam'  initial={{ opacity: 0, y: -100 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }} 
        viewport={{ once: false, amount: 0.2 }}  > 
        <h5 className='text-bold font-bold text-3xl text-center uppercase mt-12 hover:text-[#9C8679] duration-200'>Nước hoa nam</h5>
      </motion.div>

      <div className="w-full max-w-6xl  mx-auto py-6 gap-6 text-[#9C8679] font-semibold mt-6">
      <Slider {...settings}>
      {dataNuocHoaNam.map((item: Product, index: number) => (
      <div key={index} className=" relative w-full max-w-xs  bg-white p-4 rounded-2xl shadow-lg text-center border">
      <Link href={`/products/${item.alias}/${item.name}`}>
      <p className='text-md absolute top-2 right-2 px-2  bg-red-500 text-white rounded-xl'>{item.status}</p>
      <img src={item.image} alt={item.name} className="w-24 h-32 mx-auto object-contain hover:scale-125 transition-transform" />
      <p className="text-sm mt-2 border-b border-black uppercase">{item.alias}</p>
      <h6 className="font-bold text-lg mt-1">{item.name}</h6>
      <p className="text-sm font-bold mt-1">{item.price.replace(/\./g, ',')} đ</p> 
      </Link>
    </div>
      ))}
    </Slider> 
    </div>
    </>
  )
}

export default NuocHoaNamSection
