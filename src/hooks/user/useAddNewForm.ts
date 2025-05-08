import { useForm } from "react-hook-form";

export type UserFormData = {
  email: string;
  password: string;
  role: string;
  is_active: boolean;
  email_verified_at?: Date | null;
};

export const useAddNewForm = () => {
  return useForm<UserFormData>({
    defaultValues: {
     email: "",
     role: "",
      is_active: true,
    },
  });
};