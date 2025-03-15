import React from 'react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <div className='container mx-auto max-w-7xl px-4 py-8'>
       <div className='px-4 py-6 mb-8 border-b border-gray-200'>
         <h1 className='text-3xl md:text-4xl font-semibold text-start text-gray-800'>Liên hệ</h1>
       </div>
       
       <div className='flex flex-col md:flex-row gap-8 lg:gap-12'>
        {/* Form section */}
        <motion.div initial={{ opacity: 0, y: 100 }}  
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1,  ease: "easeOut", delay: 0.2 }} 
                viewport={{ once: false, amount: 0.2 }}  className='w-full md:w-1/2  p-6 rounded-lg shadow-sm'>
            <div className='mb-8 space-y-2'>
              <h2 className='text-xl font-semibold mb-4 text-gray-700'>Thông tin liên hệ</h2>
              <p className='flex items-center gap-2 text-gray-700'>
                <span className='font-semibold'>Địa chỉ:</span> 
                <span>285 Phố Huế, Hai Bà Trưng, Hà Nội</span>
              </p>
              <p className='flex items-center gap-2 text-gray-700'>
                <span className='font-semibold'>Hotline:</span> 
                <a href="tel:0941417777" className='text-red-500 hover:text-red-600 transition-colors'>094 141 7777</a>
              </p>
              <p className='flex items-center gap-2 text-gray-700'>
                <span className='font-semibold'>Email:</span> 
                <a href="mailto:Info@laluz.vn" className='text-red-500 hover:text-red-600 transition-colors'>Info@laluz.vn</a>
              </p>
            </div>

            <div className="mb-4">
              <label className='block mb-2 pl-2 text-sm font-bold text-gray-700'>Họ và tên <span className='text-red-500'>*</span></label>
              <input 
                type="text" 
                placeholder="Nhập họ và tên của bạn" 
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>

            <div className="mb-4">
              <label className='block mb-2 pl-2 text-sm font-bold text-gray-700'>Email <span className='text-red-500'>*</span></label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              />
            </div>

            <div className="mb-6">
              <label className='block mb-2 pl-2 text-sm font-bold text-gray-700'>Nội dung <span className='text-red-500'>*</span></label>
              <textarea 
                placeholder="Nhập nội dung cần trao đổi" 
                className="w-full px-6 py-3 border border-gray-300 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:border-transparent duration-200"
              ></textarea>
            </div>

            <div>
              <button className='group relative w-full py-3 text-white bg-[#9C8679] rounded-3xl uppercase hover:text-[#9C8679] overflow-hidden transition duration-300 border border-[#9C8679]'>
                <span className="relative z-10 font-semibold">Gửi liên hệ</span>
                <span className="absolute inset-x-0 top-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0"></span>
              </button>    
            </div>
        </motion.div>

        {/* Map section */}
        <motion.div initial={{ opacity: 0, y: -200 }}  
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
                viewport={{ once: false, amount: 0.2 }} className='w-full md:w-1/2 mt-8 md:mt-0'>
          <div className='h-full'>
            <div className='rounded-lg overflow-hidden shadow-md border border-gray-200 h-[calc(100%-40px)]'>
              <iframe className='w-full h-full min-h-[400px]'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.284519669414!2d105.85021631476256!3d21.01336699367772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf2b8c3c1e5%3A0x4e3c6d2f7c7b4c3!2zQ-G7rWEgSMOgIFRo4bq_LCBQaMO6LCBIYWkgQsOsbmggVHLGsOG7nW5n!5e0!3m2!1svi!2s!4v1631085761967!5m2!1svi!2s" 
                allowFullScreen={true} loading="lazy"title="Google Maps">
              </iframe>
            </div>
          </div>
        </motion.div>
       </div>
    </div>
  )
}

export default ContactPage