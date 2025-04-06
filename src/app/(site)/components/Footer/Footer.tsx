"use client";
import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { MdHome, MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='border-t border-gray-200 flex flex-wrap justify-center gap-20 items-start px-6 py-8'>
      <div className="content-1">
        <h5 className='uppercase font-bold hover:text-[#9C8679] duration-200 cursor-pointer mb-4'>Đăng ký nhận quà ưu đãi</h5>
        <div className="relative w-full max-w-md mb-4">
          <input type="text" placeholder="Địa chỉ email của bạn" 
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-[#9C8679] hover:bg-[#7a6f64] duration-200 px-4 py-1 rounded-full"type="button">Gửi</button>
        </div>
        <p className='text-black uppercase hover:text-[#9C8679] duration-200 cursor-pointer mb-4'>
          CẬP NHẬT NHỮNG ƯU ĐÃI MỚI NHẤT CỦA LALUZ PARFUMS
        </p>  
        <div className='flex gap-5'>
      <div className='group relative'>
        <FaFacebook className='text-2xl hover:text-blue-600 duration-200 cursor-pointer transform transition-transform group-hover:-translate-y-1' />
        <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none'>Facebook</div>
      </div>
      <div className='group relative'>
        <IoLogoTiktok className='text-2xl hover:text-black duration-200 cursor-pointer transform transition-transform group-hover:-translate-y-1' />
        <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none'>TikTok</div>
      </div>
      <div className='group relative'>
        <FaInstagram className='text-2xl hover:text-[#E4405F] duration-200 cursor-pointer transform transition-transform group-hover:-translate-y-1' />
        <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#E4405F] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none'>Instagram</div>
      </div>
      <div className='group relative'>
        <FaTwitter className='text-2xl hover:text-blue-500   duration-200 cursor-pointer transform transition-transform group-hover:-translate-y-1' />
        <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none'>Twitter</div>
      </div>
    </div>
      </div>

      <div className="content-2">
        <h5 className='uppercase font-bold hover:text-[#9C8679] duration-200 cursor-pointer mb-4'>Về chúng tôi</h5>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Trang chủ</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Sản phẩm</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Blog</p>
      </div>

      <div className="content-3">
        <h5 className='uppercase font-bold hover:text-[#9C8679] duration-200 cursor-pointer mb-4'>Dịch vụ khách hàng</h5>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Chính sách kiểm hàng</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Chính sách vận chuyển và giao hàng</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Chính sách xử lí khiếu nại</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Chính sách thanh toán</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Chính sách bảo hành</p>
        <p className='hover:text-[#9C8679] duration-200 cursor-pointer mb-2'>Chính sách bảo mật thông tin</p>
      </div>

      <div className="content-4">
        <h5 className='uppercase font-bold hover:text-[#9C8679] duration-200 cursor-pointer mb-4'>Hệ thống cửa hàng</h5>
        <div className='flex items-center mb-2'>
          <MdHome className='text-2xl mr-2 hover:text-[#9C8679] duration-200 cursor-pointer' /> 
          <p className='hover:text-[#9C8679] duration-200 cursor-pointer'>285 Phố Huế, Hai Bà Trưng, Hà Nội</p>
        </div>
        <div className='flex items-center mb-2'>
          <FaPhoneSquareAlt className='text-2xl mr-2 hover:text-[#9C8679] duration-200 cursor-pointer' /> 
          <p className='hover:text-[#9C8679] duration-200 cursor-pointer'>094 141 7777</p>
        </div>
        <div className='flex items-center mb-2'>
          <MdEmail className='text-2xl mr-2 hover:text-[#9C8679] duration-200 cursor-pointer' />
          <p className='hover:text-[#9C8679] duration-200 cursor-pointer'>Info@laluz.vn</p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;