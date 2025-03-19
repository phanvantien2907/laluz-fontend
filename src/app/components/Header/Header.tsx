"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { dataMenu } from '@/app/mockdata';
import { FaBars } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { useState, useEffect } from 'react';
import ReponsiveNavbar from '../ReponsiveNavbar/ReponsiveNavbar';
import { FaTimes } from "react-icons/fa";
// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import axios from "axios";
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {AlertDialog, AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription, AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import AccountPage from '@/app/(auth)/account/page';

interface menuItem {
  id: string;
  name: string;
  url: string;
}

const  Header = () => {

  const [menuData, setMenuData] = useState<menuItem[]>([]);
  const [open, setOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogout = () =>  {
    localStorage.removeItem("token");
    setIsLogin(false);
    router.push("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
    if(!token) {
      router.push("/login")
    }
    
    const storedEmail = localStorage.getItem("email") || "";
    setEmail(storedEmail);

    const convertUser = storedEmail.split("@")[0].toLowerCase();
    setUsername(convertUser);

    axios.get('http://127.0.0.1:8000/api/menu')
    .then((res) => setMenuData(res.data.data))
    .catch((err) => console.error("Lỗi gọi API:", err));
  }, []);
  

  return (

    <div className=''>
     <div className='flex px-2 py-4 items-center gap-10 justify-center border-b border-gray-300'>
     <div className='group'>
     {
        open ? <FaTimes className='block md:hidden text-xl hover:duration-200 transform transition-transform group-hover:-translate-y-1 cursor-pointer' onClick={() => setOpen(!open)} /> :
         <FaBars className='block md:hidden text-xl hover:duration-200 transform transition-transform group-hover:-translate-y-1 cursor-pointer' onClick={() => setOpen(!open)} />
     }
     </div>
     <Image src="/image/cropped-logo-laluz-new.jpg" alt='logo' width={100} height={100} />
     <div className="relative w-full max-w-md hidden md:block">
  <input
    type="text"
    placeholder="Tìm kiếm sản phẩm của bạn.."
    className="w-full px-4 py-2 border  border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
  />
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#9C8679] duration-200"
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
    <div className='flex gap-5 text-2xl'>
      <div className="relative group">
      <Link href="/heart"><FaHeart className='hover:text-[#9C8679] duration-200 transform transition-transform group-hover:-translate-y-1' /></Link>
      </div>
      <div className="relative group text-2xl block md:hidden ">
      <Link href="/search"><MdSearch className=' hover:text-[#9C8679] duration-200 transform transition-transform group-hover:-translate-y-1' /></Link>
      </div>
    <div className="relative group">
    <FaShoppingCart className="transform transition-transform group-hover:-translate-y-1" />
    <span className="absolute transform transition-transform group-hover:-translate-y-1 -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
  </div>
      
    <div className="relative group">
    {isLogin ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaUserCircle className="text-2xl md:block hover:text-[#9C8679] duration-200 transform transition-transform group-hover:-translate-y-1 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className='cursor-pointer'>{username ? `Xin chào, ${username}` : "Xin chào, Khách"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'><Link href={'/account'}>Tài khoản của tôi</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href={'/account/orders'}>Lịch sử đơn hàng</Link></DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'><Link href={'/account/change-password'}>Thay đổi mật khẩu</Link></DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <AlertDialog>
              <AlertDialogTrigger asChild>
               <span className='cursor-pointer'>Đăng xuất</span>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Bạn chắc chắn muốn đăng xuất ?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
             </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">
          <FaUserCircle className="text-2xl hidden md:block hover:text-[#9C8679] duration-200 transform transition-transform group-hover:-translate-y-1" />
        </Link>
      )}
    </div>

    </div>
     </div>

    {/* Menu section */}
    <div className='hidden md:flex py-2 px-4 mt-3 items-center font-bold justify-center gap-10'>
    {menuData.map((item) => (
      <Link className='hover:text-[#9C8679] duration-200' href={item.url} key={item.id}>{item.name}</Link>
    )
  )}
    </div>
    {open && <ReponsiveNavbar />}
    </div>
  )
}

export default Header