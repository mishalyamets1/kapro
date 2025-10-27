import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const OurManager = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col w-full min-w-0">
        <Header />
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='bg-[#F4FAFF] flex flex-col text-start max-w-[790px] px-11  py-4 rounded-3xl mr-5 w-full'>
            <div className=' text-[36px] md:text-[64px] font-bold mb-5 text-[#203253]'>Ваш менеджер</div>
            <div className='text-[14px] md:text-[20px] font-base text-[#335D93] max-w-[790px] mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            <div className='text-[14px] md:text-[20px] font-base text-[#335D93]' >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </div>
          </div>
          <div className='flex'>
            <img src="Rectangle 14.svg" alt="" className='w-full mb-5 md:mb-0'/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OurManager