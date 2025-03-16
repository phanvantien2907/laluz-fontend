import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLongArrowAltDown } from "react-icons/fa";


const ContentHome = () => {
  const [expanded, setExpanded] = useState(true);
 
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl border-t border-gray-200'>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className='mb-10'
      >
        <p className='text-lg text-gray-700 leading-relaxed'>
          Sử dụng <b>nước hoa</b> được xem là một cách thể hiện cá tính và phong cách của bản thân. 
          Một mùi hương phù hợp sẽ giúp bạn ghi điểm trong mắt người đối diện và thu hút mọi ánh nhìn.
          Hiện nay trên thị trường có rất nhiều sản phẩm nước hoa chính hãng, đa dạng cả về thương hiệu,
          mùi hương và giá cả. Nếu bạn đang tìm kiếm một chai perfume ưng ý thì hãy khám phá ngay top 10
          thương hiệu cao cấp mà <b className='text-red-700'>LALUZ Parfums</b> đã tổng hợp thông qua bài viết dưới đây.
        </p>
      </motion.div>

      {/* Origin of Perfume Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={staggerContainer}
        className='mb-16 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'
      >
        <motion.h2 variants={fadeInUp} className='text-3xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4'>
          Nguồn gốc của nước hoa
        </motion.h2>
        
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <motion.div variants={fadeInUp}>
            <p className='text-gray-600 mb-4 leading-relaxed'>
              Theo một số tư liệu được ghi chép lại, nguồn gốc của nước hoa bắt đầu từ thời Ai Cập cổ đại.
              Vào thời điểm này, họ sử dụng các loại thảo mộc, gỗ thơm hoặc rễ cây để làm hương liệu cho các nghi lễ tế thần.
              Không dừng lại ở đó, người Ai Cập còn chế tạo các loại tinh dầu, thuốc mỡ có khả năng lưu hương trong thời gian dài để bôi lên cơ thể hay bỏ vào túi vải rồi đặt trong quần áo.
            </p>
            <p className='text-gray-600 mb-4 leading-relaxed'>
              Từ "Perfume" của ngày nay cũng xuất phát từ chữ "fumus" nghĩa là khói trong tiếng Latin, 
              ám chỉ cách dùng nước hoa như một loại chất đốt để lan tỏa mùi hương trong các nghi lễ tôn giáo xưa. 
              Khoảng 200 năm sau, người La Mã đã phát triển, chiết xuất các loại nước hoa từ cỏ thơm như húng tây, xô thơm, 
              kinh giới ô, lily,... và đựng trong những lọ thủy tinh để bảo quản. Đây cũng chính là tiền thân cho các thế hệ dầu thơm hiện đại sau này.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Mãi cho đến thế kỷ XVI, perfume mới chính thức có mặt tại Châu Âu và đây cũng là lúc ngành công nghiệp nước hoa phát triển rực rỡ. 
              Cụ thể hơn, nước Pháp là nơi khởi nguồn cho những sự bùng nổ của rất nhiều thương hiệu nước hoa luxury danh giá và nổi tiếng cho đến tận ngày nay. 
              Hiện tại, thế giới nước hoa không ngừng phát triển, mở rộng tạo nên sự đa dạng về mùi hương và thương hiệu. 
              Theo đó, người dùng có thể lựa chọn những nhãn hàng bình dân với mức giá dễ chịu, cho đến các thương hiệu nước hoa cao cấp với mức giá xa xỉ.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className='flex justify-center'
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src='/image/about/nguon-goc-cac-loai-nuoc-hoa.jpg'
                alt='Nguồn gốc nước hoa'
                width={500}
                height={750}
                className='rounded-lg shadow-md object-cover max-h-[500px] w-auto'
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Classification of Perfumes Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-200px" }}
        variants={staggerContainer}
        className='mb-16 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'>

        <motion.h2 variants={fadeInUp} className='text-3xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4'>
          Phân loại các loại nước hoa cao cấp chính hãng
        </motion.h2>
        
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <motion.div variants={fadeInUp}>
            <p className='text-gray-600 mb-4 leading-relaxed'>
              Tỷ lệ tinh dầu trong thành phần là cách phân biệt các loại nước hoa phổ biến nhất. 
              Tùy vào nồng độ tinh dầu mà nước hoa hàng hiệu được chia thành 5 loại chính như sau:
            </p>
            
            <div className='space-y-4'>
              <motion.div 
                variants={fadeInUp}
                className='p-3 rounded-lg bg-gradient-to-r from-amber-50 to-white border border-amber-100'
              >
                <p className='text-gray-700'>
                  <b className='text-amber-700'>Parfum</b>: Đây là loại dầu thơm rất đắt tiền vì chúng chứa 20 - 30% tinh chất nên có độ lưu hương lâu hơn. Theo đó, người dùng sẽ sử dụng ít hơn nên thường được bán với dung tích nhỏ.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className='p-3 rounded-lg bg-gradient-to-r from-amber-50 to-white border border-amber-100'
              >
                <p className='text-gray-700'>
                  <b className='text-amber-700'>Eau de Parfum (EDP)</b>: Eau de Parfum cũng khá đậm đặc và lưu hương lâu khi chứa 15 - 20% tinh chất nước hoa. Đây là loại thơm lâu được dùng phổ biến nhất hiện nay vì người dùng có thể sử dụng trong nhà hay ở không gian ngoài trời.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className='p-3 rounded-lg bg-gradient-to-r from-amber-50 to-white border border-amber-100'
              >
                <p className='text-gray-700'>
                  <b className='text-amber-700'>Eau de Toilette (EDT)</b>: Eau de Toilette có nồng độ tinh chất nước hoa từ 10 - 15% với độ bền hương ở mức tương đối. EDT cũng là loại được nhiều người ưa chuộng bởi giá thành hợp lý với mùi hương nhẹ nhàng, thanh thoát.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className='p-3 rounded-lg bg-gradient-to-r from-amber-50 to-white border border-amber-100'
              >
                <p className='text-gray-700'>
                  <b className='text-amber-700'>Eau de Cologne</b>: Loại dầu thơm này thường chứa khoảng 5 - 7% tinh chất nước hoa. Eau de Cologne thích hợp sử dụng ở nơi có khí hậu nóng và dùng trong không gian hẹp, ít phải hoạt động ngoài trời nên thuộc loại dành cho mùa hè.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className='p-3 rounded-lg bg-gradient-to-r from-amber-50 to-white border border-amber-100'
              >
                <p className='text-gray-700'>
                  <b className='text-amber-700'>Eau Fraiche</b>: Theo đó, nước hoa sẽ có nồng độ tinh dầu dưới 3%. Eau Fraiche thường có mùi hương nhẹ nhàng, lưu hương chưa đầy 1 tiếng nên là loại nước hoa giá rẻ nhất.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className='flex justify-center'
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src='/image/about/phan-loai-cac-loai-nuoc-hoa.jpg'
                alt='Phân loại nước hoa'
                width={500}
                height={750}
                className='rounded-lg shadow-md object-cover max-h-[500px] w-auto'
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Components in Perfumes Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-200px" }}
        variants={staggerContainer}
        className='mb-16 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'
      >
        <motion.h2 variants={fadeInUp} className='text-3xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4'>
          Thành phần có trong nước hoa hàng hiệu
        </motion.h2>
        
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <motion.div variants={fadeInUp}>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Dầu thơm chính hãng thường bao gồm các thành phần như cồn, tinh dầu và một số hoạt chất hóa học khác.
              Mỗi thành phần sẽ có một vai trò riêng nhưng khi kết hợp lại sẽ tạo nên mùi hương riêng biệt.
              Cụ thể, các nhãn hàng nước hoa chiết chính hãng sẽ không thể bỏ qua các thành phần chính như:
            </p>
            
            <div className='space-y-3'>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className='flex border-l-2 border-amber-400 pl-3'
              >
                <p className='text-gray-700 leading-relaxed'>
                  <b>Dầu nền</b>: Dầu dẫn hay dầu nền thường được chiết xuất từ các loại hạt và các loại quả. Dầu nền thường không có màu, không có mùi hoặc có mùi rất nhẹ và lành tính nên được sử dụng thêm khi điều chế sản phẩm nước hoa.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className='flex border-l-2 border-amber-400 pl-3'
              >
                <p className='text-gray-700 leading-relaxed'>
                  <b>Tinh dầu</b>: Tinh dầu tồn tại ở dạng lỏng và chứa các hợp chất thơm dễ bay hơi. Các loại tinh dầu thường được chiết xuất từ thân, lá, vỏ, rễ cây hoặc những bộ phận khác của thực vật. Mỗi loại tinh dầu sẽ có hương thơm đặc trưng, khi kết hợp với nhau sẽ tạo ra mùi hương độc đáo.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className='flex border-l-2 border-amber-400 pl-3'
              >
                <p className='text-gray-700 leading-relaxed'>
                  <b>Cồn</b>: Cồn được coi là thành phần chủ yếu, chiếm khoảng 50 - 70% bảng thành phần của một chai nước hoa đạt chuẩn. Theo đó, cồn sẽ giúp bảo quản mùi hương, hỗ trợ lan toả hương thơm vô cùng hiệu quả.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className='flex border-l-2 border-amber-400 pl-3'
              >
                <p className='text-gray-700 leading-relaxed'>
                  <b>Nước</b>: Thông thường, perfume sẽ chứa từ 50 - 70% là cồn, phần còn lại gồm có dầu nền, nước, tinh dầu và một số hợp chất hóa học khác. Tuy không chiếm tỉ lệ cao nhưng nước cũng là thành phần không thể thiếu khi điều chế nước hoa.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className='flex border-l-2 border-amber-400 pl-3'
              >
                <p className='text-gray-700 leading-relaxed'>
                  <b>Dung môi</b>: Đây là chất có công dụng nhũ hóa tinh dầu, nước, hương liệu và các hợp chất hóa học mà không làm đục màu sản phẩm. Dung môi cũng có tác dụng giữ mùi hương nước hoa trên da được lâu lơn.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className='flex justify-center'
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src='/image/about/thanh-phan-co-trong-nuoc-hoa-hang-hieu.jpg'
                alt='Nước hoa chính hãng'
                width={500}
                height={750}
                className='rounded-lg shadow-md object-cover max-h-[500px] w-auto'
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Top Brands Section - Show only if expanded */}
      {expanded && (
        <>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-200px" }}
            variants={staggerContainer}
            className='mb-16 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'
          >
            <motion.h2 variants={fadeInUp} className='text-3xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4'>
              Top 10+ thương hiệu nước hoa chính hãng được bán chạy nhất
            </motion.h2>
            
            <motion.p variants={fadeInUp} className='text-gray-600 mb-8 leading-relaxed'>
              Một chai nước hoa cao cấp phù hợp không chỉ giúp người dùng trở nên tự tin hơn, mà còn giúp họ thể hiện được cá tính và phong cách. Dưới đây là danh sách tổng hợp 10 thương hiệu dầu thơm chính hãng bán chạy nhất hiện nay.
            </motion.p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Brand Cards */}
              <motion.div 
                variants={fadeInUp}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='relative h-60 overflow-hidden'>
                  <Image
                    src='/image/about/thuong-hieu-nuoc-hoa-roja-parfums-cua-anh.jpg'
                    alt='thương hiệu nước hoa roja'
                    fill
                    className='object-cover transform hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Roja Parfums</h3>
                  <p className='text-gray-600 text-sm'>
                    Thương hiệu nước hoa đình đám đến từ Vương Quốc Anh, nổi tiếng với sự sang trọng vượt trội và tinh tế trong từng giọt hương.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='relative h-60 overflow-hidden'>
                  <Image
                    src='/image/about/thuong-hieu-nuoc-hoa-versace.jpg'
                    alt='thương hiệu nước hoa versace'
                    fill
                    className='object-cover transform hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Versace</h3>
                  <p className='text-gray-600 text-sm'>
                    Thương hiệu nước hoa Mỹ nổi bật với những thiết kế kỳ công cùng mùi hương quyến rũ, tạo nên một đẳng cấp thực thụ cho người dùng.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='relative h-60 overflow-hidden'>
                  <Image
                    src='/image/about/yves-saint-laurent-perfume.jpg'
                    alt='thương hiệu nước hoa ysl'
                    fill
                    className='object-cover transform hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Yves Saint Laurent</h3>
                  <p className='text-gray-600 text-sm'>
                    Thương hiệu nước hoa Pháp đình đám, chinh phục người dùng nhờ những nốt hương lôi cuốn, quyến rũ dành cho cả nam và nữ.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='relative h-60 overflow-hidden'>
                  <Image
                    src='/image/about/chanel-perfume.jpg'
                    alt='thương hiệu nước hoa channel'
                    fill
                    className='object-cover transform hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Chanel</h3>
                  <p className='text-gray-600 text-sm'>
                    Thương hiệu nước hoa Pháp đẳng cấp hàng đầu thế giới, mang lại mùi hương dễ chịu và quyến rũ, thể hiện cá tính người dùng.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='relative h-60 overflow-hidden'>
                  <Image
                    src='/image/about/dior-perfume.jpg'
                    alt='thương hiệu nước hoa dior'
                    fill
                    className='object-cover transform hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Dior</h3>
                  <p className='text-gray-600 text-sm'>
                    Thương hiệu mang đến mùi hương dịu nhẹ, cổ điển và thanh lịch với thiết kế tinh tế, tối giản nhưng vô cùng đẳng cấp.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <div className='relative h-60 overflow-hidden'>
                  <Image
                    src='/image/about/gucci-perfume.jpg'
                    alt='thương hiệu nước hoa gucci'
                    fill
                    className='object-cover transform hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Gucci</h3>
                  <p className='text-gray-600 text-sm'>
                    Thương hiệu dầu thơm cao cấp từ Ý, nổi bật với sự sáng tạo trong việc điều chế mùi hương đa dạng cho cả nam và nữ.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* LALUZ Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-200px" }}
            variants={staggerContainer}
            className='mb-16 bg-gradient-to-r from-amber-50 to-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300'
          >
            <motion.h2 variants={fadeInUp} className='text-3xl font-bold mb-6 text-gray-800 border-l-4 border-amber-500 pl-4'>
              LALUZ - Shop mua nước hoa Auth cao cấp tại Hà Nội
            </motion.h2>
            
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <motion.div variants={fadeInUp}>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Nước hoa là một trong những món phụ kiện thời trang quan trọng giúp người dùng thêm phần tự tin và nổi bật. Thế nhưng, với sự đa dạng của các thương hiệu trên thị trường, việc lựa chọn được một shop nước hoa bán sản phẩm chính hãng, cao cấp với giá thành ưu đãi không phải là điều dễ dàng.
                </p>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Nếu bạn đang tìm kiếm một địa chỉ mua nước hoa hàng hiệu chính hãng, cao cấp thì LALUZ sẽ là một lựa chọn lý tưởng dành cho bạn. LALUZ là một cửa hàng nước hoa cao cấp tại Hà Nội chuyên cung cấp các sản phẩm từ các thương hiệu danh tiếng trên thế giới như Chanel, Dior, Gucci, Yves Saint Laurent, Montblanc,...
                </p>
                <p className='text-gray-600 leading-relaxed'>
                  Tại địa chỉ bán nước hoa LALUZ, khách hàng sẽ được tư vấn và lựa chọn nước hoa phù hợp với phong cách, sở thích và cá tính của bản thân. Đồng thời, chúng tôi cũng cam kết luôn mang đến cho khách hàng những sản phẩm chính hãng, có đầy đủ giấy tờ chứng minh nguồn gốc xuất xứ và đảm bảo chất lượng.
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className='flex justify-center'
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src='/image/about/cua-hang-ban-nuoc-hoa-laluz-parfums.jpg'
                    alt='thương hiệu nước hoa tom ford'
                    width={500}
                    height={750}
                    className='rounded-lg shadow-md object-cover max-h-[500px] w-auto'
                  />
                </motion.div>
              </motion.div>
            </div>
            <p className='text-gray-600 leading-relaxed'>
              Tại địa chỉ bán nước hoa LALUZ, khách hàng sẽ được tư vấn và lựa chọn nước hoa phù hợp với phong cách, sở thích và cá tính của bản thân. Đồng thời, chúng tôi cũng cam kết luôn mang đến cho khách hàng những sản phẩm chính hãng, có đầy đủ giấy tờ chứng minh nguồn gốc xuất xứ và đảm bảo chất lượng. Hãy đến với Cửa hàng nước hoa chính hãng LALUZ để được trải nghiệm và sở hữu những chai dầu thơm đẳng cấp cho riêng mình.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Tóm lại, nước hoa chính hãng là một lựa chọn tuyệt vời cho những ai yêu thích sự sang trọng, quyến rũ và đẳng cấp. Không chỉ bởi hương thơm độc đáo mà nước hoa hàng hiệu còn giúp người dùng khẳng định vị thế xã hội. Vì vậy, nếu bạn đang tìm kiếm một chai dầu thơm chất lượng cao, lâu phai và hương thơm như ý, hãy đến với LALUZ ngay hôm nay.
            </p>
          </motion.section>
        </>
      )}

      <div className="flex justify-center mt-8 mb-12">
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="px-8 py-3 border-2 border-[#9C8679] rounded-full font-medium text-[#9C8679] hover:bg-[#9C8679] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9C8679] focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {expanded ? (
            <span className="flex items-center">
              RÚT GỌN <motion.span animate={{ rotate: 180 }} className="ml-2"><FaLongArrowAltDown/></motion.span>
            </span>
          ) : (
            <span className="flex items-center">
              XEM THÊM <motion.span className="ml-2"><FaLongArrowAltDown/></motion.span>
            </span>
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default ContentHome

