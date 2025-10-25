import React from 'react'

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 min-h-[80vh]">
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex flex-col md:flex-row bg-[#B1DDFF] rounded-[60px] px-12 pt-5 gap-4 min-h-[420px] min-w-0"> 
        {/* Левая часть */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="font-bold text-[26px] md:text-[51px] leading-tight whitespace-normal text-[#335c92] min-w-60 md:min-w-100 mb-7 text-start" >
            Доставка грузов из Китая в Россию
          </div>
          <div className="text-[#335c92] mb-2 whitespace-nowrap text-start">Мы предоставляем бесплатно:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 mb-8 text-left min-w-[400px]">
            <div>
              <div className="flex items-center gap-2 text-base font-normal mb-2 min-w-[200px]">
                <img src="list-grid.svg" alt="" className="h-5 w-5" />
                Переводчик
              </div>
              <div className="flex items-center gap-2 text-base font-normal min-w-[200px]">
                <img src="list-grid.svg" alt="" className="h-5 w-5" />
                Поиск товара
              </div>
            </div>
            <div className="self-end">
              <div className="flex items-center gap-2 text-base font-normal mb-2 min-w-[200px]">
                <img src="list-grid.svg" alt="" className="h-5 w-5" />
                Хранение грузов
              </div>
              <div className="flex items-center gap-2 text-base font-normal min-w-[200px]">
                <img src="list-grid.svg" alt="" className="h-5 w-5" />
                Досмотр грузов
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Введите ваш номер телефона"
            className="h-12 bg-white rounded-2xl mb-2.5 w-full  px-5 py-3 max-w-[480px] md:max-w-[400px] text-[14px] md:text-[16px]"
          />
          <textarea
            type="text"
            placeholder="Какой товар вы ищите или хотите доставить в Россию?"
            className="h-19 md:h-12 bg-white rounded-2xl mb-2.5 w-full px-5 max-w-[480px] md:max-w-[400px]  resize-none overflow-hidden text-[14px] md:text-[16px]"
          />
          <button className="h-14 md:h-12 w-full max-w-[480px] md:max-w-[400px] bg-[#203253] px-10 md:py-2 rounded-2xl cursor-pointer active:bg-[#72B3EA] text-white font-semibold text-[14px] md:text-[16px] hover:bg-[#72B3EA] transition-colors duration-300 ease-in-out">
            Получить 100$ скидку на доставку
          </button>
        </div>
        {/* Правая часть - мужик */}
        <div className="flex-shrink-0  flex items-end justify-end">
          <img
            src="image 24.svg"
            alt="менеджер"
            className=" object-contain"
          />
        </div>
      </div>
    </div>
  </main>
  )
}

export default Hero