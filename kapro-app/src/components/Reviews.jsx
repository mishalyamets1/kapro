import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Reviews = () => {
    const [activeRewiew, setActiveRewiew] = useState(0)
    const rewiews = [
        {image: "Ellipse 3.svg", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Имя Фамилия"},
        {image: "Ellipse 3.svg", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", name: "Имя Фамилия"},
    ]
  return (
    <div className='mt-15'>
    <div className='md:flex items-center gap-x-47 mb-6 md:mb-10'>
      <div className='text-[24px] md:text-[40px] font-bold text-start text-[#203253] mb-2.5'>Отзывы о нашей работе</div>
      <div className='text-[14px] md:text-[18px] font-base text-start text-[#335D93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    
    <div className='hidden md:grid grid-cols-2 gap-x-5 '>
        {rewiews.map((f,i)=> (
        <div className='bg-[#F4FAFF] rounded-3xl py-5 md:py-12.5 px-5 md:px-9.5 w-full max-w-[628px] mb-5'>
            <div className='flex gap-x-7.5 mb-4 md:mb-7.5'>
              <div className='text-2xl font-bold'>Отзыв</div>
              <img src="rating.svg" alt=""/>
            </div>
            <div className='text-start max-w-[553px] text-[14px] md:text-base w-full text-[#335D93]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='flex items-center gap-x-4 mt-7.5'>
              <img src={f.image} alt="" className='w-8 md:w-12 h-8 md:h-12'/>
              <div className='text-[12px] md:text-[18px] font-bold'>{f.name}</div>
            </div>
        </div>
    ))}
        
    </div>
    <div className='block md:hidden'>
        <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        spaceBetween={16}
        onSlideChange={swiper => setActiveRewiew(swiper.activeIndex)}
        >
            {rewiews.map((f,i)=> (
                <SwiperSlide key={i}>
        <div className='bg-[#F4FAFF] rounded-3xl py-5 md:py-12.5 px-5 md:px-9.5 mr-5 mb-5'>
            <div className='flex gap-x-7.5 mb-4 md:mb-7.5'>
              <div className='text-2xl font-bold'>Отзыв</div>
              <img src="rating.svg" alt=""/>
            </div>
            <div className='text-start max-w-[553px] text-[14px] md:text-base w-full text-[#335D93]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='flex items-center gap-x-4 mt-7.5'>
              <img src={f.image} alt="" className='w-8 md:w-12 h-8 md:h-12'/>
              <div className='text-[12px] md:text-[18px] font-bold'>{f.name}</div>
            </div>
        </div>
        </SwiperSlide>
    ))}
        </Swiper>
    </div>
    <img src="Group 49.svg" alt="" className='mx-auto md:hidden'/>
  </div>
  )
}

export default Reviews