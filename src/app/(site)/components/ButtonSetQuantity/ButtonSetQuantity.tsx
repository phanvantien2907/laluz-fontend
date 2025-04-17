"use client";
import React from "react";

const QuantityCounter = ({
  quantity,
  onQuantityChange,
}: {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">Số lượng:</span>
      <div className="flex border rounded items-center">
        <button
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="px-3 py-1 border-r" > - </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center border-none"/>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="px-3 py-1 border-l"  > + </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
