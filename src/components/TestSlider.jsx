import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SolutionsSlider = () => {
  const images = [
    { src: './AMCs.png', text: 'Image 1',
     content:[ "Content for Image 1", "solution 2", "solution 3", "solution 4", "solution 4"]
     },
    { src: './AMCs.png', text: 'Image 2', content:[ "Content for Image 1", "solution 2", "solution 3", "solution 4", "solution 4"] },
    { src: './AMCs.png', text: 'Image 3', content:[ "Content for Image 1", "solution 2", "solution 3", "solution 4", "solution 4"] },
    { src: './AMCs.png', text: 'Image 4', content:[ "Content for Image 1", "solution 2", "solution 3", "solution 4", "solution 4"] },
    { src: './AMCs.png', text: 'Image 5', content:[ "Content for Image 1", "solution 2", "solution 3", "solution 4", "solution 4"] },
    { src: './AMCs.png', text: 'Image 6', content:[ "Content for Image 1", "solution 2", "solution 3", "solution 4", "solution 4"] },
    // Add more images as needed
  ];

  return (
    <div className='flex w-full mx-auto justify-center items-center'>
      <Swiper
        className='mt-[50px] text-white'
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => {
          // Stop autoplay on mouse enter
          swiper.el.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
          });

          // Start autoplay on mouse leave
          swiper.el.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
          });
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className='relative flex items-center group cursor-pointer overflow-hidden'
              initial={{ width: '100%' }}
              whileHover={{ width: '500px' }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={image.text} className='w-full h-[220px] object-cover' />
              <div className='absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2'>
                {image.text}
              </div>
              <div className='absolute right-0 top-0 bottom-0 text-white bg-black p-4 hidden group-hover:block'>
                {image.content.map((item,index) => (<div key={index}>{item}</div>))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SolutionsSlider;