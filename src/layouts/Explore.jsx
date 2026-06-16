import React, { useEffect, useState } from 'react'
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
  let [allData,setAllData] = useState([])
  let [show,setShow] = useState(16)



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])

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

        <Flex className="gap-7.5 flex-wrap">
          {
            allData.slice(8,show).map((item,index)=>(

              <Card
              key={index}
              id={item.id}
            image={item.image}
            title={item.title}
            salePrice={item.price}
            review="(35)"
            discountClassName="hidden"
          />
            ))
          }
        </Flex>

        <div className="text-center mt-15 mb-42">
          <div onClick={()=>setShow(show+allData.length)}>
            <Button text="view All Products" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Explore
