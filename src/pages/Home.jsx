import React from 'react'
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
