"use client";
import React from 'react'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation';

const CustomBreadcrumb = () => {

    const pathname = usePathname(); // lấy đường dẫn hiện tại
    const pathParts = pathname.split("/").filter((part) => part); 
   
  return (
    <Breadcrumb>
    <BreadcrumbList>
      {/* Mục Home */}
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      {/* Duyệt qua từng phần của URL */}
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");

        return (
          <BreadcrumbItem key={index} className='text-[#C96F3B]'>
            <BreadcrumbSeparator />
            <BreadcrumbLink asChild>
              <Link href={href}>{decodeURIComponent(part)}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbList>
  </Breadcrumb>

  )
}

export default CustomBreadcrumb
