"use client"
import { useProtected } from "@/hooks/use-protected"
import React from 'react'

const OrdersPage = () => {
  const isAuthorized = useProtected()
  if (!isAuthorized) return null
  return (
    <div>
      <h1>Đây là trang lịch sử đặt hàng</h1>
    </div>
  )
}

export default OrdersPage
