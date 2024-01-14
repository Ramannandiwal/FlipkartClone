import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomsectionCart from './Components/HomsectionCart'
import Categories from './Components/Categories'
import Banner from './Components/Banner'
import Discount from './Components/Discount'



import MySwipper from './Components/MySwipper'
import FooterAbove from './Components/FooterAbove'
import Footer from './Components/Footer'

function App() {
  

  return (
   <>
   <div className="first">
    
    <Categories/>
     <Banner/>
     <Discount/>
   <MySwipper/>
   <FooterAbove/>
   
   </div>
   </>
     
  )
}

export default App
