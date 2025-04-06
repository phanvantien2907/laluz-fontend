"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { vi } from 'date-fns/locale'
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { FaCircleUser } from "react-icons/fa6"
import { FaSignOutAlt } from "react-icons/fa"
import { Calendar } from "@/components/ui/calendar";
import { useAuth } from '../../../../../context/AuthContext'
import { AlertDialog, AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog";


const ProfilePage = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { logout } = useAuth();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - User Menu */}
        <Card className="md:w-1/3 h-fit">
          <CardHeader className="pb-3">
            <div className="flex flex-col items-center gap-4">
              <div
                onClick={triggerFileInput}
                className="relative cursor-pointer group"
              >
                {avatar ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#9C8679]">
                    <Image
                      src={avatar}
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <FaCircleUser className="text-6xl text-[#9C8679]" />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-opacity-30 transition-all duration-200">
                  <span className="text-sm">Change Photo</span>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <p className="font-semibold text-lg">pvtien297</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3">
              <Link
                href="/profile"
                className="text-gray-700 hover:text-[#9C8679] transition-colors py-2 px-4 rounded-lg hover:bg-[#9C8679]/10"
              >
                Thông tin sản phẩm
              </Link>
              <Link
                href="/profile/orders"
                className="text-gray-700 hover:text-[#9C8679] transition-colors py-2 px-4 rounded-lg hover:bg-[#9C8679]/10"
              >
                Lịch sử đơn hàng
              </Link>
              <Link
                href="/profile/change-password"
                className="text-gray-700 hover:text-[#9C8679] transition-colors py-2 px-4 rounded-lg hover:bg-[#9C8679]/10"
              >
                {" "}
                Thay đổi mật khẩu
              </Link>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="group relative mt-4 bg-[#9C8679] hover:bg-[#8B7868] text-white rounded-xl w-full overflow-hidden transition duration-300">
                    <span className="relative z-10 flex items-center justify-center group-hover:text-[#9C8679] transition-colors duration-300">
                      <FaSignOutAlt className="mr-2" /> Đăng xuất
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle> Bạn chắc chắn muốn đăng xuất?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Hủy</AlertDialogCancel>
                    <AlertDialogAction onClick={logout}>Xác nhận</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Right Section - Profile Form */}
        <Card className="md:w-2/3">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#9C8679]">
              Thông tin cá nhân
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="grid gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullname"
                    className="font-bold hover:cursor-pointer"
                  >
                    Họ và tên
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="Nhập họ và tên của bạn"
                    className="rounded-full px-6 focus:ring-2 focus:ring-[#9C8679] hover:cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="birthdate"
                    className="font-bold hover:cursor-pointer"
                  >
                    Ngày sinh
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full rounded-full px-6 justify-start text-left font-normal"
                      >
                        {date ? (
                          format(date, "dd/MM/yyyy", { locale: vi })
                        ) : (
                          <span className="text-gray-500">Chọn ngày sinh</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-bold hover:cursor-pointer"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    className="rounded-full px-6 focus:ring-2 focus:ring-[#9C8679] hover:cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-bold hover:cursor-pointer"
                  >
                    Số điện thoại
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="rounded-full px-6 focus:ring-2 focus:ring-[#9C8679] hover:cursor-pointer"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="group relative bg-[#9C8679] hover:bg-[#8B7868] text-white w-full md:w-auto block rounded-xl px-8 overflow-hidden transition duration-300"
              >
                <span className="relative z-10 group-hover:text-[#9C8679] transition-colors duration-300">
                  THAY ĐỔI
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage