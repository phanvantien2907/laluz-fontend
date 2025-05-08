"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditForm } from "@/app/admin/order/components/edit";
import toast from "react-hot-toast";
import ViewDialog from "@/app/admin/order/components/view";
import DeleteDialog from "@/app/admin/order/components/delete";
import { OrderStatus } from "@/lib/orderStatus";

export interface Order {
  id: string;
  order_code: string;
  note?: string;
  customer: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    company?: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
      country: string;
    };
  };
  payment: {
    method: string;
    status: string;
  };
  shipping: {
    fee: number;
    tracking_number: string;
    estimated_delivery: string;
  };
  created_at: string;
  order_status: string;
  products: {
    name: string;
    brand: string;
    quantity: number;
    price: string;
    total: string;
  }[];
}


export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "order_code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          order code
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "customer",
    header: "customer",
    cell: ({ row }) => {
      const customer = row.original.customer;
      return `${customer.first_name} ${customer.last_name}`;
    },
  },

  {
    accessorKey: "customer.phone",
    header: "phone",
  },

  {
    accessorKey: "order_status",
    header: "status",
    cell: ({ row }) => {
      const status = row.original.order_status;
      return <OrderStatus status={status} size="md" />;
    },
  },
  {
    accessorKey: "payment.method",
    header: "payment",
  },
 
  {
    id: "actions",
    header: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                navigator.clipboard
                  .writeText(order.id)
                  .then(() => toast.success("Copy ID thành công!"))
                  .catch(() => toast.error("Lỗi copy ID!"))
              }  >
              {" "}
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <EditForm
                trigger={
                  <span className="flex items-center cursor-pointer"onClick={(e) => {
                    if(order.order_status === 'delivered') {
                      e.preventDefault();
                      toast.error("Đơn hàng đã được giao, không thể chỉnh sửa!");
                      return;
                    }
                  }}>Edit</span>
                }
                orderID={order.id}
                defaultValues={order}
              />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <ViewDialog
                trigger={
                  <span className="flex items-center cursor-pointer">View</span>
                }
                orderID={order.id}
                defaultValues={order}
              />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <DeleteDialog
                trigger={
                  <span className="flex items-center cursor-pointer">
                    Delete
                  </span>
                }
                orderID={order.id}
                defaultValues={order}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
