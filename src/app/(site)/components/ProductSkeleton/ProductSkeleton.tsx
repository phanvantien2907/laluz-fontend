import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";


const ProductSkeleton = () => {
  return (
    <div className="relative w-full max-w-xs bg-white p-4 rounded-2xl shadow-lg text-center border">
      <Skeleton className="bg-gray-200 w-24 h-32 mx-auto rounded" />
      <Skeleton className="bg-gray-200 h-4 w-1/2 mx-auto mt-2" />
      <Skeleton className="bg-gray-200 h-6 w-3/4 mx-auto mt-2" />
      <Skeleton className=" bg-slate-200 h-4 w-1/3 mx-auto mt-2" />
    </div>
  );
}

export default ProductSkeleton
