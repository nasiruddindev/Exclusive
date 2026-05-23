import Container from '../components/Container'
import ListItem from '../components/ListItem'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Productdetails1 from '../assets/productdetails1.png'
import Productdetails2 from '../assets/productdetails2.png'
import Productdetails3 from '../assets/productdetails3.png'
import Productdetails4 from '../assets/productdetails4.png'
import Productdetailsmain from '../assets/productdetailsmain.png'
import { FaStar } from 'react-icons/fa'
import ProductdetailsSize from '../components/ProductdetailsSize'
import { TbTruckDelivery } from 'react-icons/tb'
import { LuRefreshCcw } from 'react-icons/lu'
import Card from '../components/Card'
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'
import Card4 from '../assets/bestcard3.png'
import Button from '../components/Button'
import { CiHeart } from 'react-icons/ci'
import SubTitle from '../components/SubTitle'

const ProductDetailsPage = () => {
  return (
    <section className='pb-35'>
      <Container>
         <ul className="flex gap-x-2 py-20">
          <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
            Account <p className="inline-block px-3">/</p>
          </li>
          <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
            Gamming <p className="inline-block px-3">/</p>
          </li>
          <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
            Havic HV G-92 Gamepad
          </li>
        </ul>

        <Flex>
          <div className="w-2/12 flex flex-col gap-y-4">
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={Productdetails1} />
            </div>
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={Productdetails2} />
            </div>
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={Productdetails3} />
            </div>
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={Productdetails4} />
            </div>
          </div>

          <div className="w-6/12">
            <div className="w-125 h-150 bg-input rounded flex justify-center items-center">
              <Image src={Productdetailsmain} />
            </div>
          </div>

          <div className="w-4/12">
            <h2 className="font-inter font-semibold text-2xl text-black">
              Havic HV G-92 Gamepad
            </h2>
            <Flex className="py-4">
              <ul className="flex">
                <li>
                  <FaStar className="text-star text-xl" />
                </li>
                <li>
                  <FaStar className="text-star text-xl" />
                </li>
                <li>
                  <FaStar className="text-star text-xl" />
                </li>
                <li>
                  <FaStar className="text-star text-xl" />
                </li>
                <li>
                  <FaStar className="text-star text-xl" />
                </li>
              </ul>
              <p className="font-pop font-normal text-black/50 text-sm pl-2">
                (150 Reviews)
              </p>
              <p className="border-l border-black/50 pl-4 ml-4 text-sm font-pop font-normal text-[#00FF66]">
                In Stock
              </p>
            </Flex>
            <p className="text-black font-normal font-inter text-2xl">
              $192.00
            </p>
            <p className="font-pop font-normal text-sm text-black w-93.25 pt-6 border-b border-black/50 pb-6 mb-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <Flex className="gap-x-6 items-center">
              <p className="text-black text-xl font-normal font-inter">
                Colours:
              </p>
              <Flex className="gap-x-2 items-center">
                <div className="h-5 w-5 rounded-full bg-red-600"></div>
                <div className="h-5 w-5 rounded-full bg-red-600"></div>
              </Flex>
            </Flex>

            <Flex className="items-center gap-x-6 ">
              <p className="text-black text-xl font-normal font-inter">Size:</p>
              <Flex className="items-center gap-x-4 py-6 ">
                <ProductdetailsSize text="XS" />
                <ProductdetailsSize text="S" />
                <ProductdetailsSize text="M" />
                <ProductdetailsSize text="L" />
                <ProductdetailsSize text="xL" />
              </Flex>
            </Flex>

            <Flex className="items-center justify-between">
              <div className="flex items-center border border-black/50 w-39.75 rounded">

                <div className="flex justify-center items-center w-10 h-11 text-xl hover:bg-primary hover:text-white duration-300  cursor-pointer">
                  -
                </div>

                <div className="flex justify-center items-center w-20 h-11 font-medium font-pop text-black text-xl border-x border-black/50 cursor-pointer">
                  2
                </div>

                <div className="flex justify-center items-center w-10 h-11 text-xl hover:bg-primary hover:text-white duration-300 cursor-pointer">
                  +
                </div>
              </div>

              <div>
                <Button className={`py-2.5!`} text="Buy Now"/>
              </div>

              <div className='w-10 h-10 border border-black/50 rounded flex justify-center items-center'>
              <CiHeart className='text-2xl'/>
              </div>


            </Flex>


              <div className='w-100 border border-black/50 rounded mt-10'>
              <Flex className="items-center gap-x-4 border-b border-black/50 pb-4 pt-6 px-4">
                <div>
                  <TbTruckDelivery className='text-4xl'/>
                </div>
                <div>
                  <h5 className='font-pop font-medium text-base text-black'>Free Delivery</h5>
                  <p className='font-pop font-medium text-xs text-black pt-2 underline'>Enter your postal code for Delivery Availability</p>
                </div>
              </Flex>
              <Flex className="items-center gap-x-4 pb-4 pt-6 px-4">
                <div>
                  <LuRefreshCcw className='text-4xl'/>
                </div>
                <div>
                  <h5 className='font-pop font-medium text-base text-black'>Return Delivery</h5>
                  <p className='font-pop font-medium text-xs text-black pt-2'>Free 30 Days Delivery Returns. Details</p>
                </div>
              </Flex>
              </div>

          </div>
        </Flex>

        <SubTitle text="Related Item" className="pt-35 pb-15"/>

        <Flex className="justify-between">

          <Card image={Card1} title="HAVIT HV-G92 Gamepad" regularPrice="160" salePrice="100" discount="-40%" review="(88)"/>

          <Card image={Card2} title="AK-900 Wired Keyboard" regularPrice="1160" salePrice="960" discount="-30%" review="(75)"/>

          <Card image={Card3} title="IPS LCD Gaming Monitor" regularPrice="400" salePrice="370" discount="-30%" review="(99)"/>

          <Card image={Card4} title="RGB liquid CPU Cooler" regularPrice="170" salePrice="160" discount="-30%" review="(65)"/>
        </Flex>
      </Container>
    </section>
  )
}

export default ProductDetailsPage
