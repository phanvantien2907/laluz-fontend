"use client";
import React from 'react'
import { AuthForm } from "@/components/auth-form";

const RegisterAdminPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm formType='register' />
      </div>
    </div>
  );
}

export default RegisterAdminPage;
