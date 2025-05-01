"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEditForm } from "@/hooks/product/useEditForm";
import { ProductFormData } from "@/hooks/product/useAddNewForm";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ViewDialog = ({trigger, productID, defaultValues}: {trigger: React.ReactNode, productID: string, defaultValues: ProductFormData}) => {
const { register, watch } = useEditForm(defaultValues);
  return (
   <>
     <Dialog>
          <DialogTrigger asChild>
            {trigger}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Detail product</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right"> Name</Label>
                <Input id="name" {...register("name", {required: true})} placeholder='Tên sản phẩm' className="col-span-3" readOnly />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Alias </Label>
                <Input id="brand" {...register("alias")} placeholder='Alias tự động tạo' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Brand </Label>
                <Input id="brand" {...register("brand", {required: true})} placeholder='Thương hiệu' className="col-span-3" readOnly />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Price </Label>
                <Input id="brand" {...register("price", {required: true})} placeholder='Giá tiền' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="scent_radiance" className="text-right"> Scent Radiance </Label>
                <Input id="scent_radiance" {...register("scent_radiance", {required: true})} placeholder='Độ tỏa hương' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="concentration" className="text-right"> Concentration </Label>
                <Input id="concentration" {...register("concentration", {required: true})} placeholder='Nồng độ' className="col-span-3" readOnly />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="odor_retention" className="text-right"> odor_retention </Label>
                <Input id="odor_retention" {...register("odor_retention", {required: true})} placeholder='Độ lưu mùi' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="capacity" className="text-right"> Capacity </Label>
                <Input id="capacity" {...register("capacity", {required: true})} placeholder='Dung tích' className="col-span-3" readOnly />
              </div>
             <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">Image</Label>
            <div className="col-span-3 flex gap-2 items-center">
            {watch("image") ? (
            <Image src={watch("image")} alt="Ảnh sản phẩm" width={150} height={150} className="rounded-lg object-cover border"/>
            ) : (
            <span className="text-red-500 italic">Chưa có ảnh</span>
            )}
            </div>
            </div>       
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="gender" className="text-right"> Gender </Label>
                <Input id="gender" {...register("gender", {required: true})} className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="is_active" className="text-right"> Status </Label>
                <Input id="is_active" value={watch("is_active") == true ? "Còn hàng": "Hết hàng"} className="col-span-3" readOnly />
              </div>
            </div>
          </DialogContent>
        </Dialog>
  </>
  );
};

export default ViewDialog;
