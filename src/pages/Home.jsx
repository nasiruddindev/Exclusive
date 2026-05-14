import React from 'react'
import Offer from '../layouts/Offer'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannerImg from '../assets/banner.jpg'
import CategoryList from '../components/CategoryList'
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
                <CategoryList text="Woman’s Fashion" type={true} />

                <CategoryList text="Men’s Fashion" type={true} />

                <CategoryList text="Electronics" />

                <CategoryList text="Home & Lifestyle" />

                <CategoryList text="Medicine" />

                <CategoryList text="Sports & Outdoor" />

                <CategoryList text="Baby & Toys" />

                <CategoryList text="Groceries & Pets" />

                <CategoryList text="Health & Beauty" />
              </ul>
            </div>

            <div className="w-9/12 pt-10">
              <Image src={BannerImg} />
            </div>
          </Flex>
          {/* Banner part end */}

          {/* First Card Section start */}

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

          <div className="my-15 text-center">
            <Button text="View All Products" />
          </div>

          {/* First Card Section End */}
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Home
