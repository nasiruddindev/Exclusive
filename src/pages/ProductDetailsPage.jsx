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
import { TbTruckDelivery } from 'react-icons/tb'
import { LuRefreshCcw } from 'react-icons/lu'
import Card from '../components/Card'
import Button from '../components/Button'
import { CiHeart } from 'react-icons/ci'
import SubTitle from '../components/SubTitle'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  let [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  let [detailsOutput, setDetailsOutput] = useState([])
  let params = useParams()
  console.log(params)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDetailsOutput(data))
    console.log(detailsOutput)
  }, [params.id])

  let [count,setCount] = useState(1)

  let handleInQuantity = ()=>{
    setCount(count+1)
  }

  let handledeQuantity = ()=>{
    count>1 && setCount(count-1)
  }


  let handleSize = (size)=>{

  }



  return (
    <section className="pb-35">
      <Container>
        <ul className="flex gap-x-2 py-20">
          <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
            Account <p className="inline-block px-3">/</p>
          </li>
          <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
            {detailsOutput.category} <p className="inline-block px-3">/</p>
          </li>
          <li className="text-sm font-pop font-normal text-black/50 hover:text-black duration-300 cursor-pointer">
            {detailsOutput.title}
          </li>
        </ul>

        <Flex>
          <div className="w-2/12 flex flex-col gap-y-4">
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={detailsOutput.image} className="w-full h-full" />
            </div>
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={detailsOutput.image} className="w-full h-full" />
            </div>
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={detailsOutput.image} className="w-full h-full" />
            </div>
            <div className="w-42.5 h-34.5 rounded bg-input flex justify-center items-center">
              <Image src={detailsOutput.image} className="w-full h-full" />
            </div>
          </div>

          <div className="w-6/12">
            <div className="w-125 h-150 bg-input rounded flex justify-center items-center">
              <Image src={detailsOutput.image} className="bg-cover" />
            </div>
          </div>

          <div className="w-4/12">
            <h2 className="font-inter font-semibold text-2xl text-black">
              {detailsOutput.title}
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
              ${detailsOutput.price}
            </p>
            <p className="font-pop font-normal text-sm text-black w-93.25 pt-6 border-b border-black/50 pb-6 mb-6">
              {detailsOutput.description}
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
                {sizes.map((size) => (
                  <div
                    onClick={handleSize}
                    key={size}
                    className="h-8 w-8 rounded border border-black/50 flex items-center justify-center cursor-pointer"
                  >
                    <p className="font-medium font-pop text-black text-sm ">
                      {size}
                    </p>
                  </div>
                ))}
              </Flex>
            </Flex>

            <Flex className="items-center justify-between">


              <div className="flex justify-evenly items-center border border-black/50 w-39.75 rounded">


              <button onClick={handledeQuantity} className='w-1/3 text-2xl text-center border-r px-2 py-1.5 cursor-pointer'>-</button>


              <button className='w-1/3 text-2xl text-center border-r px-2 py-1.5 cursor-pointer'>{count}</button>


              <button onClick={handleInQuantity} className='w-1/3 text-2xl text-center  px-2 py-1.5 cursor-pointer'>+</button>



              </div>



              <div>
                <Button className={`py-2.5!`} text="Buy Now" />
              </div>

              <div className="w-10 h-10 border border-black/50 rounded flex justify-center items-center">
                <CiHeart className="text-2xl" />
              </div>
            </Flex>

            <div className="w-100 border border-black/50 rounded mt-10">
              <Flex className="items-center gap-x-4 border-b border-black/50 pb-4 pt-6 px-4">
                <div>
                  <TbTruckDelivery className="text-4xl" />
                </div>
                <div>
                  <h5 className="font-pop font-medium text-base text-black">
                    Free Delivery
                  </h5>
                  <p className="font-pop font-medium text-xs text-black pt-2 underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </Flex>
              <Flex className="items-center gap-x-4 pb-4 pt-6 px-4">
                <div>
                  <LuRefreshCcw className="text-4xl" />
                </div>
                <div>
                  <h5 className="font-pop font-medium text-base text-black">
                    Return Delivery
                  </h5>
                  <p className="font-pop font-medium text-xs text-black pt-2">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>

        <SubTitle text="Related Item" className="pt-35 pb-15" />

        <Flex className=" flex-wrap gap-x-7.5">
          {allData.map(
            (item, index) =>
              index > 15 &&
              index < 21 && (
                <Card
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  regularPrice="160"
                  salePrice={item.price}
                  discount="-40%"
                  review="(88)"
                />
              )
          )}
        </Flex>
      </Container>
    </section>
  )
}

export default ProductDetailsPage
