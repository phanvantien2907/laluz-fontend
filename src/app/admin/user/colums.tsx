"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, View } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EditForm } from "@/app/admin/user/components/edit";
import toast from "react-hot-toast";
import ViewDialog from "@/app/admin/user/components/view";
import DeleteDialog from "@/app/admin/user/components/delete";
import LockUserDialog from "@/app/admin/user/components/lock";

export interface User {
  id: string;
  phone: string;
  name: string;
  email: string;
  password: string;
  is_active: boolean;
  role: string;
  email_verified_at?: Date | null;
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "is_active",
    header: "Active",
    cell: ({ row }) => (
      <span
        className={row.original.is_active ? "text-green-500" : "text-red-500"}
      >
        {row.original.is_active ? "Active" : "Inactive"}
      </span>
    ),
  },
  {
    accessorKey: "email_verified_at",
    header: "Email Verified",
    cell: ({ row }) => {
      const Verified = row.original.email_verified_at;
      const format_date = Verified ? new Date(Verified).toLocaleDateString("vi-VN") : null;
        return (
          <span  className={Verified ? "text-green-500" : "text-red-500" }>
            {Verified ? format_date: "Pending"}
          </span>
        );
    }
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(user.id) .then(() => toast.success("Copy ID thành công!")) .catch(() => toast.error("Lỗi copy ID!"))}> Copy ID
            </DropdownMenuItem >
            <DropdownMenuSeparator />
           <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <EditForm
            trigger={
            <span className="flex items-center cursor-pointer">Edit</span>}
            userID={user.id}
            defaultValues={user}
             />
             </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <ViewDialog
              trigger={
                <span className="flex items-center cursor-pointer">View</span>
              }
              userID={user.id}
              defaultValues={user}
              />
            </DropdownMenuItem>
             <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
             <DeleteDialog
              trigger={
                <span className="flex items-center cursor-pointer">Delete</span>
              }
              userID={user.id}
              defaultValues={user}
             />
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
             <LockUserDialog
              trigger={
                <span className="flex items-center cursor-pointer">{user.is_active ? "Lock" : "Unlock"}</span>
              }
              userID={user.id}
              defaultValues={user}
             />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
