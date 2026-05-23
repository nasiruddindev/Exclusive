import React from 'react'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import Flex from '../components/Flex'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import Card from '../components/Card'
import ExploreCard1 from '../assets/explorecard1.png'
import ExploreCard2 from '../assets/explorecard2.png'
import ExploreCard3 from '../assets/explorecard3.png'
import ExploreCard4 from '../assets/explorecard4.png'
import Button from '../components/Button'

const Explore = () => {
  return (
    <section>
      <Container>
        <SubTitle text="Our Products" className="pt-20" />
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

          <Flex className="justify-between flex-wrap">
            <Card
              image={ExploreCard1}
              title="Breed Dry Dog Food"
              salePrice="$100"
              review="(35)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard2}
              title="CANON EOS DSLR Camera"
              salePrice="$360"
              review="(95)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard3}
              title="ASUS FHD Gaming Laptop"
              salePrice="$700"
              review="(325)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard4}
              title="Curology Product Set "
              salePrice="$500"
              review="(145)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard1}
              title="Breed Dry Dog Food"
              salePrice="$100"
              review="(35)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard2}
              title="CANON EOS DSLR Camera"
              salePrice="$360"
              review="(95)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard3}
              title="ASUS FHD Gaming Laptop"
              salePrice="$700"
              review="(325)"
              discountClassName="hidden"
            />

            <Card
              image={ExploreCard4}
              title="Curology Product Set "
              salePrice="$500"
              review="(145)"
              discountClassName="hidden"
            />
          </Flex>

          <div className="text-center mt-15 mb-42">
            <Button text="view All Products" />
          </div>
      </Container>
    </section>
  )
}

export default Explore
