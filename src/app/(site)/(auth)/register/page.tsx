"use client";
import React from 'react'
import Link from 'next/link'
import CustomBreadcrumb from '@/app/(site)/components/CustomBreadcrumb/CustomBreadcrumb'

import { toast } from "react-hot-toast";
import axios from 'axios';
import { useState } from 'react';

const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/auth/register`, {
        email,
        password,
        password_confirmation: password,
      });
      toast.success( res.data.message || "Đăng ký tài khoản thành công, vui lòng kiểm tra email!")
  }
  catch (err:any) { 
    if(err.response?.data?.errors) {
      Object.values(err.response.data.errors).forEach((messages: any) => {
        messages.forEach((msg: string) => toast.error(msg));
      });
    }
    else {
    toast.error(err.response?.data?.message || "Đã có lỗi khi đăng ký tài khoản!");
    }
    
  }
}

  
  return (
    <div className='border-t border-gray-300'>
    <CustomBreadcrumb />
    <div className='flex flex-col items-center py-6'>
      <div>
      <h5 className='text-center text-2xl uppercase px-2 py-6 font-semibold hover:text-[#9C8679] cursor-pointer scale-125 duration-200'>đăng ký tài khoản</h5>
      </div>
      <div className='w-full max-w-md'>
      <div className="mb-4">
        <label className='block mb-2 pl-2 text-sm font-bold'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
      </div>
      <div className="mb-6">
        <label className='block mb-2 pl-2 text-sm font-bold'>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
      </div>
      <div className="mb-6">
        <label className='block mb-2 pl-2 text-sm font-bold'>Confirm Password</label>
        <input value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="Password" placeholder="Confirm Password" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
      </div>
      <div className='flex justify-between mb-4'>
        <Link className='text-sm text-[#9C8679]' href={"/login"}>Bạn đã có tài khoản?</Link>
      </div>
      <div>
      <button onClick={handleRegister} className='group relative w-full py-3 text-white bg-[#9C8679] rounded-3xl uppercase hover:text-[#9C8679] overflow-hidden transition duration-300 border border-[#9C8679]'>
      <span className="relative z-10 font-semibold">đăng ký</span>
      <span className="absolute inset-x-0 top-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
    </button>    
    </div>
    </div>
    </div>
   
  </div>
  )
}

export default RegisterPage
