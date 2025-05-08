import axios from "axios";
import { th } from "date-fns/locale";


export const login = async (email: string, password: string) => {
    const res = await axios.post( `${process.env.NEXT_PUBLIC_SERVER_API}/api/auth/login`,  { email, password });
    return res.data;
};

export const register = async (email: string, password: string) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/auth/register`,{ email,password, password_confirmation: password, });
    return res.data;
};

export const product = async (isAdmin = false) => {
    try {
      const url = isAdmin ? `${process.env.NEXT_PUBLIC_SERVER_API}/api/product?admin=1` : `${process.env.NEXT_PUBLIC_SERVER_API}/api/product` 
        const res = await axios.get(url);
        return res.data.data;
    } catch (err: any) {
        console.error("Lỗi gọi API:", err);
        return null;
    }
};


export const createProduct = async (data:any) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product`, data);
        return res.data;
    } catch (err: any) {
        console.error("Lỗi khi tạo sản phẩm:", err);
        throw err;
    }
};

export const editProduct = async (id: string, data:any) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product/${id}`, data);
        return res.data;
    } catch (err: any) {
        console.error("Lỗi sửa sản phẩm:", err);
        throw err;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product/${id}`);
        return res.data;
    } catch (err: any) {
        console.error("Lỗi xóa sản phẩm:", err);
        throw err;
    }
};

export const nation = async () => {
   try {
         const res = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API}`);
         const countryNames = res.data.map((country: any) => country.name.common).sort();
         return countryNames;
       } catch (err) {
         console.error("Lỗi khi fetch quốc gia:", err);
       }
}

export const menu = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/menu`);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi gọi API:", err);
    return null;
  }
};

export const menu_admin = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/menu_admin`);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi gọi API:", err);
    return null;
  }
};

export const user = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user`, {
    });
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi gọi API:", err);
    return null;
  }
};

export const createUser = async (data: any) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user`, data);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi khi tạo user:", err);
    return null;
  }
};

export const getUserByID = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user/${id}`);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi tìm ID:", err);
    return null;
  }
};

export const editUser = async (id:string, data: any) => {
  try {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user/${id}`, data);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi cập nhật:", err);
    return null;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user/${id}`);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi xóa user:", err);
    return null;
  }
};

export const lockUser = async (id: string) => {
  try {
    const res = await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_API}/api/user/${id}/lock`);
    return res.data.data;
  } catch (err: any) {
    console.error("Lỗi khi khóa user:", err);
    throw err;
  }
};

export const order = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/order`, {
    });
    return res.data.data.data;
  } catch (err: any) {
    console.error("Lỗi gọi API:", err);
    return null;
  }
};

export const editOrder = async (id:string, data: any) => {
  try {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_API}/api/order/${id}`, data);
    return res.data.data.data;
  } catch (err: any) {
    console.error("Lỗi cập nhật đơn hàng:", err);
    throw err;
  }
};

export const getOrderByID = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/order/${id}`);
    return res.data.data.data;
  } catch (err: any) {
    console.error("Lỗi tìm ID:", err);
    throw err;
  }
};

export const deleteOrder = async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_API}/api/order/${id}`);
    return res.data.data.data;
  } catch (err: any) {
    console.error("Lỗi xóa đơn hàng!:", err);
    throw err;
  }
};

export const getDashboard = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/dashboard`);
    return res.data;
  } catch (err: any) {
    console.error("Lỗi không lấy được thống kê!:", err);
    throw err;
  }
};