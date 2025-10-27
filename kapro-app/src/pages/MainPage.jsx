import React from 'react'
import { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import GridSection from '../components/GridSection'
import OurCases from '../components/OurCases'
import Irrigator from '../components/Irrigator'
import GridMini from '../components/GridMini'
import Reviews from '../components/Reviews'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const MainPage = () => {
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
  <Footer/>
</div>
  )
}

export default MainPage