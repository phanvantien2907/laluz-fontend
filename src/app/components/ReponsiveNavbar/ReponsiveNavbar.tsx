"use client";
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

const ReponsiveNavbar  = () => {
  return (
    <div className='bg-[#9C8679] text-black p-3 rounded-3xl md:hidden animate-pulse'>
      <div className="relative w-full max-w-full">
  <input
    type="text"
    placeholder="Tìm kiếm sản phẩm của bạn.."
    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
    type="button"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </button>
</div>
    
    <div className='border-b border-gray-300 border-opacity-50 pt-3 pb-2 mt-2 text-xl'>
        <div className='flex gap-3 items-center py-2'>
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
          <Link href="/cart">Giỏ hàng </Link>
        </div>
        <div className='flex gap-3 items-center py-2 border-t border-white'>
        <FaUserCircle/>
        <Link href="/auth/login">Đăng nhập </Link> /
        <Link href="/auth/register">Đăng ký </Link>
        </div>
        <div className='flex gap-3 items-center py-2 border-t border-white'>
        <FaHeart/>
        <Link href="/auth/login">Sản phẩm yêu thích</Link>
        </div>
        <div className='flex gap-3 items-center py-2 border-t border-white'>
        <Link href="/">Trang chủ</Link>
        </div>
        <div className='flex gap-3 items-center py-2 border-t border-white'>
        <Link href="/about-laluz">About về Laluz</Link>
        </div>
        <div className='flex gap-3 items-center py-2 border-t border-white'>
        <Link href="/thuong-hieu">Thương hiệu</Link>
        </div>
        <div className='flex gap-3 items-center py-2 border-t border-white'>
        <Link href="/nuoc-hoa">Nước hoa</Link>
        </div>
    </div>

    </div>
  )
}

export default ReponsiveNavbar