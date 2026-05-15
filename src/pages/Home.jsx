import React from 'react'
import Offer from '../layouts/Offer'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannerImg from '../assets/banner.jpg'
import BannerList from '../components/BannerList'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import Button from '../components/Button'
import CategoryList from '../components/CategoryList'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { BsSmartwatch } from 'react-icons/bs'
import { IoCameraOutline } from 'react-icons/io5'
import { FiHeadphones } from 'react-icons/fi'
import { LuGamepad2 } from 'react-icons/lu'
import BestCard1 from '../assets/bestcard1.png'
import BestCard2 from '../assets/bestcard2.png'
import BestCard3 from '../assets/bestcard3.png'
import BestCard4 from '../assets/bestcard4.png'
import ExploreCard1 from '../assets/explorecard1.png'
import ExploreCard2 from '../assets/explorecard2.png'
import ExploreCard3 from '../assets/explorecard3.png'
import ExploreCard4 from '../assets/explorecard4.png'

const Home = () => {
  return (
    <div>
      <Offer />
      <Navber />

      <section>
        <Container>
          {/* Banner part start */}
          <Flex className="mb-35">
            <div className="w-3/12">
              <ul className="flex flex-col gap-y-4 border-r border-black/50 mr-13 pt-10 pr-4">
                <BannerList text="Woman’s Fashion" type={true} />

                <BannerList text="Men’s Fashion" type={true} />

                <BannerList text="Electronics" />

                <BannerList text="Home & Lifestyle" />

                <BannerList text="Medicine" />

                <BannerList text="Sports & Outdoor" />

                <BannerList text="Baby & Toys" />

                <BannerList text="Groceries & Pets" />

                <BannerList text="Health & Beauty" />
              </ul>
            </div>

            <div className="w-9/12 pt-10">
              <Image src={BannerImg} />
            </div>
          </Flex>
          {/* Banner part end */}

          {/* Flash Section start */}

          <SubTitle text="Today's" />
          <Flex className="pt-6 pb-8 justify-between items-center">
            <div>
              <Title text="Flash Sales" />
            </div>

            <div className="flex gap-x-2 items-center">
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowBack className="text-2xl" />
              </div>
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowForward className="text-2xl" />
              </div>
            </div>
          </Flex>

          <Grid className="grid-cols-4 gap-x-7.5 ">
            <Card
              image={Card1}
              title="HAVIT HV-G92 Gamepad"
              salePrice="$120"
              regularPrice="$160"
              discount="-40%"
              review="(88)"
            />

            <Card
              image={Card2}
              title="AK-900 Wired Keyboard"
              salePrice="$960"
              regularPrice="$1160"
              discount="-35%"
              review="(75 )"
            />

            <Card
              image={Card3}
              title="IPS LCD Gaming Monitor"
              salePrice="$370"
              regularPrice="$400"
              discount="-30%"
              review="(99)"
            />

            <Card
              image={Card4}
              title="S-Series Comfort Chair "
              salePrice="$375"
              regularPrice="$400"
              discount="-25%"
              review="(99)"
            />
          </Grid>

          <div className="py-15 text-center border-b border-black/30">
            <Button text="View All Products" />
          </div>

          {/* Flash Section End */}


          {/* CategoryList Section start */}

          <SubTitle text="Categories" className="pt-20"/>
          <Flex className="pt-5 pb-15 justify-between items-center">
            <div>
              <Title text="Browse By Category" />
            </div>

            <div className="flex gap-x-2 items-center">
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowBack className="text-2xl" />
              </div>
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowForward className="text-2xl" />
              </div>
            </div>
          </Flex>

          <Grid className="grid-cols-6 gap-x-7.5 pb-18 border-b border-black/30">
            <CategoryList text="Phones" icon={<HiOutlineDevicePhoneMobile className='text-[56px] group-hover:text-white'/>}/>


            <CategoryList text="Computers" icon={<HiOutlineDesktopComputer className='text-[56px] group-hover:text-white'/>}/>


            <CategoryList text="SmartWatch" icon={<BsSmartwatch className='text-[56px] group-hover:text-white'/>}/>


            <CategoryList text="Camera" icon={<IoCameraOutline  className='text-[56px] group-hover:text-white'/>}/>


            <CategoryList text="HeadPhones" icon={<FiHeadphones className='text-[56px] group-hover:text-white'/>}/>


            <CategoryList text="Gaming" icon={<LuGamepad2 className='text-[56px] group-hover:text-white'/>}/>
          </Grid>
          {/* CategoryList Section end */}


          {/* Best Section Start */}

          <SubTitle text="This Month" className="pt-17"/>
          <Flex className="pt-5 pb-15 justify-between items-center">
            <div>
              <Title text="Browse By Category" />
            </div>

            <div>
              <Button text="View All"/>
            </div>
          </Flex>

          <Grid className="grid-cols-4">

            <Card image={BestCard1} title="The north coat" salePrice="$260" regularPrice="$360" review="(65)" discountClassName="hidden"/>


            <Card image={BestCard2} title="Gucci duffle bag" salePrice="$960" regularPrice="$1160" review="(65)" discountClassName="hidden"/>


            <Card image={BestCard3} title="RGB liquid CPU Cooler" salePrice="$160" regularPrice="$170"  review="(65)" discountClassName="hidden"/>


            <Card image={BestCard4} title="Small BookSelf" salePrice="$360" review="(65)" discountClassName="hidden"/>

          </Grid>

          <div className='pb-17 pt-35'>
            <div className=' bg-[url(assets/box.png)] bg-cover bg-center bg-no-repeat'>

            <div className='pb-16 pt-95 pl-15'>
              <Button text="Buy Now" className=""/>
            </div>
          </div>
          </div>

          {/* Best Section end */}


          {/* Explore Section start */}

          <SubTitle text="Our Products" className="pt-20"/>
          <Flex className="pt-5 pb-15 justify-between items-center">
            <div>
              <Title text="Explore Our Products" />
            </div>

            <div className="flex gap-x-2 items-center">
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowBack className="text-2xl" />
              </div>
              <div className="bg-input p-2 rounded-full">
                <IoMdArrowForward className="text-2xl" />
              </div>
            </div>
          </Flex>


          <Grid className="grid-cols-4 gap-7.5">

            <Card image={ExploreCard1} title="Breed Dry Dog Food" salePrice="$100"  review="(35)" discountClassName="hidden"/>


            <Card image={ExploreCard2} title="CANON EOS DSLR Camera" salePrice="$360"  review="(95)" discountClassName="hidden"/>


            <Card image={ExploreCard3} title="ASUS FHD Gaming Laptop" salePrice="$700"  review="(325)" discountClassName="hidden"/>


            <Card image={ExploreCard4} title="Curology Product Set " salePrice="$500"  review="(145)" discountClassName="hidden"/>

            <Card image={ExploreCard1} title="Breed Dry Dog Food" salePrice="$100"  review="(35)" discountClassName="hidden"/>

            <Card image={ExploreCard2} title="CANON EOS DSLR Camera" salePrice="$360"  review="(95)" discountClassName="hidden"/>

            <Card image={ExploreCard3} title="ASUS FHD Gaming Laptop" salePrice="$700"  review="(325)" discountClassName="hidden"/>

            <Card image={ExploreCard4} title="Curology Product Set " salePrice="$500"  review="(145)" discountClassName="hidden"/>
          </Grid>

          <div className='text-center mt-15 mb-42'>
            <Button text="view All Products"/>
          </div>
          {/* Explore Section end */}


          {/* New Arrival Section end */}


          {/* New Arrival Section end */}
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Home
