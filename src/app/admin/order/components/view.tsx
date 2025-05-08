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
import React from "react";
import { Label } from "@/components/ui/label";
import { orderEditForm } from "@/hooks/order/orderEditForm";
import { OrderFormData } from "@/hooks/order/orderForm";
import { OrderStatus } from "@/lib/orderStatus";

const ViewDialog = ({trigger, orderID, defaultValues}: {trigger: React.ReactNode, orderID: string, defaultValues: OrderFormData}) => {
const { watch } = orderEditForm(defaultValues);
  return (
   <>
     <Dialog>
          <DialogTrigger asChild>
            {trigger}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Order detail {watch('order_code')} </DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Order ID: </Label>
                <p>{defaultValues.id}</p>
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Order Code: </Label>
                <p>{defaultValues.order_code}</p>
              </div>
              {defaultValues.order_status == 'delivered' && (
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">Tracking <div className="mt-1"><p>Number:</p></div></Label>
                <p>{defaultValues.shipping.tracking_number}</p>
              </div>
              )}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right"> Name: </Label>
                <div className="flex flex-col col-span-3">
                {defaultValues.customer.first_name} {defaultValues.customer.last_name}
                </div>
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Phone: </Label>
                <p>{defaultValues.customer.phone}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Email: </Label>
                <p>{defaultValues.customer.email}</p>
              </div>
              {defaultValues.customer.company && (
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right"> Company: </Label>
              <p>{defaultValues.customer.company}</p>
              </div>
              )} 
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right"> Address: </Label>
                <div className="flex flex-col col-span-3">
                {defaultValues.customer.address.street}, {defaultValues.customer.address.city}, {defaultValues.customer.address.country}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right"> Zip code: </Label>
              <p className="text-left">{defaultValues.customer.address.zipcode}</p>
              </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right"> Payment: </Label>
              <p>{defaultValues.payment.method}</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right"> Product: </Label>
              <div className="col-span-3 max-h-[200px] overflow-y-auto pr-1 space-y-3">
              {defaultValues.products.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center">
              <p className="font-medium">{product.name}</p>
              <span className="text-sm text-gray-500">#{index + 1}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <p>Brand: <span className="font-medium">{product.brand}</span></p>
              <p>Quantity: <span className="font-medium">{product.quantity}</span></p>
                <p>Total: <span className="font-medium">{product.total.replace(/\./g, ',')}</span></p>
              </div>
              </div>))}
              </div>
            </div>
                {defaultValues.order_status == 'delivered' && (
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fee" className="text-right">Fee:</Label>
                <p>{defaultValues.shipping.fee.toLocaleString('en-US')} <sup className="font-semibold">đ</sup> </p>
              </div>
              )}
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right"> Total: </Label>
              <p className="flex items-baseline gap-1">{defaultValues.products.reduce((total, product) => {
              const productTotal = parseFloat(product.total.replace(/[\.,]/g, ''));
              return total + productTotal;}, 0)
              .toLocaleString('en-US')}  <sup className="font-semibold">đ</sup> </p>
              </div>
              {defaultValues.note && (
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right"> Note: </Label>
              <p>{defaultValues.note}</p>
              </div>
              )} 
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right"> Status: </Label>
              <OrderStatus status={defaultValues.order_status} size="md" />
              </div> 
            </div>
          </DialogContent>
        </Dialog>
  </>
  );
};

export default ViewDialog;
