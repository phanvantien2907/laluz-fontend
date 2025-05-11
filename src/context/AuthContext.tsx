"use client";
import { createContext, useContext, useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { login as loginApi, register } from "@/lib/api";
import { id } from "date-fns/locale";


interface AuthContextType {
  isLogin: boolean;
  login: (email: string, password:string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    const expires_in = localStorage.getItem("expires_in");
    if(token && expires_in && Date.now() > parseInt(expires_in)) {
    toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!");
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");
    localStorage.removeItem("expires_in");
    setIsLogin(false);
    if(role == "admin") {
    router.replace("/admin/login");
    return;
    }
     router.replace("/login");
    return;
     }
    setIsLogin(!!token);}, []);


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

       const handleRegister = async (email: string, password: string): Promise<void> => {
         setError("");
         try {
           const res = await register(email, password);
           const getRole = res.data?.role || res.role || "user";
           toast.success("Đăng ký tài khoản thành công, vui lòng kiểm tra email!");
            switch(getRole) {
            case "admin":
              router.push("/admin/login");
              break;
            case "manage":
              router.push("/admin/login");
              break;
            default:
              router.push("/login");
              break;
          }
         } catch (err: any) {
           if (err.response?.data?.errors) {
             Object.values(err.response.data.errors).forEach(
               (messages: any) => {
                 messages.forEach((msg: string) => toast.error(msg));
               }
             );
           } else {
             toast.error(
               err.response?.data?.message || "Đã có lỗi khi đăng ký tài khoản!"
             );
           }
         }
       };
      
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
    <AuthContext.Provider value={{ isLogin, logout: handleLogout, login, register: handleRegister }}>
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
