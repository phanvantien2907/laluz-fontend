"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from "axios";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { ca } from 'date-fns/locale';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { nation } from '@/lib/api';
import { useProtected } from '@/hooks/use-protected';

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(""); 
  const [company, setCompany] = useState("");
  const [apartment, setApartment] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("VietNam");
  const [selectMethod, setSelectMethod] = useState("bank");
  const [showNote, setShowNote] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const { cartItems, handleCheckOut, clearCart } = useCart();
  const router = useRouter();
  const  isAuthorized  = useProtected();

  const parsePrice = (priceStr: string) => {
    
  return Number(priceStr.replace(/[^\d]/g, ""));};

  const total = cartItems.reduce(
  (sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  const processedCartItems = cartItems.map((item) => ({
  ...item,
  total: (parsePrice(item.price) * item.quantity).toLocaleString("vi-VN"),}));

  const totalAmount = processedCartItems.reduce(
  (sum, item) => sum + parseFloat(item.total.replace(/\./g, "")),0);
  
   useEffect(() => {
     const fetchCountries = async () => {
       try {
         const countryNames = await nation();
         setCountries(countryNames);
       } catch (error) {
         console.error("Lỗi khi fetch quốc gia:", error);
       }
     };
     fetchCountries();
     const storageEmail = localStorage.getItem("email");
     if(storageEmail) {
      setEmail(storageEmail);
     }
   }, []
  );
  if(!isAuthorized) return null;

  
  const handleSubmit = async () => {
    try {
      const customerInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        company: company,
        address: {
        street: address,
        city: city,
        zipcode: zipCode,
        country: selectedCountry,
        },
      };
      const paymentInfo = {
        method: selectMethod,
        status: "pending",
      };
      const orderData = {
        customer: customerInfo,
        payment: paymentInfo,
        order_status: "pending",
        products: processedCartItems,
        zipCode: zipCode,
        company: company,
        note: note.trim() || null
      };
      await handleCheckOut(customerInfo);
      const res = await axios.post( `${process.env.NEXT_PUBLIC_SERVER_API}/api/order`, orderData);
      if(res.status === 201 || res.status === 200) {
        clearCart();
        toast.success("Đặt hàng thành công! Cảm ơn bạn đã đặt hàng");
        router.push("/");
      }
      else {
        toast.error("Đặt hàng thất bại!.");
      }
     
    }
    catch (error:any) {
      console.error("Lỗi khi xử lý đơn hàng:", error.message);
      toast .error("Đã có lỗi xảy ra trong quá trình xử lý đơn hàng. Vui lòng thử lại sau.");
     }
  }


  return (
    <div className="border border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 p-4">
        {/* section 1 */}
        <div className="order-2 lg:order-1">
          <div>
            <h5 className="font-bold text-2xl">1. Thông tin liên hệ</h5>
            <p className="mt-2 ml-6">
              Chúng tôi sẽ sử dụng email này để gửi cho bạn thông tin chi tiết
              và thông tin cập nhật về đơn đặt hàng của bạn
            </p>
            <div className="mt-3 ml-6">
              <input
                type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                placeholder="Địa chỉ email"
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-2xl mt-4">2. Địa chỉ giao hàng</h5>
            <p className="mt-2 ml-6">
              Nhập địa chỉ nơi bạn muốn đơn hàng của mình được giao.
            </p>
            <div className="flex gap-2 mt-3 ml-6">
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
                type="first_name"
                placeholder="Tên"
                className="w-1/2 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
              <input value={lastName} onChange={(e) => setLastName(e.target.value)}
                type="last_name"
                placeholder="Họ"
                className="w-1/2 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>

            <div className="mt-3 ml-6">
              <input value={company} onChange={(e) => setCompany(e.target.value)}
                type="company"
                placeholder="Công ty (không bắt buộc)"
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
            <div className="mt-3 ml-6">
              <input value={address} onChange={(e) => setAddress(e.target.value)}
                type="address"
                placeholder="Địa chỉ"
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
            <div className="mt-3 ml-6">
              <input value={apartment} onChange={(e) => setApartment(e.target.value)}
                type="apartment"
                placeholder="Căn hộ, số nhà..(không bắt buộc)"
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
            <div className="mt-3 flex gap-2 ml-6">
              <select value={selectedCountry}  onChange={(e) => setSelectedCountry(e.target.value)} className='w-1/2 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] cursor-pointer focus:border-transparent duration-200'>
                <option value="">Chọn quốc gia/Khu vực</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country} 
                  </option>
                ))}
              </select>
              <input
                type="zip_code" value={zipCode} onChange={(e) => setzipCode(e.target.value)}
                placeholder="Mã bưu điện (không bắt buộc)"
                className="w-1/2 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
            <div className="mt-3 ml-6">
              <input
                type="city" value={city} onChange={(e) => setCity(e.target.value)}
                placeholder="Thành phố"
                className="w-1/2 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
            <div className="mt-3 ml-6">
              <input
                type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại"
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-2xl mt-4">3. Tùy chọn giao hàng</h5>
            <div className="flex justify-between items-center mt-2">
              <p className="ml-6">Giao hàng miễn phí</p>
              <p className="text-[#9C8679] font-bold">
                0 <sup>đ</sup>
              </p>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-2xl mt-4">4. Tùy chọn thanh toán</h5>
            <div className="space-y-4">
              <label
                className={`block p-4 mt-3 ml-6 border rounded-2xl cursor-pointer transition-colors ${
                  selectMethod === "bank"
                    ? "bg-gray-100 border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={selectMethod === "bank"}
                    onChange={() => setSelectMethod("bank")}
                    className="mt-1"
                  />
                  <div>
                    <span className="font-semibold text-lg">
                      Chuyển khoản ngân hàng
                    </span>
                    {selectMethod === "bank" && (
                      <div className="mt-2 text-sm text-gray-700 space-y-1">
                        <p>
                          Thực hiện thanh toán vào ngay tài khoản ngân hàng của
                          chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong
                          phần Nội dung thanh toán. Đơn hàng sẽ được giao sau
                          khi tiền đã chuyển.
                        </p>
                        <p>Techcombank Hà Thành</p>
                        <p>Dương Chung Thành</p>
                        <p>1417777</p>
                      </div>
                    )}
                  </div>
                </div>
              </label>

              <label
                className={`block p-4 border rounded-2xl ml-6 cursor-pointer transition-colors ${
                  selectMethod === "cod"
                    ? "bg-gray-100 border-black"
                    : "bg-white border-gray-300"
                }`}  >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={selectMethod === "COD"}
                    onChange={() => setSelectMethod("COD")}
                    className="mt-1"
                  />
                  <span className="font-semibold text-lg">
                    Trả tiền mặt khi nhận hàng
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="orderNote"
                className="w-5 h-5 mt-0.5 rounded-full accent-black" onChange={(e) => setShowNote(e.target.checked)} />
              <label htmlFor="orderNote" className="text-base">
                Thêm ghi chú cho đơn hàng của bạn
              </label>
            </div>

            {showNote && (
              <textarea value={note} onChange={(e) => setNote(e.target.value)}
                className="mt-3 ml-2 lg:ml-2 w-full  border rounded-2xl p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Ghi chú thêm cho đơn hàng, ví dụ: thời gian hay chỉ dẫn địa chỉ cụ thể về đơn hàng."
                rows={4}
              ></textarea>
            )}
          </div>

          <div className="border-t border-gray-300 mt-4 ml-6">
            <div className="flex justify-between items-center mt-4">
              <div>
                <Link
                  className="text-[#9C8679] duration-200 cursor-pointer font-semibold"
                  href={"/cart"}
                >
                  Quay lại trang trước
                </Link>
              </div>
              <div onClick={handleSubmit} className="text-right">
                <button className="w-[250px] bg-[#9C8679] text-white text-center font-semibold rounded-2xl hover:text-[#9C8679] hover:bg-white cursor-pointer hover:border hover:border-[#9C8679] px-6 py-3 hover:cursor-pointer transition-colors duration-300">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="w-full px-4 sm:px-6 md:px-8 order-1 lg:order-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-2xl border-2 border-[#9C8679]"/>
                <div className='flex flex-col'>
                  <p className='text-[#9C8679] font-bold'>{item.name}</p>
                  <p className='text-sm font-semibold'>Hãng: {item.brand}</p>
                  <p className='text-sm font-semibold'>Giới tính: {item.gender}</p>
                  <p className='text-sm font-semibold'>Lưu hương: {item.odor_retention}</p>
                </div>
              </div>
              <p className="text-red-500 font-bold text-xl">{parsePrice(item.price).toLocaleString("en-US")} <sup>đ</sup> </p>
            </div>
          ))}
          
          <div className="flex justify-between items-center mt-6 border-b border-gray-300 pb-4">
            <h5 className="text-xl font-semibold">Tạm tính</h5>
            <p className="text-[#9C8679] text-lg font-bold ml-auto whitespace-nowrap"> {totalAmount.toLocaleString("en-US")} <sup>đ</sup></p>
          </div>
          
          <div className="mt-6">
            {!showCoupon ? (
              <h5
                className="text-lg font-bold text-red-500 cursor-pointer"
                onClick={() => setShowCoupon(true)}>
                Nhập mã ưu đãi
              </h5>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Nhập mã ưu đãi"
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679]"/>
                <button className="px-6 py-3 bg-[#9C8679] text-white font-semibold rounded-full hover:bg-white hover:text-[#9C8679] hover:border hover:border-[#9C8679] transition-all">
                  Áp dụng
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-6 border-t border-gray-300 pt-4">
            <h5 className="text-xl font-semibold">Tổng cộng</h5>
            <p className="text-[#9C8679] text-2xl font-bold"> {totalAmount.toLocaleString("en-US")} <sup>đ</sup></p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CheckoutPage
