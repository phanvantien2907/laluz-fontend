"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FaCircleUser } from "react-icons/fa6"
import { FaSignOutAlt } from "react-icons/fa"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const ChangePasswordPage = () => {
  const [avatar, setAvatar] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - User Menu */}
        <Card className="md:w-1/3 h-fit">
          <CardHeader className="pb-3">
            <div className="flex flex-col items-center gap-4">
              <div onClick={triggerFileInput} className="relative cursor-pointer group">
                {avatar ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#9C8679]">
                    <Image src={avatar} alt="User avatar" fill className="object-cover"  />
                    </div>
                ) : (
                  <FaCircleUser className="text-6xl text-[#9C8679]" />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-opacity-30 transition-all duration-200">
                  <span className="text-sm">Change Photo</span>
                </div>
              </div>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              <p className="font-semibold text-lg">pvtien297</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3">
              <Link href="/profile" className="text-gray-700 hover:text-[#9C8679] transition-colors py-2 px-4 rounded-lg hover:bg-[#9C8679]/10">
                Thông tin cá nhân
              </Link>
              <Link href="/profile/orders" className="text-gray-700 hover:text-[#9C8679] transition-colors py-2 px-4 rounded-lg hover:bg-[#9C8679]/10">
                Lịch sử đơn hàng
              </Link>
              <Link href="/profile/change-password" className="text-[#9C8679] font-medium py-2 px-4 rounded-lg bg-[#9C8679]/10">
                Thay đổi mật khẩu
              </Link>
              <Button className="group relative mt-4 bg-[#9C8679] hover:bg-[#8B7868] text-white rounded-xl w-full overflow-hidden transition duration-300">
                <span className="relative z-10 flex items-center justify-center group-hover:text-[#9C8679] transition-colors duration-300">
                  <FaSignOutAlt className="mr-2" /> Đăng xuất
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Section - Change Password Form */}
        <Card className="md:w-2/3">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#9C8679]">Đổi mật khẩu</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="grid gap-5">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="font-bold hover:cursor-pointer">Mật khẩu hiện tại</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu hiện tại"
                      className="rounded-full px-6 pr-12 focus:ring-2 focus:ring-[#9C8679]"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#9C8679]"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="font-bold hover:cursor-pointer">Mật khẩu mới</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu mới"
                      className="rounded-full px-6 pr-12 focus:ring-2 focus:ring-[#9C8679]" />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#9C8679]" onClick={() => setShowNewPassword(!showNewPassword)} > {showNewPassword ? <FaEyeSlash /> : <FaEye />}</button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="font-bold hover:cursor-pointer">Xác nhận mật khẩu mới</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Xác nhận mật khẩu mới"
                      className="rounded-full px-6 pr-12 focus:ring-2 focus:ring-[#9C8679]" />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#9C8679]"  onClick={() => setShowConfirmPassword(!showConfirmPassword)} >  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>

              <Button 
              type="submit" className="group relative bg-[#9C8679] hover:bg-[#8B7868] text-white rounded-xl px-8 py-2 mt-4 overflow-hidden transition duration-300 w-full md:w-auto">
              <span className="relative z-10 group-hover:text-[#9C8679] transition-colors duration-300">CẬP NHẬT MẬT KHẨU</span>
              <span className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
            </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ChangePasswordPage