import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Card from '../components/Card'
import SubTitle from '../components/SubTitle'
import WishListcard1 from '../assets/bestcard2.png'
import WishListcard2 from '../assets/bestcard3.png'
import WishListcard3 from '../assets/wishlistcard3.png'
import WishListcard4 from '../assets/wishlistcard4.png'
import WishListcard5 from '../assets/explorecard3.png'
import WishListcard6 from '../assets/card3.png'
import WishListcard7 from '../assets/card1.png'
import WishListcard8 from '../assets/card2.png'
import { useSelector } from 'react-redux'

const WishList = () => {
  let data = useSelector((state) => state.wishlist.value)

  return (
    <section className="pb-35 pt-20">
      <Container>
        <Flex className="justify-between items-center pb-15">
          <div>
            <p className="font-pop font-normal text-xl text-black">
              wishlist ({data.length})
            </p>
          </div>

          <div>
            <Button
              text="Move All To Bag"
              className={`bg-transparent! text-black! border-black!`}
            />
          </div>
        </Flex>

        <Flex className="flex-wrap gap-7.5">
          {data.map((item, index) => (
            <Card
              image={item.src}
              title={item.title}
              salePrice={item.price}
              discount="-35%"
              ulClassName="hidden"
              heartIconclassName="hidden"
              eyeIconClassName="hidden"
              deleteIcon={true}
              cartIconClassName={true}
            />
          ))}
        </Flex>



        <Flex className="justify-between items-center pt-20 pb-15">
          <SubTitle text="Just For You" />
          <div>
            <Button
              text="See All"
              className={`bg-transparent! text-black! border-black!`}
            />
          </div>
        </Flex>

        <Flex className="justify-between">
          <Card
            image={WishListcard5}
            title="ASUS FHD Gaming Laptop"
            salePrice="$960"
            regularPrice="$1160"
            review="(65)"
            discount="-35%"
            cartIconClassName={true}
            heartIconclassName="hidden"
            eyeIconClassName={`top-3!`}
          />

          <Card
            image={WishListcard6}
            title="IPS LCD Gaming Monitor"
            salePrice="$1160"
            review="(65)"
            discountClassName="hidden"
            cartIconClassName={true}
            heartIconclassName="hidden"
            eyeIconClassName={`top-3!`}
          />

          <Card
            image={WishListcard7}
            title="HAVIT HV-G92 Gamepad"
            salePrice="$560"
            review="(65)"
            discountClassName="hidden"
            cartIconClassName={true}
            heartIconclassName="hidden"
            eyeIconClassName={`top-3!`}
          />

          <Card
            image={WishListcard8}
            title="AK-900 Wired Keyboard"
            salePrice="$200"
            review="(65)"
            discountClassName="hidden"
            cartIconClassName={true}
            heartIconclassName="hidden"
            eyeIconClassName={`top-3!`}
          />
        </Flex>
      </Container>
    </section>
  )
}

export default WishList
