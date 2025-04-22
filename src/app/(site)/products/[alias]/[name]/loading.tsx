import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";


const loadingPage = () => {
  return (
    <div className="bg-gray-50 animate-pulse">
      <div className="border-t border-gray-200">
        {/* Breadcrumb Skeleton */}
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-6 bg-gray-200 rounded w-3/5 max-w-md"/>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Product details section skeleton */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Product image skeleton */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl p-6 shadow-sm h-[500px]">
                <Skeleton className="h-full w-full bg-gray-200 rounded-lg"/>
              </div>
            </div>

            {/* Product information skeleton */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                {/* Title skeleton */}
                <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>

                {/* Rating skeleton */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gray-200 rounded-full mr-1"
                      ></div>
                    ))}
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-24"></div>
                </div>

                {/* Wishlist skeleton */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-32"></div>
                </div>

                {/* Capacity options skeleton */}
                <div className="mb-6">
                  <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="flex gap-3">
                    <div className="h-10 bg-gray-200 rounded w-20"></div>
                    <div className="h-10 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>

                {/* Quantity selector skeleton */}
                <div className="mb-6">
                  <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>

                {/* Buttons skeleton */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="h-12 bg-gray-200 rounded flex-1"></div>
                  <div className="h-12 bg-gray-200 rounded flex-1"></div>
                </div>

                {/* Hotline skeleton */}
                <div className="h-20 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Product info cards skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Product details skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="py-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>

              <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Shipping and returns skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>

              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 py-3 ${
                    i > 0 ? "border-t border-gray-200" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Related products section skeleton */}
          <div className="mb-12">
            <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loadingPage
