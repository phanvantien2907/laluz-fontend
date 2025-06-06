"use client";
import React from 'react'
import { AuthForm } from "@/components/auth-form";

const LoginAdminPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm formType='login' />
      </div>
    </div>
  );
}

export default LoginAdminPage
