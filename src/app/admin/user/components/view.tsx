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
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { UserFormData } from "@/hooks/user/useAddNewForm";
import { useEditForm } from "@/hooks/user/useEditForm";

const ViewDialog = ({trigger, userID, defaultValues}: {trigger: React.ReactNode, userID: string, defaultValues: UserFormData}) => {
const { register, watch } = useEditForm(defaultValues);
  return (
   <>
     <Dialog>
          <DialogTrigger asChild>
            {trigger}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Detail user</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right"> Name</Label>
                <Input id="name" {...register("name", {required: true})} placeholder='Name' className="col-span-3" readOnly />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Email </Label>
                <Input id="brand" {...register("email")} placeholder='Email' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right"> Role </Label>
                <Input id="brand" {...register("role", {required: true})} placeholder='Quyền tài khoản' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right"> Email verified </Label>
                <Input id="email_verified" value={watch("email_verified_at") ? new Date(watch("email_verified_at") as Date).toLocaleDateString("vi-VN") : "Chưa xác minh"} placeholder='Xác minh email' className="col-span-3" readOnly />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="is_active" className="text-right"> Status </Label>
                <Input id="is_active" value={watch("is_active") == true ? "Đang hoạt động": "Ngừng hoạt động"} className="col-span-3" readOnly />
              </div>
            </div>
          </DialogContent>
        </Dialog>
  </>
  );
};

export default ViewDialog;
