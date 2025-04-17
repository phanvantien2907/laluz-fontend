"use client";
import { useCart } from "../../../../../context/CartContext";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";
import { GiCardboardBoxClosed } from "react-icons/gi";

const CartBar = ({ onClose }: { onClose: () => void }) => {
  const { cartItems, updateQuantity, removeCart, handleBuyNow, addToCart } =
    useCart(); // Lấy addToCart từ CartContext
  const parsePrice = (priceStr: string) =>
    Number(priceStr.replace(/[^\d]/g, ""));

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartItems.map((item) => ({
          ...item,
          total: (parsePrice(item.price) * item.quantity).toLocaleString(
            "vi-VN"
          ),
        }))
      )
    );
  }, [cartItems]);

  return (
    <div className="bg-white h-full p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="uppercase text-3xl cursor-pointer font-bold text-center py-4">
            <h1>Giỏ hàng</h1>
          </div>
          <div className="text-4xl font-bold hover:text-[#9C8679] duration-300 cursor-pointer">
            <button onClick={onClose}>
              <IoCloseSharp />
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex items-start gap-6 text-center py-6">
            <div className="text-6xl text-[#9C8679] shrink-0">
              <GiCardboardBoxClosed />
            </div>
            <p className="text-black font-semibold text-left">
              Giỏ hàng của bạn hiện đang trống. Vui lòng tiếp tục mua sắm
            </p>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 border-b py-4">
                <div className="flex items-start gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-2xl border-2 border-[#9C8679]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{item.name}</h4>
                      <div className="font-bold text-[#9C8679]">
                        {parsePrice(item.price).toLocaleString("en-US")}đ
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Danh mục: {item.brand}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 ml-[76px]">
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden text-sm">
                    <button
                      className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() =>
                        updateQuantity(item.id, {
                          quantity: Math.max(1, item.quantity - 1),
                        })
                      }
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() =>
                        updateQuantity(item.id, {
                          quantity: item.quantity + 1,
                        })
                      }
                    >
                      {" "}
                      +
                    </button>
                  </div>
                  <button
                    className="p-1 font-semibold text-2xl text-[#9C8679] duration-300 rounded-full transition-colors"
                    onClick={() => removeCart(item.id)}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between font-semibold text-lg">
          <span>Thành tiền:</span>
          <span>
            {cartItems
              .reduce(
                (sum, item) => sum + parsePrice(item.price) * item.quantity,
                0
              )
              .toLocaleString("en-US")}{" "}
            đ
          </span>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="w-full">
            <button className="w-full py-3 text-xl text-black font-semibold bg-white rounded-3xl uppercase border border-[#9C8679] transition duration-300 hover:bg-[#9C8679] hover:text-white">
              Xem giỏ hàng{" "}
            </button>
          </div>

          <div className="w-full">
            <button
              type="submit"
              onClick={() => handleBuyNow()}
              className="w-full py-3 text-xl text-white font-semibold bg-[#9C8679] rounded-3xl uppercase border border-[#9C8679] transition duration-300 hover:bg-white hover:text-[#9C8679]"
            >
              Thanh toán{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBar;
