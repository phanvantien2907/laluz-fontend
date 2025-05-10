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
              <DialogTitle>Product Detail {watch('name')} </DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right"> Product ID: </Label>
                <p>{defaultValues.id}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right"> Name: </Label>
              <p className="whitespace-nowrap">{defaultValues.name}</p>
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Alias: </Label>
                <p className="whitespace-nowrap">{defaultValues.alias}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Brand: </Label>
                <p className="whitespace-nowrap">{defaultValues.brand}</p>
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Price: </Label>
                <p className="whitespace-nowrap">{defaultValues.price} <sup>đ</sup></p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="scent_radiance" className="text-right"> Scent <div className="mt-1"><p>Radiance:</p></div> </Label>
                <p className="whitespace-nowrap">{defaultValues.scent_radiance}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="concentration" className="text-right"> Concentration: </Label>
                <p className="whitespace-nowrap">{defaultValues.concentration}</p>
              </div>
               <div className="grid grid-cols-4 items-center gap-8">
                <Label htmlFor="odor_retention" className="text-right"> Odor <div className="mt-1"><p>Retention:</p></div> </Label>
                <p className="whitespace-nowrap">{defaultValues.odor_retention}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="capacity" className="text-right"> Capacity: </Label>
                <p className="whitespace-nowrap">{defaultValues.capacity}</p>
              </div>
             <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">Image:</Label>
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
                <p className="whitespace-nowrap">{defaultValues.gender}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="is_active" className="text-right"> Status </Label>
                <p>{defaultValues.is_active ? "Còn hàng" : "Hết hàng"}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
  </>
  );
};

export default ViewDialog;
