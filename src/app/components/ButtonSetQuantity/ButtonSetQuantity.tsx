"use client";
import React, { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center">
      <span className="mr-2">Số lượng:</span>
      <div className="flex border rounded items-center">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="px-3 py-1 border-r"
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center border-none"
        />
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-3 py-1 border-l"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
