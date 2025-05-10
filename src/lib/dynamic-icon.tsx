import * as Icons from "lucide-react";

export function getLucideIcon(name: string) {
  return (Icons as any)[name] || Icons.Circle;
}
