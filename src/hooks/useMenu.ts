import { use, useEffect, useState } from "react";
import { menu } from "@/lib/api";

interface menuItem {
  id: string;
  name: string;
  url: string;
}
export function useMenu () {
const [menuData, setMenuData] = useState<menuItem[]>([]);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const expires_in = localStorage.getItem("expires_in");
    setIsLogin(!!access_token);

    const storedEmail = localStorage.getItem("email") || "";
    setEmail(storedEmail);
    const convertUser = storedEmail.split("@")[0].toLowerCase();
    setUsername(convertUser);
    
    const fetchMenu = async () => {
      try {
        const res = await menu();
        setMenuData(res);
      } catch (err) {
        console.error("Lỗi gọi API:", err);
      }
    }
    fetchMenu();
  }, []);
  return {menuData, username, email, isLogin};
}