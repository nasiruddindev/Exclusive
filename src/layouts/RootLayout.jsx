import React from 'react'
import Offer from './Offer'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Offer/>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
