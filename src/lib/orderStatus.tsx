import React from "react";
import {
  Clock,
  RefreshCw,
  Truck,
  CheckCircle,
  XCircle,
  HelpCircle,
} from "lucide-react";

interface OrderStatusProps {
  status: string;
  size?: "sm" | "md" | "lg";
}

export function OrderStatus({ status, size = "md" }: OrderStatusProps) {
  let bgColor, textColor, icon;
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-0.5 px-2",
    lg: "text-base py-1 px-3",
  };

  const iconSizes = {
    sm: "w-2.5 h-3 mr-1",
    md: "w-3.5 h-4 mr-1",
    lg: "w-4.5 h-5 mr-2",
  };

  switch (status) {
    case "pending":
      bgColor = "bg-amber-100";
      textColor = "text-amber-800";
      icon = <Clock className={iconSizes[size]} />;
      break;
    case "processing":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      icon = <RefreshCw className={`${iconSizes[size]} animate-spin`} />;
      break;
    case "shipped":
      bgColor = "bg-purple-100";
      textColor = "text-purple-800";
      icon = <Truck className={iconSizes[size]} />;
      break;
    case "delivered":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      icon = <CheckCircle className={iconSizes[size]} />;
      break;
    case "cancelled":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      icon = <XCircle className={iconSizes[size]} />;
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
      icon = <HelpCircle className={iconSizes[size]} />;
  }

  return (
    <div
      className={`inline-flex items-center rounded-full ${bgColor} ${textColor} ${sizeClasses[size]}`}
    >
      {icon}
      <span className="font-medium capitalize">{status}</span>
    </div>
  );
}
