"use client";
import React from 'react'
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb'
import Link from 'next/link'


const LoginPage = () => {
  return (
    <div className='border-t border-gray-300'>
      <CustomBreadcrumb />
      <div className='flex flex-col items-center py-6'>
        <div>
        <h5 className='text-center text-2xl uppercase px-2 py-6 font-semibold hover:text-[#9C8679] cursor-pointer scale-125 duration-200'>đăng nhập</h5>
        </div>
      <div className='w-full max-w-md'>
        <div className="mb-4">
          <label className='block mb-2 pl-2 text-sm font-bold'>Email</label>
          <input type="text" placeholder="Email" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
        </div>
        <div className="mb-6">
          <label className='block mb-2 pl-2 text-sm font-bold'>Password</label>
          <input type="password" placeholder="Password" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
        </div>
        <div className='flex justify-between mb-4'>
          <Link className='text-sm text-[#9C8679]' href={"/forget-password"}>Quên mật khẩu?</Link>
          <Link className='text-sm text-[#9C8679]' href={"/register"}>Đăng ký tài khoản tại đây</Link>
        </div>
        <div>
        <button className='group relative w-full py-3 text-white bg-[#9C8679] rounded-3xl uppercase hover:text-[#9C8679] overflow-hidden transition duration-300 border border-[#9C8679]'>
        <span className="relative z-10 font-semibold">đăng nhập</span>
        <span className="absolute inset-x-0 top-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
      </button>    
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default LoginPage