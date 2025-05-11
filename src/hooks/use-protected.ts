"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useProtected = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    const cartString = localStorage.getItem("cart");
    if (!token || role !== "user") {
      toast.error("Bạn cần đăng nhập để truy cập trang này!");
      router.replace("/login");
      return;
    }
    setIsAuthorized(true);
  }, [router]);
  return isAuthorized;
};

  export const useProtectedCheckOut = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    const cartString = localStorage.getItem("cart");
    if (!token || role !== "user") {
      toast.error("Bạn cần đăng nhập để truy cập trang này!");
      router.replace("/login");
      return;
    }
    try {
      const cart = cartString ? JSON.parse(cartString) : [];
      if (!Array.isArray(cart) || cart.length === 0) {
        toast.error("Giỏ hàng đang trống, không thể vào trang này!");
        router.replace("/");
        return;
      }
    } catch (err) {
      toast.error("Lỗi đọc giỏ hàng!");
      router.replace("/");
      return;
    }
    setIsAuthorized(true);
  }, [router]);
  return isAuthorized;
};