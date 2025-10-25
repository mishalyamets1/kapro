import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
const GridSection = () => {

    const [activeIdx, setActiveIdx] = useState(0)

    const advantages =[
        {icon: 'icon.svg ', title: "Помощь в поиске товара"},
        {icon: 'icon (1).svg', title: "Работаем с ООО и ИП (ТОРГ-12)"},
        {icon: 'icon (2).svg', title: "Документы для возврата НДС (20%)"},
        {icon: 'icon (3).svg', title: "Возможна оплата на карту или наличными в МСК"},
        {icon: 'icon (4).svg', title: "Оплата по счету за товар в Китае за 10 минут"},
        {icon: 'icon (5).svg', title: "Поддержка 24/7 онлайн"},
        {icon: 'icon (6).svg', title: "3 офиса в Китае: Пекин, Гуанчжоу, Иу"},
        {icon: 'icon (7).svg', title: "Гарантия лучшей цены"},
        {icon: 'icon (8).svg', title: "Таможенный представитель (декларант)"},
        {icon: 'icon (10).svg', title: "Экспедирование груза"},
]
    const slidesCount = Math.ceil(advantages.length / 2)
    const ship = (activeIdx / (slidesCount-1)) * 330 +50
  return (
    <div className='mt-18 text-start mx-auto w-full items-center mb-15'>
  <div className='text-[24px] md:text-[40px] font-bold'>Наши преимущества</div>
  <div className='text-[14px] md:text-[18px] font-normal text-[#335D93] max-w-[620px] mt-2.5'>Мы предоставляем полный перечень услуг для качественного ведения товарного бизнеса в России</div>
  <div className='hidden md:grid grid-cols-5 grid-rows-2 mt-10'>
    {advantages.map((f, i) => (
        <div key={i} className='max-h-[182px] flex justify-center pl-8.5 pt-5.5 pr-8 pb-13.5 bg-[#F4FAFF] rounded-[24px] mb-5 mr-5'>
      <div className='flex flex-col max-w-[170px]  text-base font-bold  ' >
        <img src={f.icon} alt="" className='w-12 h-12 mb-2.5 '/>
        {f.title}
        </div>
      </div>
    ))}
    </div>
    <div className='block md:hidden mt-10'>
        <Swiper 
        slidesPerView={2}
        spaceBetween={16}
        pagination={{clickable: true}}
        onSlideChange={swiper=> setActiveIdx(swiper.activeIndex)}
        >
           { Array.from({length: slidesCount}).map((_, i)=> (
                <SwiperSlide key={i}>
                    <div className='flex flex-col gap-6 items-start px-5'>
                    <div className='flex flex-col max-w-[129px] text-base font-bold'>
                        <img src={advantages[i*2]?.icon} alt="" className='w-18 h-18 mb-2.5 '/>
                            {advantages[i*2]?.title}
                    </div>
                    {advantages[i*2+1] && (
                        <div className='flex flex-col  max-w-[129px] text-base font-bold'>
                        <img src={advantages[i*2+1].icon} alt="" className='w-18 h-18 mb-2.5 '/>
                            {advantages[i*2+1].title}
                    </div>
                    )}
                    </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  <div className='mt-5 relative flex md:hidden justify-center items-start w-[410px] '>
        <img src="barge 1.svg" alt="" className='absolute transition-all duration-300' style={{left: `${ship}px`, top: -20, width: 44}}/>
        <img src="dashed line.svg" alt="" />
  </div>
</div>
  )
}

export default GridSection