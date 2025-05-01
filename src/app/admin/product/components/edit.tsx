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
import { UseFileManager,openFileManager } from '@/hooks/useFileManager';
import { ImageIcon } from "lucide-react";
import { ProductFormData, useAddNewForm} from '@/hooks/product/useAddNewForm';
import {editProduct } from "@/lib/api";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useEditForm } from "@/hooks/product/useEditForm";

export function EditForm({trigger, productID, defaultValues}: {trigger: React.ReactNode, productID: string, defaultValues: ProductFormData}) {
  const { register, handleSubmit, setValue, watch } = useEditForm(defaultValues);
  const [imageUrl, setImageUrl] = useState(defaultValues.image);
  const product = editProduct;
  
    UseFileManager((fileUrl: string) => {
    setImageUrl(fileUrl);
    setValue("image", fileUrl);
    })

    const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
      try {
        await product(productID,data);
        toast.success("Sửa sản phẩm thành công!")
        return;
      } catch (err) {
        toast.error("Sửa sản phẩm thất bại!")
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
          <SheetTitle>Edit product</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"> Name</Label>
            <Input id="name" {...register("name", {required: true})} placeholder="Tên sản phẩm" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">Brand</Label>
            <Input id="brand" {...register("brand", {required: true})} placeholder="Thương hiệu" className="col-span-3" />
          </div>
        </div>
         <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">Price</Label>
            <Input id="price" {...register("price", {required: true})} placeholder="Giá tiền" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">Scent Radiance</Label>
            <Input id="scent_radiance" {...register("scent_radiance", {required: true})} placeholder="Độ tỏa hương" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="concentration" className="text-right">Concentration</Label>
            <Input id="concentration" {...register("concentration", {required: true})} name="concentration" placeholder="Nồng độ" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="odor_retention" className="text-right">odor_retention</Label>
            <Input id="odor_retention" {...register("concentration", {required: true})} placeholder="Độ lưu mùi" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="capacity" className="text-right">Capacity</Label>
            <Input id="capacity" {...register("capacity", {required: true})} placeholder="Dung tích" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
          <Label htmlFor="image" className="text-right">Image</Label>
          <div className="col-span-3 flex gap-2 items-center">
          <Input id="image" {...register("image", {required: true})}  onChange={e => setImageUrl(e.target.value)}   placeholder="Đường dẫn hình ảnh" className="flex-1"/>
          <Button type="button" variant="outline" onClick={openFileManager}> <ImageIcon className="mr-2 h-4 w-4" /> Browse </Button>
           </div>
          </div>
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
          <Label htmlFor="role" className="text-right"> Gender </Label>
          <Select value={watch("gender")} onValueChange={(value) => setValue("gender", value)}>
          <SelectTrigger className="w-[250px]">
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
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
          <Label htmlFor="role" className="text-right"> Status </Label>
          <Select value={watch("is_active") ? "1": "0"} onValueChange={(value) => setValue("is_active", value == "1")}>
          <SelectTrigger className="w-[250px]">
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
