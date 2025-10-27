import React, {useState} from 'react'

const Irrigator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
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
    <button 
    onClick={openModal}
    className='bg-[#203253] active:bg-[#72B3EA] cursor-pointer text-white w-full max-w-full  md:max-w-[195px] flex justify-center py-3 md:py-4.5 px-22 md:px-15.5 rounded-2xl mt-7.5 mb-7 md:mb-0 hover:bg-[#72B3EA] transition-colors duration-200 md:duration-500 ease-in-out'>
      Заказать
      </button>
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
      </div>
      {isModalOpen && (
        <div onClick={closeModal}  className='flex justify-center items-center mx-auto h-screen w-screen bg-black/50 fixed inset-0 z-50'>
        <div onClick={(e) => e.stopPropagation()} className='bg-[#F4FAFF] px-5 md:px-9.5 py-9.5 md:py-11 rounded-3xl mr-11 max-w-[280px] md:max-w-[628px] w-full ' >
          <div className='flex items-center justify-between mb-5 md:mb-15'>
            <div className='text-[24px] md:text-[48px] text-start font-bold text-[#203253]'>Заполните форму</div>
            <button><img src="close_FILL0_wght700_GRAD0_opsz48 1.svg" onClick={closeModal} className='cursor-pointer'/></button>
          </div>
      <div  className='flex flex-col'>
      <div className='relative w-full '><input type="text" placeholder='Ваше имя' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> <img src="person_FILL1_wght400_GRAD0_opsz48 (1) 1.svg" alt="" className='w-5.5 h-5.5 absolute right-6 top-4.5'/></div>
      <div className='relative w-full '><input type="text" placeholder='Введите ваш номер телефона' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> <img src="call_FILL1_wght400_GRAD0_opsz48 1.svg" alt="" className='w-5.5 h-5.5 absolute right-6 top-4.5'/></div>
      <div className='relative w-full '><input type="text" placeholder='Ваша электронная почта' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> <img src="mail_FILL1_wght400_GRAD0_opsz48 1.svg" alt="" className='w-5.5 h-5.5 absolute right-6 top-4.5'/></div>
      <div className='relative w-full '><input type="text" placeholder='Какой товар вы ищите или хотите доставить в Россию?' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> </div>
      
      <button className='py-4.5 px-11 md:px-35 bg-[#203253] rounded-2xl text-white active:bg-[#72B3EA] hover:bg-[#72B3EA] transition-colors  duration-300 ease-in-out'>Получить 100$ скидку на доставку</button>
      <div className='text-base text-[#335D93] text-start mt-5'>Отправляя заявку вы соглашаетесь с <a className='underline' href=''>Условиями использования</a> и <a className='underline' href=''>Политикой конфиденциальности</a>, тем самым соглашаетесь на обработку персональных данных</div>
      </div>
    </div>
    </div>
      )}
      </div>
  )
}

export default Irrigator