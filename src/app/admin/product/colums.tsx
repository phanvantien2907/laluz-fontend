"use client";
import { ColumnDef, sortingFns } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, ImportIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EditForm } from "@/app/admin/product/components/edit";
import ViewDialog from "@/app/admin/product/components/view";
import DeleteDialog from "@/app/admin/product/components/delete";

export interface Product {
  id: string;
  alias: string;
  name: string;
  brand: string;
  scent_radiance: string;
  concentration: string;
  odor_retention: string;
  capacity: string;
  gender: string;
  price: string;
  image: string;
  is_active: boolean;
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Brand
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        {new Intl.NumberFormat("en-US").format(
          Number(row.original.price.toString().replace(/\./g, ""))
        )}{" "}
        <sup>đ</sup>
      </div>
    ),
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={row.original.is_active ? "text-green-500" : "text-red-500"}
      >
        {row.original.is_active ? "Còn hàng" : "Hết hàng"}
      </span>
    ),
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <img
          src={row.original.image}
          alt={row.original.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id) .then(() => toast.success("Copy ID thành công!")) .catch(() => toast.error("Lỗi copy ID!"))}>
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <EditForm
                trigger={
                  <span className="flex items-center cursor-pointer">Edit</span>
                }
                productID={product.id}
                defaultValues={product}
              />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <ViewDialog
             trigger= {
              <span className="flex items-center cursor-pointer">View</span>
              }
              productID={product.id}
              defaultValues={product}
              />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
             <DeleteDialog
              trigger={
                <span className="flex items-center cursor-pointer">Delete</span>
              }
              productID={product.id}
              defaultValues={product}
             />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
