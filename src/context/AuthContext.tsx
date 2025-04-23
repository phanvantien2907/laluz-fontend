"use client";
import { createContext, useContext, useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { login as loginApi } from "@/lib/api";

interface AuthContextType {
  isLogin: boolean;
  login: (email: string, password:string) => Promise<void>;
  logout: () => void;
  // data: any[];
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLogin(!!token);}, []);
 
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product`)
  //     .then((res) => setData(res.data.data))
  //     .catch((err) => console.error("Lỗi gọi API:", err));
  // }, []);

      const login = async (email:string, password:string): Promise<void> => {
        try {
          const res = await loginApi(email, password);
          const role = res.role || res.user?.role || "guest";
          const adminCheck = window.location.pathname.includes("/admin/login");
          if(adminCheck && role !== "admin") {
            toast.error("Bạn không có quyền truy cập vào trang này!");
            return;
          }
          localStorage.setItem("role", role);
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("email", email);
          localStorage.setItem("expires_in", (Date.now() + 3600 * 1000).toString());
          toast.success("Đăng nhập thành công!")
          setTimeout(() => {
            const getRole = localStorage.getItem("role");
            if(getRole == "admin") {
              location.assign("/admin/dashboard");
              return;
            }
            location.assign("/");
          }, 1000);
        }
        catch (err:any) { 
          toast.error(err.response?.data?.message || "Tài khoản hoặc mật khẩu không đúng!");
        }
      }
  
   const handleLogout = () =>  {
      const role = localStorage.getItem("role");
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("expires_in");
      if(role == "admin") {
        router.replace("/admin/login");
      }
      else {
      router.replace("/login");
      }
      setIsLogin(false);
      toast.success("Đăng xuất thành công");
    }

  return (
    <AuthContext.Provider value={{ isLogin, logout: handleLogout, login }}>
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
