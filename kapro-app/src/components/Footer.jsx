import React from 'react'

const Footer = () => {
  return (
    
    <footer className='bg-[#203253] relative left-1/2 w-screen -translate-x-1/2 mt-15 py-12'>
      <div className='mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between '>
      <div className='flex flex-col'>
        <div className='mb-10 '><img src="logo (1).svg" alt="" className='min-w-[217px] h-auto cursor-pointer'/></div>
        <div><img src="logo (2).svg" alt="" className='min-w-[187px] h-auto cursor-pointer mb-10 md:mb-0'/></div>
      </div>
      <div className='mb-10 md:mb-0'>
        <ul className="flex flex-col md:flex-row gap-y-2.5 items-center gap-x-16 text-white whitespace-nowrap  flex-nowrap min-w-0">
      <li className="cursor-pointer hover:text-[#72B3EA]  active:text-[#72B3EA] text-[20px]  transition-colors ">Главная</li>
      <li className="cursor-pointer hover:text-[#72B3EA] active:text-[#72B3EA] text-[20px] transition-colors">Ваш менеджер</li>
      <li className="cursor-pointer hover:text-[#72B3EA] active:text-[#72B3EA] text-[20px] transition-colors">Вопросы и ответы</li>
      <li className="cursor-pointer hover:text-[#72B3EA] active:text-[#72B3EA] text-[20px] transition-colors">Контакты</li>
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
    
  )
}

export default Footer