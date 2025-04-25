import { use, useEffect, useState } from "react";
import { menu_admin } from "@/lib/api";

interface menuItem {
  id: string;
  title: string;
  icon: string;
  level: number;
  order: number;
  alias: string;
  permissions: string[];
  is_active: boolean;
}

export function useMenuAdmin () {
const [menuData, setMenuData] = useState<menuItem | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<Error | null>(null);
useEffect(() => {
  const fetchMenu = async () => {
    try {
      setLoading(true);
      const res = await menu_admin();
      setMenuData(res);
    } catch (err) {
      console.error("Lỗi gọi API:", err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  fetchMenu();
}, []);
return { menuData, loading, error };
}