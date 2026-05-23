import React from 'react'
import Offer from '../layouts/Offer'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import Banner from '../layouts/Banner'
import FlashSales from '../layouts/FlashSales'
import BrowseCategory from '../layouts/BrowseCategory'
import BestSelling from '../layouts/BestSelling'
import Explore from '../layouts/Explore'
import NewArrival from '../layouts/NewArrival'
import CustomerLayout from '../layouts/CustomerLayout'

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSales />
      <BrowseCategory />
      <BestSelling />
      <Explore />
      <NewArrival />
      <CustomerLayout />
    </div>
  )
}

export default Home
