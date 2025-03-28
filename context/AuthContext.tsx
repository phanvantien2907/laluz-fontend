"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface AuthContextType {
  isLogin: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState( !!localStorage.getItem("access_token")
  );

   const handleLogout = () =>  {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("expires_in");
      setIsLogin(false);
      router.push("/login");
      toast.success("Đăng xuất thành công");
    }

  return (
    <AuthContext.Provider value={{ isLogin, logout: handleLogout }}>
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
