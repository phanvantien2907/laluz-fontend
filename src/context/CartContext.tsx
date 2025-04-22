"use client";
import { Context } from "@dnd-kit/sortable/dist/components";
import { id } from "date-fns/locale";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "./AuthContext";
import { add } from "date-fns";
import { p } from "framer-motion/client";

export type CartItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  brand: string;
  concentration: string;
  odor_retention: string;
  scent_radiance: string;
  gender: string
  capacity: string;
  image: string;
  total: string;
};

export type Order = {
  customer: customer;
  payment: payment;
  order_status: string;
  products: CartItem[];
}

export type customer = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: {
  street: string;
  city: string;
  country: string;
  };
}

export type payment = {
  method: string;
  status: string;
}

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, data: Partial<CartItem>) => void;
  totalQuantity: number;
  removeCart: (id: string) => void;
  clearCart: () => void;  
  handleBuyNow: () => void;
  handleCheckOut: (customerInfo: customer) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { isLogin } = useAuth();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
  setCartItems((prev) => {
    const updatedCart = prev.map((p) =>
      p.id === item.id
        ? { ...p, quantity: p.quantity + item.quantity, total: ((p.quantity + item.quantity) * parseFloat(p.price)).toFixed(2) }
        : p
    );

    const saveCart = prev.some((p) => p.id === item.id)
      ? updatedCart
      : [...prev, { ...item, total: (item.quantity * parseFloat(item.price)).toFixed(2) }];
    localStorage.setItem("cart",JSON.stringify({ cart: saveCart, expiry_date: new Date(Date.now() + 86400000).toDateString() }));
    return saveCart;
  });};

  const updateQuantity = (id: string, data:Partial<CartItem>) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, ...data } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };


  const removeCart = (id: string) =>  {
   const removeCart = setCartItems((prev) => prev.filter((item) => item.id !== id));
    localStorage.removeItem("cart");
    return removeCart;
  }

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  }

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

   const handleBuyNow = () => {
       if(!isLogin) {
         toast.error("Vui lòng đăng nhập để mua hàng!");
         return;
       }
       else if(cartItems && cartItems.length > 0) {
         router.push("/checkout");
       }
       else {
         toast.error("Vui lòng thêm sản phẩm vào giỏ hàng!");
       }
      }

      const handleCheckOut = async (customerInfo:customer) => { 
      const email = localStorage.getItem("email");
      const cartRaw = localStorage.getItem(`cart_${email}`);
      const cart = cartRaw ? JSON.parse(cartRaw) : [];
      const paymentInfo: payment = {
        method: "COD",
        status: "pending"
      }
      const order: Order = {
      customer: customerInfo,
      payment: paymentInfo,
      order_status: "pending",
      products: cart
      };
      console.log(order); // debug value
      }  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, totalQuantity, removeCart, handleBuyNow, handleCheckOut, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext not found");
  return context;
};
