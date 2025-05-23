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
              <DialogTitle>User Detail {watch('email')} </DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right"> Name: </Label>
                <p className="whitespace-nowrap">{defaultValues.name ? defaultValues.name : "Chưa cập nhật"}</p>
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Email: </Label>
                <p>{defaultValues.email}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right"> Role </Label>
                <p>{defaultValues.role}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right whitespace-nowrap"> Email verified: </Label>
                <p>{defaultValues.email_verified_at ? new Date(watch("email_verified_at") as Date).toLocaleDateString("vi-VN") : "Chưa xác minh"}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="is_active" className="text-right"> Status </Label>
               <p className="whitespace-nowrap">{defaultValues.is_active ? "Đang hoạt động" : "Đã khóa"}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
  </>
  );
};

export default ViewDialog;
