import { useEffect, useState } from "react";
import { product } from "@/lib/api";

export const useProduct = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    product().then((res) => {
      if (res) setData(res);
    });
  }, []);

  return data;
};
