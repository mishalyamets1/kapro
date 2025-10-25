import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
const GridMini = () => {
    const [activeCard, setActiveCard] = useState(0)
     
    const cards = [
        {img: "icon (11).svg", title:"Авиа перевозки"},
        {img: "icon (12).svg", title:"Авто перевозки"},
        {img: "icon (13).svg", title:"Ж/Д перевозки"},
        {img: "icon (14).svg", title:"Морские перевозки"},
    ]
    const slideCount = Math.ceil(cards.length / 2)
  return (
    <div className=''>
      <div className='md:flex gap-x-47'>
        <div className=' text-[24px] md:text-[40px] font-bold text-start text-[#203253] mb-2.5'>Выберите подходящий вариант доставки</div>
        <div className='text-[#335D93] text-[14px] md:text-[18px] font-base text-start mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div className='hidden md:flex gap-x-5 mt-15'>
        {cards.map((f,i) => (
            <div className='bg-[#F4FAFF] py-12 px-8.5 rounded-4xl min-w-0 mx-auto'>

        <div className='flex flex-col items-start max-w-[224px] '>
          <img src={f.img} alt="" className='w-16 h-16 mb-7'/>
          <div className='text-[24px] font-bold text-[#203253] mb-5 max-w-[127px] text-start'>{f.title}</div>
          <div className='text-[20px] text-[#335D93] font-base mb-2.5'>6-10 дней</div>
          <div className='text-[20px] text-[#203253] font-semibold mb-10 '>от $5.5 за кг</div>
          <button className='bg-[#203253] px-19.5 py-4.5  rounded-2xl max-w-[224px] min-w-0 w-full mx-auto text-white cursor-pointer hover:bg-[#72B3EA] transition-colors duration-300 ease-in-out'>Заказать</button>
        </div>
        </div>
        ))}
      </div>
      <div className='block md:hidden px-5'>
          <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{clickable:true}}
          onSlideChange={swiper => setActiveCard(swiper.activeIndex)}
          >
            {cards.map((f, i) => (
              <SwiperSlide key={i}>
                <div className='bg-[#F4FAFF] py-12 px-8.5 rounded-4xl min-w-0 mx-auto'>
                  <div className='flex flex-col items-start max-w-[224px] '>
          <img src={f.img} alt="" className='w-16 h-16 mb-7'/>
          <div className='text-[24px] font-bold text-[#203253] mb-5 max-w-[127px] text-start'>{f.title}</div>
          <div className='text-[20px] text-[#335D93] font-base mb-2.5'>6-10 дней</div>
          <div className='text-[20px] text-[#203253] font-semibold mb-10 '>от $5.5 за кг</div>
          <button className='bg-[#203253] px-19.5 py-4.5 rounded-2xl max-w-[224px] min-w-0 w-full active:bg-[#72B3EA] mx-auto text-white cursor-pointer hover:bg-[#72B3EA] transition-colors duration-300 ease-in-out'>Заказать</button>
        </div></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <img src="Group 48.svg" alt="" className='mx-auto'/>
        </div>
    </div>
  )
}

export default GridMini