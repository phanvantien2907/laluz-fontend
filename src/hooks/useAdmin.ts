"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useAdmin = () => {
const router = useRouter();
const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    if (!token || role !== "admin") {
        toast.error("Bạn cần đăng nhập để truy cập trang này!");
        router.replace("/admin/login");
        return;
    }
    setIsAuthorized(true);
}, [router]);
 return isAuthorized;
};

