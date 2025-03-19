"use client";
import React from 'react'
import { useState } from 'react';
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // hàm xử lí login
  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("email", email);
      toast.success("Đăng nhập thành công!")
      setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
    catch (err:any) { 
      toast.error(err.response?.data?.message || "Tài khoản hoặc mật khẩu không đúng!");
    }
  }


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
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
        </div>
        <div className="mb-6">
          <label className='block mb-2 pl-2 text-sm font-bold'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"/>
        </div>
        <div className='flex justify-between mb-4'>
          <Link className='text-sm text-[#9C8679]' href={"/forget-password"}>Quên mật khẩu?</Link>
          <Link className='text-sm text-[#9C8679]' href={"/register"}>Đăng ký tài khoản tại đây</Link>
        </div>
        <div>
        <button onClick={handleLogin} className='group relative w-full py-3 text-white bg-[#9C8679] rounded-3xl uppercase hover:text-[#9C8679] overflow-hidden transition duration-300 border border-[#9C8679]'>
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