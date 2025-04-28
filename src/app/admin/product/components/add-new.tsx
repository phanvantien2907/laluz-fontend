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
import { UseFileManager,openFileManager } from '@/hooks/useFileManager';
import { ProductFormData, useAddNewForm} from '@/hooks/product/useAddNewForm';
import toast from 'react-hot-toast';
import { createProduct } from "@/lib/api";
import { data } from 'framer-motion/client';
import { SubmitHandler } from "react-hook-form";
import { Alias } from '@/lib/alias';
import { set } from 'date-fns';

const AddNew = () => {
  const { register, handleSubmit, setValue, watch } = useAddNewForm();
  const [imageUrl, setImageUrl] = useState("");
  const [aliasUrl, setAliasUrl] = useState("");
  const addProduct = createProduct;

    UseFileManager((fileUrl: string) => {
    setImageUrl(fileUrl);
    setValue("image", fileUrl);
  })

  // const handleAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const nameValue = e.target.value;
  //   const generatedAlias = Alias(nameValue);
  //   setAliasUrl(generatedAlias);
  //   setValue("alias", generatedAlias);
  // }


  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    try {
      await addProduct(data);
      toast.success("Thêm sản phẩm thành công!")
      return;
    } catch (err) {
      toast.error("Thêm sản phẩm thất bại!")
      return;
    }
  }

  return (
    <>
       <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><Plus />Add new</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right"> Name</Label>
                <Input id="name" {...register("name", {required: true})} placeholder='Tên sản phẩm' className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Alias </Label>
                <Input id="brand" {...register("alias")} placeholder='Alias tự động tạo' className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Brand </Label>
                <Input id="brand" {...register("brand", {required: true})} placeholder='Thương hiệu' className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Price </Label>
                <Input id="brand" {...register("price", {required: true})} placeholder='Giá tiền' className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="scent_radiance" className="text-right"> Scent Radiance </Label>
                <Input id="scent_radiance" {...register("scent_radiance", {required: true})} placeholder='Độ tỏa hương' className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="concentration" className="text-right"> Concentration </Label>
                <Input id="concentration" {...register("concentration", {required: true})} placeholder='Nồng độ' className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="odor_retention" className="text-right"> odor_retention </Label>
                <Input id="odor_retention" {...register("odor_retention", {required: true})} placeholder='Độ lưu mùi' className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="capacity" className="text-right"> Capacity </Label>
                <Input id="capacity" {...register("capacity", {required: true})} placeholder='Dung tích' className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
             <Label htmlFor="image" className="text-right">Image</Label>
            <div className="col-span-3 flex gap-2 items-center">
              <Input id="image"  value={imageUrl} {...register("image", {required: true})}  onChange={e => setImageUrl(e.target.value)}   placeholder="Đường dẫn hình ảnh" className="flex-1"/>
              <Button type="button" variant="outline" onClick={openFileManager}> <ImageIcon className="mr-2 h-4 w-4" /> Browse </Button>
            </div>
            </div>          
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right"> Gender </Label>
                <Select onValueChange={(value) => setValue("gender", value)}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Unisex">Unisex</SelectItem>
                    <SelectItem value="Nam">Nam</SelectItem>
                     <SelectItem value="Nữ">Nữ</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right"> Status </Label>
                <Select onValueChange={(value) => setValue("is_active", value == "1")}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Còn hàng</SelectItem>
                    <SelectItem value="0">Hết hàng</SelectItem>
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

export default AddNew
