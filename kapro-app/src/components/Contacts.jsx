import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row md:mt-15' >
    <div className='bg-[#F4FAFF] px-9.5 py-11 rounded-3xl mr-11 max-w-[628px] w-full'>
      <form action="submit" className='flex flex-col'>
      <div className='relative w-full '><input type="text" placeholder='Ваше имя' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> <img src="person_FILL1_wght400_GRAD0_opsz48 (1) 1.svg" alt="" className='w-5.5 h-5.5 absolute right-6 top-4.5'/></div>
      <div className='relative w-full '><input type="text" placeholder='Введите ваш номер телефона' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> <img src="call_FILL1_wght400_GRAD0_opsz48 1.svg" alt="" className='w-5.5 h-5.5 absolute right-6 top-4.5'/></div>
      <div className='relative w-full '><input type="text" placeholder='Ваша электронная почта' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> <img src="mail_FILL1_wght400_GRAD0_opsz48 1.svg" alt="" className='w-5.5 h-5.5 absolute right-6 top-4.5'/></div>
      <div className='relative w-full '><input type="text" placeholder='Какой товар вы ищите или хотите доставить в Россию?' className='py-4 w-full pl-6 pr-12 bg-[#E6F1FA] rounded-[12px] mb-5'/> </div>
      
      <button className='py-4.5 px-11 md:px-35 bg-[#203253] rounded-2xl text-white hover:bg-[#72B3EA] transition-colors  duration-300 ease-in-out'>Получить 100$ скидку на доставку</button>
      <div className='text-base text-[#335D93] text-start mt-5'>Отправляя заявку вы соглашаетесь с <a className='underline' href=''>Условиями использования</a> и <a className='underline' href=''>Политикой конфиденциальности</a>, тем самым соглашаетесь на обработку персональных данных</div>
      </form>
    </div>
    <div className='mt-15 md:mt-0 mb-5 md:py-16 max-w-[603px]'>
      <div className='text-[24px] md:text-[40px] font-bold text-start mb-2.5 md:mb-5'>Рассчитайте стоимость доставки, отправив заявку</div>
      <div className='text-[14px] md:text-[18px] font-normal text-[#335D93] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div className='mb-6 md:mb-0 mt-12 md:mt-15 ml-5'>
        <div className='flex items-center gap-x-7.5 mb-7.5'>
          <img src="Group 21.svg" alt="" className='w-12 md:w-18 h-12 md:h-18'/>
          <div className='flex-col'>
            <div className='text-[16px] md:text-[24px] font-bold text-start'>WhatsApp & WeChat</div>
            <div className='text-[16px] md:text-[18px] text-start text-[#335D93]'>+86 19817983305</div>
          </div>
        </div>
        <div className='flex items-center gap-x-7.5'>
          <img src="Group 19.svg" alt="" className='w-12 md:w-18 h-12 md:h-18'/>
          <div className='flex-col'>
            <div className='text-[16px] md:text-[24px] font-bold text-start'>Электронная почта</div>
            <div className='text-[16px] md:text-[18px] text-start text-[#335D93]'>1325427621@qq.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contacts