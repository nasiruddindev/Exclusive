import React from 'react'
import Container from '../components/Container'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import SubTitle from '../components/SubTitle'
import Flex from '../components/Flex'
import Title from '../components/Title'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Button from '../components/Button'

const FlashSales = () => {
  return (
    <section>
      <Container>
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
      </Container>
    </section>
  )
}

export default FlashSales
