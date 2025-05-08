import { useForm } from "react-hook-form";

export type OrderFormData = {
  id: string;
  order_code: string;
  note?: string;
  customer: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    company?: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
      country: string;
    };
  };
  payment: {
    method: string;
    status: string;
  };
  shipping: {
    fee: number;
    tracking_number: string;
    estimated_delivery: string;
  };
  order_status: string;
  created_at: string;
  products: {
    name: string;
    brand: string;
    quantity: number;
    price: string;
    total: string;
  }[];
};

export const orderForm = () => {
  return useForm<OrderFormData>({
    defaultValues: {
      id: "",
      order_code: "",
      note: "",
      customer: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        company: "",
        address: {
          street: "",
          city: "",
          zipcode: "",
          country: "",
        },
      },
      payment: {
        method: "",
        status: "",
      },
      shipping: {
        fee: 0,
        tracking_number: "",
        estimated_delivery: "",
      },
      order_status: "",
      created_at: "",
      products: [],
    },
  });
};