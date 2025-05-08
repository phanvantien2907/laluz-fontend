"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {editUser } from "@/lib/api";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useEditForm, UserFormData } from "@/hooks/user/useEditForm";
import { EyeOff, Eye } from "lucide-react";

export function EditForm({trigger, userID, defaultValues}: {trigger: React.ReactNode, userID: string, defaultValues: UserFormData}) {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { register, handleSubmit, setValue, watch } = useEditForm(defaultValues);
  const user = editUser;

    const handleEdit: SubmitHandler<UserFormData> = async (data) => {
      try {
        await user(userID,data);
        toast.success("Sửa người dùng thành công!")
        return;
      } catch (err) {
        toast.error("Sửa người dùng thất bại!")
        return;
      }
    }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit user</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(handleEdit)}>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" {...register("name", {required: true})} placeholder="Name" className="col-span-3" />
        </div>
    
        <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right"> Email</Label>
        <Input id="Email" {...register("email", {required: true})} placeholder="Email" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="new_password" className="text-right">New <div className="mt-1">Password</div></Label>
        <div className="relative col-span-3">
        <Input id="password" type={showNewPassword ? "text": "password"} {...register("password", {required: false})} placeholder="New Password" className="col-span-3" />
        <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
        onClick={() => setShowNewPassword(!showNewPassword)} > {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </Button>
        </div>
        </div>
        </div>

          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="role" className="text-right"> Gender </Label>
          <Select value={watch("role")} onValueChange={(value) => setValue("role", value)}>
          <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Quyền tài khoản" />
          </SelectTrigger>
           <SelectContent>
          <SelectGroup>
          <SelectItem value="admin">Admin</SelectItem>
           <SelectItem value="manage">Manager</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectGroup>
          </SelectContent>
          </Select>
          </div>
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
          <Label htmlFor="role" className="text-right"> Status </Label>
          <Select value={watch("is_active") ? "1": "0"} onValueChange={(value) => setValue("is_active", value == "1")}>
          <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Trạng thái" />
           </SelectTrigger>
          <SelectContent>
          <SelectGroup>
           <SelectItem value="1">Đang hoạt động</SelectItem>
           <SelectItem value="0">Ngừng hoạt động</SelectItem>
          </SelectGroup>
          </SelectContent>
          </Select>
           </div>
         <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-black mt-4" type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
