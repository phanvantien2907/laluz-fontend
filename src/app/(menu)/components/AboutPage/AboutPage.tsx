import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutPage = () => {
  // Variants cho các animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }
  
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
  
  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
  
  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
  
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  }
  
  // Stagger children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }
  
  const infiniteScroll = {
    animate: {
      y: [0, -10, 0],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop"
      }
    }
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: false }}
        className='mb-10 pb-6 border-b border-gray-200'>
        <motion.h1 variants={slideFromLeft} className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'>Giới thiệu về LALUZ </motion.h1>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className='space-y-8'>
        
        <motion.p 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false }}
          variants={slideFromBottom}
          className='text-lg text-gray-700 leading-relaxed'>
          Đến với LALUZ Parfums, mỗi mùi hương đều là một trải nghiệm độc đáo, khác biệt, mang đến cho bạn sự phong phú và đa dạng trong từng khoảnh khắc. Nếu bạn là một tín đồ mùi hương và đang tìm kiếm một hương thơm phù hợp với cá tính, sở thích cá nhân, hãy ghé ngay LALUZ để đắm chìm trong thế giới nước hoa đầy mê hoặc và quyến rũ.
        </motion.p>
        
       <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }} // Cho phép lặp lại hiệu ứng khi cuộn
  variants={slideFromLeft} 
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}  
  className='my-12'
>
  <motion.h2 
    variants={fadeIn}
    className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'
  > 
    CEO Chung Thành – Người sáng lập LALUZ Parfums  
  </motion.h2>

  <div className='flex flex-col md:flex-row md:space-x-8 items-center mb-6'>
    <motion.div  variants={scaleUp} viewport={{ once: false, amount: 0.2 }} className='w-full md:w-1/3 mb-6 md:mb-0'>
      <div className='relative'>
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
          <Image src='/image/about/ceo-chung-thanh-768x1152.jpg'  alt='CEO Chung Thành' width={500}   height={750}className='rounded-lg shadow-md w-full h-auto' />
        </motion.div>
        <p className='text-center text-sm text-gray-600 mt-2 italic'> CEO Chung Thành – Doanh nhân trẻ đứng sau LALUZ Parfums </p>
      </div>
    </motion.div>
    
      <motion.div variants={slideFromRight}viewport={{ once: false, amount: 0.2 }} className='w-full md:w-2/3' >
        <p className='text-gray-700 leading-relaxed'>
          "Thành đến với việc kinh doanh nước hoa một cách rất tình cờ, bắt đầu chỉ vì muốn cơ thể luôn mang theo mùi thơm mà mình yêu thích. Theo thời gian, thói quen sử dụng nước hoa trở thành sở thích và đam mê. Từng loại nước hoa mình sưu tầm và nghiên cứu không chỉ mang đến hương thơm mà còn chứa đựng những ý nghĩa sâu sắc. Chúng giúp mỗi người tự tin hơn, thể hiện cá tính và màu sắc riêng biệt, đồng thời tác động tích cực đến cảm xúc, làm cho cuộc sống trở nên lạc quan hơn, yêu thế giới xung quanh hơn…" – CEO Chung Thành chia sẻ.
        </p>
      </motion.div>
      </div>
      </motion.div>

        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className='my-12'>
          
          <motion.h2 
            variants={slideFromLeft}
            className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'>
            Chàng trai trẻ đam mê mùi hương
          </motion.h2>
          
          <div className='flex flex-col-reverse md:flex-row md:space-x-8 items-center mb-6'>
            <motion.div 
              variants={slideFromLeft}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full md:w-2/3 mt-6 md:mt-0'>
              <p className='text-gray-700 leading-relaxed'> Vì quá yêu thích các mùi hương cũng như sự quyến rũ của các dòng nước hoa, CEO Chung Thành đã dành rất nhiều thời gian, công sức tìm hiểu, nghiên cứu về thị trường nước hoa để có thể giới thiệu đến khách hàng những dòng nước hoa cao cấp nhất. Kinh doanh nước hoa là một lĩnh vực đặc thù, đòi hỏi người kinh doanh không chỉ có khả năng kinh doanh đơn thuần mà còn cần trở thành một "nghệ sĩ" đích thực trong việc thường thức hương liệu.</p>
            </motion.div>
            
            <motion.div 
              variants={slideFromRight}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full md:w-1/3'>
              <div className='relative'>
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Image   src='/image/about/ceo-nuoc-hoa-laluz-1024x683.jpg' alt='Chàng trai trẻ đam mê mùi hương' width={600} height={400}className='rounded-lg shadow-md w-full h-auto'/>
                </motion.div>
                <p className='text-center text-sm text-gray-600 mt-2 italic'>Chàng trai trẻ đam mê mùi hương</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          className='my-12'>
          
          <motion.h2 
            variants={slideFromLeft}
            viewport={{ once: false, amount: 0.3 }}
            className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'>
            Hành trình trở thành doanh nhân trẻ tài năng đứng sau LALUZ Parfums
          </motion.h2>
          
          <div className='flex flex-col md:flex-row md:space-x-8 items-center mb-6'>
            <motion.div 
              variants={slideFromLeft}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full md:w-1/3 mb-6 md:mb-0'>
              <div className='relative'>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Image 
                    src='/image/about/doanh-nhan-dung-sau-laluz-1024x683.jpg' 
                    alt='Hành trình đến thành công' 
                    width={600} 
                    height={400}
                    className='rounded-lg shadow-md w-full h-auto'
                  />
                </motion.div>
                <p className='text-center text-sm text-gray-600 mt-2 italic'>Hành trình đi đến thành công của CEO Chung Thành không hề "dải hoa hồng"</p>
              </div>
            </motion.div>
            
            <motion.div variants={slideFromRight} viewport={{ once: false, amount: 0.3 }} className='w-full md:w-2/3'>
              <motion.p variants={staggerItem} viewport={{ once: false, amount: 0.3 }}  className='text-gray-700 leading-relaxed mb-4'>
              Để hiện thực hóa niềm đam mê và có thể lan tỏa những giá trị đặc sắc của nước hoa, CEO Chung Thành đã xây dựng cửa hàng LALUZ Parfums. Bắt đầu kinh doanh từ năm 2017, anh Thành chính thức có cửa hàng đầu tiên tại Phố Huế, Hà Nội vào tháng 6/2021. Với những nỗ lực không ngừng, CEO Chung Thành đã thành công biến đam mê thành hiện thực. Sinh năm 1998, ở tuổi 26, Chung Thành đã có hơn 7 năm kinh nghiệm trong ngành kinh doanh nước hoa, một công việc không chỉ đơn thuần là nguồn thu nhập mà còn là tình yêu và tâm huyết tuổi trẻ.
              </motion.p>
              <motion.p variants={staggerItem}viewport={{ once: false, amount: 0.3 }}className='text-gray-700 leading-relaxed'>
                LALUZ Parfums không chỉ là một cửa hàng nước hoa, mà còn là biểu tượng của sự tinh tế, niềm đam mê và lòng kiên định của một chàng doanh nhân trẻ nhiệt huyết.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeIn} className='my-12'>
          
          <motion.h2 variants={slideFromLeft}viewport={{ once: false, amount: 0.3 }}className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'>
            LALUZ Parfums – Thiên đường nước hoa chính hãng
          </motion.h2>
          
          <div className='flex flex-col-reverse md:flex-row md:space-x-8 items-center mb-6'>
            <motion.div 
              variants={slideFromLeft}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full md:w-2/3 mt-6 md:mt-0'>
              <motion.div variants={staggerContainer}>
                <motion.p variants={staggerItem}className='text-gray-700 leading-relaxed mb-4 font-medium'> LALUZ Parfums là tâm huyết và tất cả sự đam mê
                </motion.p>
                <motion.p 
                  variants={staggerItem}
                  className='text-gray-700 leading-relaxed mb-4'>
                  Bước chân vào cửa hàng LALUZ, bạn sẽ choáng ngợp bởi không gian sang trọng, hiện đại cùng nhiều chai nước hoa đến từ các thương hiệu đình đám thế giới như Roja Parfums, Clive Christian, Argos Fragrances, Matiere Premiere, Liquides Imaginaires, Atelier Materi, Prada, Versace,… Chúng tôi liên tục cập nhật các xu hướng mùi hương với nhiều dòng nước hoa chính hãng đến từ các thương hiệu nổi tiếng nhất.
                </motion.p>
                <motion.p 
                  variants={staggerItem}
                  className='text-gray-700 leading-relaxed'>
                  Từng chai nước hoa đều được tuyển chọn kỹ lưỡng, đảm bảo nguồn gốc chính hãng, chất lượng cao cấp, nói KHÔNG với hàng Fake, hàng nhái. Tại LALUZ Parfums, bạn có thể thỏa sức khám phá và trải nghiệm những mùi hương độc đáo, đa dạng, từ hương thơm nhẹ nhàng, thanh tao đến hương thơm nồng nàn, quyến rũ.
                </motion.p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={slideFromRight}
              className='w-full md:w-1/3'>
              <div className='relative'>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Image 
                    src='/image/about/laluz-thien-duong-nuoc-hoa-cao-cap-768x512.jpg' 
                    alt='LALUZ - Thiên đường nước hoa' 
                    width={600} 
                    height={400}
                    className='rounded-lg shadow-md w-full h-auto'
                  />
                </motion.div>
                <p className='text-center text-sm text-gray-600 mt-2 italic'>LALUZ Parfums là tâm huyết và tất cả sự đam mê</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div initial="hidden"whileInView="visible" viewport={{ once: false, amount: 0.3 }}variants={fadeIn}className='my-12'>
          
          <motion.h2 variants={slideFromLeft}className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'>Mua sắm đẳng cấp tại LALUZ</motion.h2>
          
          <div className='flex flex-col md:flex-row md:space-x-8 items-center mb-6'>
            <motion.div 
              variants={slideFromLeft}
              className='w-full md:w-1/3 mb-6 md:mb-0'>
              <div className='relative'>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Image 
                    src='/image/about/doi-ngu-nhan-vien-laluz-chuyen-nghiep-768x512.jpg' 
                    alt='Đội ngũ nhân viên LALUZ' 
                    width={600} 
                    height={400}
                    className='rounded-lg shadow-md w-full h-auto'
                  />
                </motion.div>
                <p className='text-center text-sm text-gray-600 mt-2 italic'>Tư vấn tận tình, trải nghiệm mua sắm tốt nhất tại LALUZ</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={slideFromRight}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full md:w-2/3'>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.p 
                  variants={staggerItem}
                  className='text-gray-700 leading-relaxed mb-4'>
                  LALUZ Parfums không chỉ đơn thuần là một nơi bán nước hoa, mà còn là điểm đến cho những ai muốn tìm kiếm sự tư vấn chuyên nghiệp từ đội ngũ nhân viên am hiểu về mùi hương. Với niềm đam mê và sự tận tâm, chúng tôi sẽ giúp bạn lựa chọn được mùi hương phù hợp nhất với cá tính, sở thích và phong cách cá nhân. Showroom trưng bày đa dạng các dòng nước hoa cao cấp, được bài trí trong không gian sang trọng và tinh tế, cho phép khách hàng tự do thử nghiệm sản phẩm và chìm đắm trong thế giới hương thơm của riêng mình.
                </motion.p>
                <motion.p 
                  variants={staggerItem}
                  className='text-gray-700 leading-relaxed'>
                  Mỗi góc nhỏ trong Showroom đều có thể khơi gợi nguồn cảm hứng cho khách hàng, mang đến những trải nghiệm sang trọng, tinh tế và nhẹ nhàng. Tại đây, việc mua nước hoa không chỉ là quá trình trao đổi mua – bán, mà còn là một hành trình tìm kiếm và khẳng định giá trị độc đáo của mỗi khách hàng.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          className='my-12'>
          
          <motion.h2 variants={slideFromLeft} viewport={{ once: false, amount: 0.3 }} className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'>
           Quyền lợi của khách hàng đặt lên hàng đầu </motion.h2>
          
          <motion.p 
            variants={slideFromBottom}
            viewport={{ once: false, amount: 0.3 }}
            className='text-gray-700 leading-relaxed mb-6'>
            Chúng tôi cam kết mang đến dịch vụ khách hàng hoàn hảo, chuyên nghiệp. Nước hoa chính hãng được biết đến là sản phẩm có giá trị cao và cần bảo quản kỹ lưỡng. Tuy nhiên, cửa hàng chúng tôi vẫn áp dụng chính sách đổi trả sản phẩm trong vòng 15 ngày kể từ ngày mua hàng nếu phát hiện hàng lỗi, hư hỏng hoặc giao sai mẫu. Tại LALUZ Parfums, chất lượng sản phẩm và sự hài lòng của khách hàng luôn được chú trọng hàng đầu.
         </motion.p>
          
          <div className='flex flex-col md:flex-row md:space-x-8 items-center mb-6'>
            <motion.div variants={slideFromLeft}viewport={{ once: false, amount: 0.3 }} className='w-full md:w-1/3 mb-6 md:mb-0'>
              <div className='relative'>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                  <Image 
                    src='/image/about/nuoc-hoa-chinh-hang-tai-laluz-768x512.jpg' 
                    alt='Cam kết nước hoa chính hãng' 
                    width={600} 
                    height={400}
                    className='rounded-lg shadow-md w-full h-auto'
                  />
                </motion.div>
                <p className='text-center text-sm text-gray-600 mt-2 italic'>Cam kết 100% nước hoa chính hãng</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={slideFromRight}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full md:w-2/3'>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Nếu khách hàng phát hiện bất kỳ dấu hiệu nào về hàng giả hoặc sản phẩm không đạt chuẩn, chúng tôi sẽ đền bù 200% tổng giá trị đơn hàng. Đồng thời, mỗi chai nước hoa cũng đều được kiểm tra và bảo quản cẩn thận, đảm bảo mọi sản phẩm đến tay khách hàng đều đạt chất lượng hoàn hảo. Với những cam kết về chất lượng, LALUZ mong muốn mang lại những trải nghiệm mua sắm tuyệt vời, không chỉ là sự thoải mái và tiện lợi, mà còn là cơ hội để sở hữu những sản phẩm cao cấp với giá cả phải chăng.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className='mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='text-gray-700 leading-relaxed text-center italic'>
              Đến với LALUZ là đắm chìm trong thế giới mùi hương quyến rũ, tinh tế, đến với những trải nghiệm trọn vẹn và hài lòng nhất. Chúc quý khách mua sắm như ý và sở hữu những chai nước hoa độc nhất tại "phòng triển lãm mùi hương" LALUZ.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutPage