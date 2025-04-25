"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card,CardContent,CardDescription,CardHeader, CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

type FormType = "login" | "register";

interface AuthFormProps extends React.ComponentPropsWithoutRef<"div"> {
  formType?: FormType;
}

export function AuthForm({ className,formType = "login",...props}: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  

  const isLogin = formType === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if(formType == 'login') {
        await login(email, password);
      }
      else {
        await register(email, password);
      }
    } catch(err) {
      console.error(err);

    }
    finally {
    setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {isLogin ? "Login" : "Register"}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? "Enter your email below to login to your account"
              : "Enter your details below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@example.com" required />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {isLogin && (
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </Link>
                  )}
                </div>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" required />
              </div>

              {!isLogin && (
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} id="confirmPassword" type="password" required />
                </div>  )}

              <Button
                type="submit"
                className="w-full bg-black"
                disabled={loading}>
                {isLogin ? "Login" : "Register"}
              </Button>

              <Button variant="outline" className="w-full">
                {isLogin ? "Login with Google" : "Register with Google"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <Link href="/admin/register" className="underline underline-offset-4" > Sign up </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link href="/admin/login" className="underline underline-offset-4"> Login </Link>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
