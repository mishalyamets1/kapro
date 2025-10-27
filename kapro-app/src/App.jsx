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
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import OurManager from './pages/OurManager'
import OurContacts from './pages/OurContacts'
import Questions from './pages/Questions'
import { Route, Router, Routes } from 'react-router-dom'

export default function App() {
  return (
    
<>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/manager" element={<OurManager/>}/>
      <Route path="/Q&A" element={<Questions/>}/>
      <Route path="/Contacts" element={<OurContacts/>}/>
    </Routes>
</>

  )
}



