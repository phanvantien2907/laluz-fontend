import { useForm } from "react-hook-form";

export type ProductFormData = {
  name: string;
  alias: string;
  brand: string;
  scent_radiance: string;
  concentration: string;
  odor_retention: string;
  capacity: string;
  gender: string;
  is_active: boolean;
  image: string;
  price: string;
};

export const useAddNewForm = () => {
  return useForm<ProductFormData>({
    defaultValues: {
      name: "",
      alias: "",
      brand: "",
      price: "",
      scent_radiance: "",
      concentration: "",
      odor_retention: "",
      capacity: "",
      gender: "",
      is_active: true,
      image: "",
    },
  });
};