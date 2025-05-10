import { useForm } from "react-hook-form";

export type ProductFormData = {
  id: string;
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

export const useEditForm = (defaultValues: ProductFormData) => {
  return useForm<ProductFormData>({
    defaultValues,
  });
};