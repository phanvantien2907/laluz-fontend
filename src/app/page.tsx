"use client";
import React from 'react'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { dataNuocHoaNam, tai_sao_chon_laluz_parfums, dataNuocHoaNu, dataNuocHoaUniSex,stuDio } from './mockdata';
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';
import axios from "axios";
import { useEffect, useState } from "react";
import NuocHoaNuSection from './components/NuocHoaNuSection/NuocHoaNuSection';
import NuocHoaNamSection from './components/NuocHoaNamSection/NuocHoaNamSection';
import NuocHoaUniSexSection from './components/NuocHoaUniSexSection/NuocHoaUniSexSection';
import RelatedProductsSection from './components/RelatedProductsSection/RelatedProductsSection';
import ContentHome from './components/ContentHome/ContentHome';
// import { Item } from '@radix-ui/react-dropdown-menu';


const images = [
  "/image/slide/Frame-549.jpg",
  "/image/slide/Frame-550.jpg",
  "/image/slide/Frame-551.jpg",
  "/image/slide/Frame-552.jpg",
  "/image/slide/Frame-553.jpg",
  "/image/slide/Frame-554.jpg",
]

const Home = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product')
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Lỗi gọi API:", err));
  }, []);

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
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };


  return (
    <div>
       <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center w-full">
              <img src={src} alt={`Slide ${index + 1}`} className="rounded-3xl w-full h-auto aspect-3/2 object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

     <NuocHoaUniSexSection products={data} />

    <motion.div className='banner-nuoc-hoa-nam' 
      initial={{ opacity: 0, y: -100 }}  
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.2 }}   >
    <Image className='rounded-3xl w-full h-auto aspect-3/2 object-cover mt-16' src="/image/slide/banner-nuoc-hoa-nam-laluz.jpg" alt="Picture of the author" width={1920} height={1080} />
    </motion.div>

    <NuocHoaNamSection products={data} />


    <motion.div className='banner-nuoc-hoa-nu'
     initial={{ opacity: 0, y: -100 }}  
     whileInView={{ opacity: 1, y: 0 }} 
     transition={{ duration: 1 }} 
     viewport={{ once: false, amount: 0.2 }}   >
    <Image className='rounded-3xl w-full h-auto aspect-3/2 object-cover mt-16' src="/image/slide/banner-nuoc-hoa-nu-laluz.png" alt="Picture of the author" width={1920} height={1080} />
    </motion.div>

      <NuocHoaNuSection products={data} />
      
      <motion.div className="tai-sao-lai-chon-laluz-parfums text-center mt-12"
      initial={{ opacity: 0, y: -100 }}  
      whileInView={{ opacity: 1, y: 0 }} 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.2 }} >
    <h5 className="text-3xl font-bold uppercase hover:text-[#9C8679] duration-200">Tại sao chọn Laluz Parfums? </h5>
    </motion.div>

    <motion.div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-6 text-center mx-auto max-w-4xl">
      {tai_sao_chon_laluz_parfums.map((item, index) => (
        <div key={index} className="flex flex-col items-center lg:-mx-4 mb-6 md:mb-4">
          <img src={item.icons} alt={item.title} className="w-10 h-10 object-contain hover:scale-105" />
          <p className="text-md text-[#9C8679] font-semibold mt-2 max-w-[150px] break-words">{item.title}</p>
        </div>
      ))}
    </motion.div>
      <hr />

      {/* Studio section */}
      <motion.div className="tai-sao-lai-chon-laluz-parfums text-center mt-12"
      initial={{ opacity: 0, y: -100 }}  
      whileInView={{ opacity: 1, y: 0 }} 
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.2 }} >
    <h5 className="text-3xl font-bold uppercase hover:text-[#9C8679] duration-200">Studio </h5>
    </motion.div>

    <div className="w-full max-w-6xl mx-auto py-6 gap-6 text-[#9C8679] font-semibold mt-6">
  <Slider {...settings}>
    {stuDio.map((item, index) => (
      <div key={index} className="relative w-full max-w-xs bg-white p-4 rounded-2xl shadow-lg text-center border">
        <div className="relative group">
          <img src={item.image} alt={item.title}  className="w-36 h-40 mx-auto object-contain transition-transform" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:opacity-100">
            <p className='text-white text-md font-semibold px-2 py-1'>{item.title}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
    <hr />
      <ContentHome />
    </div>
  )
}

export default Home
