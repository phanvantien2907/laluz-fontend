"use client";
import { createContext, useContext, useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

interface AuthContextType {
  isLogin: boolean;
  logout: () => void;
  data: any[];
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);

    useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLogin(!!token);}, []);

 
  
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.error("Lỗi gọi API:", err));
  }, []);

   const handleLogout = () =>  {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("expires_in");
      setIsLogin(false);
      router.push("/login");
      toast.success("Đăng xuất thành công");
    }

  return (
    <AuthContext.Provider value={{ isLogin, logout: handleLogout, data }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được dùng trong AuthProvider");
  }
  return context;
};
