"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Columns3, ImageIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from 'react-hot-toast';
import { createUser } from "@/lib/api";
import { SubmitHandler } from "react-hook-form";
import { UserFormData, useAddNewForm } from '@/hooks/user/useAddNewForm';
import { EyeOff, Eye, Download } from 'lucide-react';

const ExportData = () => {
  const { register, handleSubmit, setValue, watch } = useAddNewForm();
  const [showPassword, setPassword] = useState(false);
  const addUser = createUser;  
  const handleCreate: SubmitHandler<UserFormData> = async (data) => {
    try {
      await addUser(data);
      toast.success("Thêm người dùng thành công!")
      return;
    } catch (err) {
      toast.error("Thêm người dùng thất bại!")
      return;
    }
  }

  return (
    <>
       <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><Download />Export</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleCreate)}>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"> Email</Label>
            <Input id="email" type='email' {...register("email", {required: true})} placeholder='Email' className="col-span-3" />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor="name" className="text-right"> Password</Label>
            <div className='relative col-span-3'>
            <Input id="name" type={showPassword ? "text": "password"} {...register("password", {required: true})} placeholder='Password' className="col-span-3" />
            <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
            onClick={() => setPassword(!showPassword)} > {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </Button>
            </div>
            </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right"> Status </Label>
                <Select onValueChange={(value) => setValue("is_active", value == "1")}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Hoạt động</SelectItem>
                    <SelectItem value="0">Không hoạt động</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
            </div>
            <DialogFooter>
              <Button className='bg-black' type="submit">Save changes</Button>
            </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    </>
  )
}

export default ExportData
