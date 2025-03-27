"use client";
import React, { ReactNode } from 'react';
import { useParams } from 'next/navigation';
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb';
import { dataNuocHoaNam } from '@/app/mockdata';
import Image from 'next/image';
import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import ButtonSetQuantity from '@/app/components/ButtonSetQuantity/ButtonSetQuantity';
import RelatedProductsSection from '@/app/components/RelatedProductsSection/RelatedProductsSection';
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: {
    category: string;
    slug: string;
  };
}

interface ProductInfoItem {
  icon: string;
  text: string;
}

interface BenefitItem {
  icon: string;
  text: string;
}

const ProductPage: React.FC<ProductPageProps> = () => {  
  const resolvedParams = useParams<{ category: string; slug: string }>();
  const product = dataNuocHoaNam.find((p) => p.alias === resolvedParams .slug);
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Lỗi gọi API:", err));
  }, []);

  const productInfoItems: ProductInfoItem[] = [
    { icon: "/image/icon/ic-info-1.jpg", text: "Thương hiệu: Gritt" },
    { icon: "/image/icon/ic-info-2.jpg", text: "Nồng độ: Eau De Parfum" },
    { icon: "/image/icon/ic-info-3.jpg", text: "Độ lưu mùi: 6-5h" },
    { icon: "/image/icon/ic-info-4.jpg", text: "Độ tỏa hương: Vừa phải" },
    { icon: "/image/icon/ic-info-5.jpg", text: "Giới tính: Unisex" }
  ];
  
  const benefitItems: BenefitItem[] = [
    { icon: "/image/icon/ic-benefit-1.jpg", text: "Cam kết sản phẩm chính hãng 100% (đền 200% giá trị sản phẩm nếu phát hiện hàng giả)" },
    { icon: "/image/icon/ic-benefit-2-1.jpg", text: "Chính sách đổi hàng và tích điểm thành viên" },
    { icon: "/image/icon/ic-benefit-3-1.jpg", text: "Tư vấn & hỗ trợ gói quà miễn phí cho khách hàng" },
    { icon: "/image/icon/ic-benefit-4-1.jpg", text: "Miễn phí giao hàng cho hóa đơn từ 1 triệu" }
  ];
  
  return (
    <div className='bg-gray-50'>
      <div className='border-t border-gray-200'>
        <CustomBreadcrumb />
        <div className='container mx-auto px-4 py-8 max-w-7xl'>
          {/* Product details section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Product image */}
            <div className='w-full lg:w-1/2'>
  <div className='bg-white rounded-2xl p-6 shadow-sm'>
    <div className='relative h-[500px] w-full overflow-hidden group'>
      <Image 
        src={dataNuocHoaNam[0].image} 
        layout='fill' 
        objectFit='contain' 
        alt='Product image'
        className='transition-transform duration-300 group-hover:scale-150'
      />
    </div>
  </div>
</div>
            
            {/* Product information */}
            <div className='w-full lg:w-1/2'>
              <div className='bg-white rounded-2xl p-8 shadow-sm h-full'>
                <h1 className='text-3xl font-bold text-gray-800 mb-3'>{dataNuocHoaNam[0].name}</h1>
                
                <div className='flex items-center gap-2 mb-3'>
                  <div className='flex text-amber-400'>
                    {[...Array(5)].map((_, i: number) => (
                      <MdStarRate key={i} className="text-xl" />
                    ))}
                  </div>
                  <p className='text-gray-500 text-sm'>(0 đánh giá)</p>
                </div>
                
                <div className='flex items-center gap-2 mb-6'>
                  <IoIosHeartEmpty className="text-xl text-gray-600" />
                  <Link className='text-gray-600 hover:text-[#9C8679] duration-200 cursor-pointer' href='/yeu-thich'>
                    Thêm vào yêu thích
                  </Link>
                </div>
                
                <div className='mb-6'>
                  <p className='text-3xl font-bold text-red-500'>{dataNuocHoaNam[0].price}</p>
                </div>
                
                <div className='mb-6'>
                  <p className='text-gray-700 font-medium mb-2'>Dung tích</p>
                  <div className='flex gap-3'>
                    <button 
                      type="button"
                      className='px-4 py-2 border-2 border-[#9C8679] text-[#9C8679] font-medium rounded-lg hover:bg-[#9C8679] hover:text-white transition-colors duration-200'
                    >
                      50ML
                    </button>
                    <button 
                      type="button"
                      className='px-4 py-2 border-2 border-gray-300 text-gray-500 font-medium rounded-lg hover:border-[#9C8679] hover:text-[#9C8679] transition-colors duration-200'
                    >
                      100ML
                    </button>
                  </div>
                </div>
                
                <div className='mb-6'>
                  <p className='text-gray-700 font-medium mb-2'>Số lượng</p>
                  <ButtonSetQuantity />
                </div>
                
                <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                  <button 
                    type="button"
                    className='bg-[#9C8679] text-white px-6 py-3 rounded-xl font-semibold flex-1 hover:bg-[#8a7569] transition-colors duration-200 flex items-center justify-center gap-2'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                    </svg>
                    Thêm vào giỏ hàng
                  </button>
                  <button 
                    type="button"
                    className='bg-[#C96F3B] text-white px-6 py-3 rounded-xl font-semibold flex-1 hover:bg-[#b65f2f] transition-colors duration-200 flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Mua ngay
                  </button>
                </div>
                
                <div className='flex items-center gap-3 bg-red-50 p-4 rounded-xl'>
                  <div className='bg-red-100 p-2 rounded-full'>
                    <FaPhoneAlt className="text-red-500" />
                  </div>
                  <div>
                    <p className='text-red-500 text-sm font-medium'>HOTLINE TƯ VẤN</p>
                    <p className='text-red-600 font-bold'>0941 141 777</p>
                  </div>
                  <p className='text-gray-500 text-sm ml-auto'>(9:00 - 22:00)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product info cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Product details */}
            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Thông tin sản phẩm</h3>
              
              {productInfoItems.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 py-4 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                  <div className='bg-gray-100 p-1 rounded-full'>
                    <Image src={item.icon} width={30} height={30} alt={`icon ${index + 1}`} />
                  </div>
                  <p className='text-gray-700'>{item.text}</p>
                </div>
              ))}
            </div>
            
            {/* Description */}
            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Mô tả sản phẩm</h3>
              <p className='text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim qui, ducimus eius molestiae omnis ratione ea, 
                vel reprehenderit veritatis laudantium iusto accusantium quisquam rerum eaque eos unde dolorum. Laudantium, nostrum.
              </p>
              
              <h4 className='text-lg font-semibold text-gray-800 mt-6 mb-2'>Sử dụng và bảo quản</h4>
              <p className='text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellat laudantium consequuntur eaque, 
                maiores blanditiis quia eos pariatur aspernatur non quos facilis suscipit vero commodi asperiores enim iste, quo perspiciatis?
              </p>
            </div>
            
            {/* Shipping and returns */}
            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Vận chuyển và đổi trả</h3>
              <p className='text-gray-600 leading-relaxed mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos expedita tenetur voluptas enim eius ad quaerat 
                ea perspiciatis eligendi! Iusto nostrum dolorem eligendi optio. Mollitia amet nemo quo rem incidunt.
              </p>
              
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Quyền lợi khách hàng tại Laluz</h3>
              
              {benefitItems.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 py-3 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                  <div className='bg-gray-100 p-1 rounded-full flex-shrink-0'>
                    <Image src={item.icon} width={24} height={24} alt={`benefit icon ${index + 1}`} />
                  </div>
                  <p className='text-gray-700 text-sm'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related products section */}
         <RelatedProductsSection products={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;