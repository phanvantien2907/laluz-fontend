import { useForm } from "react-hook-form";

export type UserFormData = {
  name?: string;
  email: string;
  password: string;
  role: string;
  is_active: boolean;
  email_verified_at?: Date | null;
};

export const useAddNewForm = () => {
  return useForm<UserFormData>({
    defaultValues: {
      name: "",
      password: "",
      email_verified_at: null,
     email: "",
     role: "",
      is_active: true,
    },
  });
};