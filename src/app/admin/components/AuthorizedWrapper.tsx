"use client";

import { useAdmin } from "@/hooks/useAdmin";

export function AuthorizedWrapper({ children }: { children: React.ReactNode }) {
  const isAuthorized = useAdmin();
  if (!isAuthorized) return null;

  return <>{children}</>;
}
