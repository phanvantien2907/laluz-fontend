"use client";
import React from 'react'
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb'

const forgetPassword = () => {
  return (
    <div className='border-t border-gray-300 '>
      <CustomBreadcrumb />
      <div className='flex flex-col items-center py-6'>
      <div className='w-full max-w-md'>
        <h5 className='text-center text-2xl uppercase px-2 py-6 font-semibold hover:text-[#9C8679] cursor-pointer scale-125 duration-200'>đặt lại mật khẩu</h5>
        <div className="mb-6">
          <label className='block mb-2 pl-2 text-sm font-bold'>Enter Email</label>
          <input type="text" placeholder="Email" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
        </div>
        <div>
          <button className='group relative w-full py-3 text-white bg-[#9C8679] rounded-3xl uppercase hover:text-[#9C8679] overflow-hidden transition duration-300 border border-[#9C8679]'>
            <span className="relative z-10 font-semibold">Gửi</span>
            <span className="absolute inset-x-0 top-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
          </button>    
        </div>
      </div>
      </div>
    </div>
  )
}

export default forgetPassword