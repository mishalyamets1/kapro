import React from 'react'

const Irrigator = () => {
  return (
    <div><div className='flex flex-col md:flex-row gap-x-11 items-start bg-[#F4FAFF] rounded-[24px]'>
    <div className=''>
    <div className='bg-[#E6F1FA] max-w-[175px] h-11 flex items-center  '>
      <div className='mx-auto'> пример кейса</div>
    </div>
    <div className='max-w-[410px] text-[24px] md:text-[36px] font-bold place-start flex mt-4 whitespace-nowrap' >Доставка ирригаторов</div>
    <div className='font-base text-[14px] md:text-[18px] text-start max-w-[560px] mt-7.5 text-[#335D93] mx-auto'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div className=' hidden md:flex gap-x-15 mt-7.5'>
      <div>
        <span className='font-base text-[18px] text-start max-w-[560px] mt-7.5 text-[#335D93] whitespace-nowrap'>Стоимость доставки</span>
        <div className='flex items-center gap-x-1'>
          <img src="currency_yen_FILL0_wght700_GRAD0_opsz48 1.svg" alt="" className='h-6 w-6'/>
          <span className='text-[24px] font-semibold'>000</span>
        </div>
      </div>
      <div>
        <span className='font-base text-[18px] text-start max-w-[560px] mt-7.5 text-[#335D93] whitespace-nowrap'>Срок доставки</span>
        <div className='flex items-center gap-x-1'>
          <img src="avg_pace_FILL0_wght700_GRAD0_opsz48 1.svg" alt="" className='h-6 w-6'/>
          <span className='text-[24px] font-semibold whitespace-nowrap'>00 дня </span>
        </div>
      </div>
      <div>
        <span className='font-base text-[18px] text-start max-w-[560px] mt-7.5 text-[#335D93] whitespace-nowrap'>Геопозиция</span>
        <div className='flex items-center gap-x-1'>
          <img src="location_on_FILL0_wght700_GRAD0_opsz48 2.svg" alt="" className='h-6 w-6'/>
          <span className='text-[24px] font-semibold'>Москва</span>
        </div>
      </div>
    </div>
    <button className='bg-[#203253] cursor-pointer text-white w-full max-w-full  md:max-w-[195px] flex justify-center py-3 md:py-4.5 px-22 md:px-15.5 rounded-2xl mt-7.5 mb-7 md:mb-0 hover:bg-[#72B3EA] transition-colors duration-500 ease-in-out'>Заказать</button>
    </div>

      <div>
        <img src="img.svg" alt="" className=' '/> 
      </div>
      
  </div>
      <div className='hidden md:block mt-10'>
        <img src="Frame 46.svg" alt=""/>
      </div>
      <div className='md:hidden mx-auto mt-6'>
        <img src="Group 47.svg" alt="" />
      </div></div>
  )
}

export default Irrigator