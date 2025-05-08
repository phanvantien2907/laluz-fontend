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
import {editOrder } from "@/lib/api";
import { SubmitHandler, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { OrderFormData } from "@/hooks/order/orderEditForm";
import { orderEditForm } from "@/hooks/order/orderEditForm";

export function EditForm({trigger, orderID, defaultValues}: {trigger: React.ReactNode, orderID: string, defaultValues: OrderFormData}) {
  const { register, handleSubmit, setValue, watch, control } = orderEditForm(defaultValues);
  const order = editOrder;
  
    const onSubmit: SubmitHandler<OrderFormData> = async (data) => {
      try {
        await order(orderID,data);
        toast.success("Sửa đơn hàng thành công!")
        return;
      } catch (err) {
        toast.error("Sửa đơn hàng thất bại!")
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
          <SheetTitle>Edit order {watch('order_code')} </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"> Order code</Label>
            <Input id="name" {...register("order_code", {required: true})} placeholder="Mã đơn hàng" className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customer" className="text-right">Customer</Label>
            <Input  id="customer"  defaultValue={`${defaultValues.customer.first_name} ${defaultValues.customer.last_name}`}
            onChange={(e) => {
              const fullName = e.target.value;
              const parts = fullName.split(' ');
              const firstName = parts[0] || '';
              const lastName = parts.slice(1).join(' ') || '';
              setValue("customer.first_name", firstName);
              setValue("customer.last_name", lastName); }}  placeholder="Tên khách hàng"  className="col-span-3" />
            </div>
            </div>
         <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="street" className="text-right">Phone</Label>
            <Input id="street" {...register("customer.phone", {required: true})} placeholder="Số điện thoại" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="street" className="text-right">Email</Label>
            <Input id="street" {...register("customer.email", {required: true})} placeholder="Email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="street" className="text-right">Address</Label>
            <Input id="street" {...register("customer.address.street", {required: true})} placeholder="Địa chỉ" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
          <Label htmlFor="role" className="text-right"> Payment <div className="m-1">method</div> </Label>
          <Select value={watch("payment.method")} onValueChange={(value) => setValue("payment.method", value)}>
          <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Cách thanh toán" />
          </SelectTrigger>
           <SelectContent>
          <SelectGroup>
          <SelectItem value="COD">COD</SelectItem>
        <SelectItem value="bankTransfer">Chuyển khoản ngân hàng</SelectItem>
        <SelectItem value="creditCard">Thẻ tín dụng</SelectItem>
         <SelectItem value="eWallet">Ví điện tử</SelectItem>
          </SelectGroup>
          </SelectContent>
          </Select>
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="customer" className="text-right">Product</Label>
            <Input id="customer" {...register("products.0.name", {required: true})}  placeholder="Tên sản phẩm" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">Quantity</Label>
            <Input id="quantity" type="number" {...register("products.0.quantity", {required: true})} placeholder="Số lượng" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 mt-4 items-center gap-4">
            <Label htmlFor="capacity" className="text-right">Total</Label>
            <Input id="capacity" {...register("products.0.total", {required: true})}  placeholder="Tổng tiền" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 mt-4 items-center gap-4">
          <Label htmlFor="payment_status" className="text-right"> Payment <div className="mt-1"><p>status</p></div> </Label>
          <Select value={watch("payment.status")} onValueChange={(value) => setValue("payment.status", value)}>
          <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Trạng thái thanh toán" />
          </SelectTrigger>
           <SelectContent>
          <SelectGroup>
          <SelectItem value="pending">Chưa thanh toán</SelectItem>
         <SelectItem value="completed">Đã thanh toán</SelectItem>
         <SelectItem value="failed">Thanh toán thất bại</SelectItem>
         <SelectItem value="refunded">Đã hoàn tiền</SelectItem>
          </SelectGroup>
          </SelectContent>
          </Select>
          </div>
         <div className="grid grid-cols-4 mt-4 items-center gap-4">
        <Label htmlFor="order_status" className="text-right">Order <div className="mt-1"><p>status</p></div></Label>
        <Select value={watch("order_status")} onValueChange={(value) => setValue("order_status", value)}>
         <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Trạng thái đơn hàng" />
        </SelectTrigger>
         <SelectContent>
        <SelectGroup>
        <SelectItem value="pending">Chờ xử lý</SelectItem>
        <SelectItem value="processing">Đang xử lý</SelectItem>
        <SelectItem value="shipped">Đã giao vận chuyển</SelectItem>
        <SelectItem value="delivered">Đã giao hàng</SelectItem>
        <SelectItem value="cancelled">Đã hủy</SelectItem>
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
