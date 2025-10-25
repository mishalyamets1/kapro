import { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import GridSection from './components/GridSection'
import OurCases from './components/OurCases'
import Irrigator from './components/Irrigator'
import GridMini from './components/GridMini'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col w-full min-w-0">
  <Header />
  <Hero/>
  <GridSection/>
  <OurCases/>
  <Irrigator/>
  <GridMini/>
  <Reviews/>
  <Contacts/>
  <div id='root' className=''>
    <footer className='bg-[#203253] w-[100vw] ml-[calc(50%-50vw)]  mt-15 py-12  '>
      <div className='mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between '>
      <div className='flex flex-col'>
        <div className='mb-10 '><img src="logo (1).svg" alt="" className='min-w-[217px] h-auto cursor-pointer'/></div>
        <div><img src="logo (2).svg" alt="" className='min-w-[187px] h-auto cursor-pointer mb-10 md:mb-0'/></div>
      </div>
      <div className='mb-10 md:mb-0'>
        <ul className="flex flex-col md:flex-row gap-y-2.5 items-center gap-x-16 text-white whitespace-nowrap  flex-nowrap min-w-0">
      <li className="cursor-pointer hover:text-[#72B3EA] text-[20px]  transition-colors ">Главная</li>
      <li className="cursor-pointer hover:text-[#72B3EA] text-[20px] transition-colors">Ваш менеджер</li>
      <li className="cursor-pointer hover:text-[#72B3EA] text-[20px] transition-colors">Вопросы и ответы</li>
      <li className="cursor-pointer hover:text-[#72B3EA] text-[20px] transition-colors">Контакты</li>
    </ul>
      </div>
      <div className='flex flex-col items-center gap-y-5'>
        <div className='flex gap-x-10'>
          <img src="wechat 1.svg" alt="" className='cursor-pointer'/>
          <img src="whatsapp 1.svg" alt="" className='cursor-pointer'/>
        </div>
        <div><img src="QR.svg" alt="" className=' md:min-w-35 cursor-pointer'/></div>
      </div>
      </div>
    </footer>
    </div>
</div>


  )
}



