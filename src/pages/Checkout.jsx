import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'
import Title from '../components/Title'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Image from '../components/Image'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card3.png'
import Bkash from '../assets/bkash.png'
import Nagad from '../assets/nagad.png'
import Button from '../components/Button'

const Checkout = () => {
  const billingFields = [
    'First Name',
    'Company Name',
    'Street Address',
    'Apartment, Floor, etc. (Optional)',
    'Town / City',
    'Phone Number',
    'Email Address',
  ]

  return (
    <section className="pb-35">
      <Container>
        <div className="py-20">
          <ul className="flex gap-x-2">
            <Link to="/">
              <ListItem text="Account" />
            </Link>
            /
            <Link to="/">
              <ListItem text="My Account" />
            </Link>
            /
            <Link to="/">
              <ListItem text="Product" />
            </Link>
            /
            <Link to="/">
              <ListItem text="View Cart" />
            </Link>
            /
            <ListItem text="CheckOut" />
          </ul>
        </div>
        <Title text="Billing Details" className={`font-medium! pb-12`} />

        <Flex>
          <div className="w-1/2 flex flex-col">
            {billingFields.map((field, index) => (
              <div key={index}>
                <label className="font-pop font-normal text-base text-black/40 pb-2 block">
                  {field}
                </label>
                <Input className="bg-input w-4/5 mb-8" />
              </div>
            ))}
          </div>

          <div className="w-1/2">
            <div className="flex items-center justify-between ">
              <div className="flex gap-x-4 items-center">
                <div>
                  <Image src={Card1} className="w-13 h-13" />
                </div>
                <p className="text-base font-normal font-pop text-black">
                  H1 Gamepad
                </p>
              </div>
              <p className="text-base text-black font-pop font-normal">$650</p>
            </div>

            <div className="flex items-center justify-between py-8">
              <div className="flex gap-x-4 items-center">
                <div>
                  <Image src={Card2} className="w-13 h-13" />
                </div>
                <p className="text-base font-normal font-pop text-black">
                  LCD Monitor
                </p>
              </div>
              <p className="text-base text-black font-pop font-normal">$1100</p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 pb-4">
              <p className="text-base font-normal font-pop text-black">
                Subtotal
              </p>

              <p className="text-base text-black font-pop font-normal">$1750</p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 py-4">
              <p className="text-base font-normal font-pop text-black">
                Shipping
              </p>

              <p className="text-base text-black font-pop font-normal">Free</p>
            </div>

            <div className="flex items-center justify-between  pt-4">
              <p className="text-base font-normal font-pop text-black">
                Total:
              </p>

              <p className="text-base text-black font-pop font-normal">$1750</p>
            </div>

            <div className="flex justify-between pt-8">
              <div className="flex items-center gap-x-4">
                <Input type="radio" />
                <label htmlFor="">Bank</label>
              </div>
              <div className="flex items-center">
                <Image src={Bkash} className="w-15 h-7" />
                <Image src={Nagad} className="w-15 h-10" />
              </div>
            </div>

            <div className="flex gap-x-4 pt-8">
              <Input type="radio" />
              <label htmlFor="">Cash On Delevery</label>
            </div>
            <div className="flex gap-x-4 py-8">
              <Input
                placeholder="Coupon Code"
                className="border border-black/50 rounded"
              />
              <Button text="Apply Coupon" />
            </div>
            <Button text="Place Order" />
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Checkout
