import React, { useEffect, useState } from 'react'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    useEffect(()=>{
        console.log(openMenu)
    },[openMenu])
  return (
    <>
    <header className="mx-auto w-full px-4 md:px-6 py-4 md:py-6 overflow-x-hidden  flex">
      
       <div className='flex w-full  items-center min-w-0'>
    <a href="#"><img src="/logo.svg" alt="logo" className="w-[175px] h-auto" /></a>
  
  {/* <div className="flex flex-1 justify-center "> */}
    <ul className="hidden md:flex items-center gap-x-16 text-gray-700 whitespace-nowrap  flex-nowrap min-w-0 ml-auto ">
      <li className="cursor-pointer hover:text-[#72B3EA] transition-colors ">Главная</li>
      <li className="cursor-pointer hover:text-[#72B3EA] transition-colors">Ваш менеджер</li>
      <li className="cursor-pointer hover:text-[#72B3EA] transition-colors">Вопросы и ответы</li>
      <li className="cursor-pointer hover:text-[#72B3EA] transition-colors">Контакты</li>
    </ul>
  </div>
{/* </div> */}
      
    <div 
    className='flex md:hidden  flex-col gap-1  w-10 h-10 rounded-full items-center justify-center cursor-pointer fixed right-6 top-7 z-20'
    onClick={()=>setOpenMenu(!openMenu)}
    > 
        <span className='w-6 h-1 bg-[#203253] rounded-3xl'></span>
        <span className='w-6 h-1 bg-[#203253] rounded-3xl'></span>
        <span className='w-6 h-1 bg-[#203253] rounded-3xl'></span>
    </div>
    
    </header>
    <div>
    {openMenu
    ?<div className='w-screen h-screen bg-white fixed top-0 left-0 z-10 opacity-100 transition-all duration-500 ease-in-out'>
        <div className='flex justify-center items-center h-full w-full' >
            <ul className='flex flex-col gap-y-10 '>
            <li className="cursor-pointer active:text-[#72B3EA]">Главная</li>
            <li className="cursor-pointer active:text-[#72B3EA]">Ваш менеджер</li>
            <li className="cursor-pointer active:text-[#72B3EA]">Вопросы и ответы</li>
            <li className="cursor-pointer active:text-[#72B3EA]">Контакты</li>
            </ul>
        </div>
    </div>
    :  <div className='w-screen h-screen bg-white fixed top-0 left-0 z-10 opacity-0 transition-all duration-500 ease-in-out pointer-events-none  '>
        <div className='flex justify-center items-center h-full w-full' >
            <ul className='flex flex-col gap-y-10 '>
            <li className="cursor-pointer active:text-[#72B3EA]">Главная</li>
            <li className="cursor-pointer active:text-[#72B3EA]">Ваш менеджер</li>
            <li className="cursor-pointer active:text-[#72B3EA]">Вопросы и ответы</li>
            <li className="cursor-pointer active:text-[#72B3EA]">Контакты</li>
            </ul>
        </div>
    </div>}
    </div>
    </>
  )
}

export default Header