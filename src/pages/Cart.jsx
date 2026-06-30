import React from 'react'
import Container from '../components/Container'
import ListItem from '../components/ListItem'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Photo from '../assets/card1.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { useSelector } from 'react-redux'

const Cart = () => {


  let data = useSelector((state)=>state.cart.value)


  return (
    <section className="pb-35">
      <Container>
        <div className="py-20">
          <ul className="flex gap-x-2">
            <Link to="/">
              <ListItem text="Home" />
            </Link>
            /
            <ListItem text="Cart" />
          </ul>
        </div>

        <Flex className="px-3 py-5 items-center">
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black">Product</p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-center">
              Price
            </p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-center">
              Quantity
            </p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-end">
              Subtotal
            </p>
          </div>
        </Flex>

        <Flex className="items-center ">
          {
            data.map((item)=>(
              <div className='shadow-2xl px-3 py-5 mt-6 rounded'>
                <div className="w-1/4 flex items-center gap-3">
            <Image src={item.src} className="w-13 h-13" />
            <p className="font-pop font-normal text-base text-black">{item.title}</p>
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-center">
              {item.title}
            </p>
          </div>
          <div className="w-1/4">
            {/* <li className=" h-10 text-center border border-black/40 flex justify-between px-2 rounded-md">
                        <button
                          onClick={() => handelDecrement(item)}
                          className="cursor-pointer"
                        >
                          -
                        </button>

                        <button>{item.quantity}</button>

                        <button
                          onClick={() => handelIncrement(item)}
                          className="cursor-pointer"
                        >
                          +
                        </button>
                      </li> */}
          </div>
          <div className="w-1/4">
            <p className="font-pop font-normal text-base text-black text-end">
              {item.quantity*item.price}
            </p>
          </div>
              </div>
            ))
          }
        </Flex>
        <Flex className="mt-6 justify-between">
          <Button text="Return to Shop" />
          <Button text="Upddate Cart" />
        </Flex>

        <Flex className="mt-20">
          <div className="w-7/12">
            <div className="flex gap-4 ">
              <Input
                placeholder="Coupon Code"
                className="border border-black/50 rounded "
              />
              <Button text="Apply Coupon" />
            </div>
          </div>



          <div className="w-5/12 border border-black/40 rounded p-6">
            <p className="text-black text-xl font-medium font-pop pb-6">
              Cart Total
            </p>

            <div className="flex items-center justify-between border-b border-black/40 pb-4">
              <p className="text-base font-normal font-pop text-black">
                Subtotal
              </p>

              <p className="text-base text-black font-pop font-normal">
                subTotal
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-black/40 py-4">
              <p className="text-base font-normal font-pop text-black">
                Shipping
              </p>

              <p className="text-base text-black font-pop font-normal">5$</p>
            </div>

            <div className="flex items-center justify-between  pt-4">
              <p className="text-base font-normal font-pop text-black">
                Total:
              </p>

              <p className="text-base text-black font-pop font-normal">
                subTotal
              </p>
            </div>

            <div className="mt-4 text-center">
              <Button text="Process to Checkout" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Cart
