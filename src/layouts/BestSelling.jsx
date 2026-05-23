import React from 'react'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Flex from '../components/Flex'
import Title from '../components/Title'
import Button from '../components/Button'
import Grid from '../components/Grid'
import Card from '../components/Card'
import BestCard1 from '../assets/bestcard1.png'
import BestCard2 from '../assets/bestcard2.png'
import BestCard3 from '../assets/bestcard3.png'
import BestCard4 from '../assets/bestcard4.png'

const BestSelling = () => {
  return (
    <section>
      <Container>
        <SubTitle text="This Month" className="pt-17" />
          <Flex className="pt-5 pb-15 justify-between items-center">
            <div>
              <Title text="Best Selling Products" />
            </div>

            <div>
              <Button text="View All" />
            </div>
          </Flex>

          <Grid className="grid-cols-4">
            <Card
              image={BestCard1}
              title="The north coat"
              salePrice="$260"
              regularPrice="$360"
              review="(65)"
              discountClassName="hidden"
            />

            <Card
              image={BestCard2}
              title="Gucci duffle bag"
              salePrice="$960"
              regularPrice="$1160"
              review="(65)"
              discountClassName="hidden"
            />

            <Card
              image={BestCard3}
              title="RGB liquid CPU Cooler"
              salePrice="$160"
              regularPrice="$170"
              review="(65)"
              discountClassName="hidden"
            />

            <Card
              image={BestCard4}
              title="Small BookSelf"
              salePrice="$360"
              review="(65)"
              discountClassName="hidden"
            />
          </Grid>

          <div className="pb-17 pt-35">
            <div className=" bg-[url(assets/box.png)] bg-cover bg-center bg-no-repeat">
              <div className="pb-16 pt-95 pl-15">
                <Button text="Buy Now" className="" />
              </div>
            </div>
          </div>
      </Container>
    </section>
  )
}

export default BestSelling
