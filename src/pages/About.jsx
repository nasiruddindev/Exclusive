import React from 'react'
import Offer from '../layouts/Offer'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'
import Image from '../components/Image'
import AboutBanner from '../assets/aboutbanner.png'
import Grid from '../components/Grid'
import AboutCounter from '../components/AboutCounter'
import { IoStorefrontOutline } from 'react-icons/io5'
import { BsHandbag } from 'react-icons/bs'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { FaSackDollar } from 'react-icons/fa6'
import AboutCard from '../components/AboutCard'
import AboutCard1 from '../assets/aboutcard1.png'
import AboutCard2 from '../assets/aboutcard2.png'
import AboutCard3 from '../assets/aboutcard3.png'
import { TbCircleDotFilled, TbTruckDelivery } from 'react-icons/tb'
import { LuHeadset } from 'react-icons/lu'
import { CiBookmarkCheck } from 'react-icons/ci'
import CustomerService from '../components/CustomerService'

const About = () => {
  return (
    <div>

      <section className="py-35 relative overflow-hidden">
        <Container>
          <div>
            <ul className="flex gap-x-2">
              <Link to="/">
                <ListItem text="Home" />
              </Link>
              /
              <ListItem text="About" />
            </ul>
          </div>

          <Flex className="mt-10 mb-35 items-center">
            <div className="w-6/12 pr-5">
              <h2 className="font-inter font-semibold text-black text-[54px] pb-10">
                Our Story
              </h2>
              <p className="text-base font-pop font-normal text-black pb-6">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{' '}
              </p>

              <p className="text-base font-pop font-normal text-black">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="w-6/12">
              <Image src={AboutBanner} className="absolute top-1/6 -translate-y-1/2 right-0 w-[calc(50%-58px)]"/>
            </div>
          </Flex>

          <Grid className="grid-cols-4 gap-x-7.5">
            <AboutCounter
              src={<IoStorefrontOutline />}
              title="10.5k"
              text="Sallers active our site"
            />

            <AboutCounter
              src={<PiCurrencyCircleDollar />}
              title="33k"
              text="Monthly Product Sale"
            />

            <AboutCounter
              src={<BsHandbag />}
              title="45.5k"
              text="Customer active in our site"
            />

            <AboutCounter
              src={<FaSackDollar />}
              title="10.5k"
              text="Annual gross sale in our site"
            />
          </Grid>

          <Grid className="grid-cols-3 mt-35 mb-10 gap-x-7.5">
            <AboutCard
              src={AboutCard1}
              title="Tom cruise"
              text="Founder & Chairman"
            />
            <AboutCard
              src={AboutCard2}
              title="Emma Watson"
              text="Managing Director"
            />
            <AboutCard
              src={AboutCard3}
              title="Will Smith"
              text="Product Designer"
            />
          </Grid>

          <div className="flex justify-center mb-35 gap-x-2">
            <TbCircleDotFilled className="text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer" />
            <TbCircleDotFilled className="text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer" />
            <TbCircleDotFilled className="text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer" />
            <TbCircleDotFilled className="text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer" />
            <TbCircleDotFilled className="text-[#D9D9D9] hover:text-secondary duration-500 hover:scale-150 cursor-pointer" />
          </div>

          <Grid className="grid-cols-3 gap-x-7.5">
            <CustomerService icon={<TbTruckDelivery />} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140"/>

           <CustomerService icon={<LuHeadset />} title="24/7 CUSTOMER SERVICE" text="Friendly 24/7 customer support"/>

           <CustomerService icon={<CiBookmarkCheck />} title="MONEY BACK GUARANTEE" text="We reurn money within 30 days"/>
          </Grid>
        </Container>
      </section>
    </div>
  )
}

export default About
