import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Flex from '../components/Flex'
import Title from '../components/Title'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import Card from '../components/Card'
import Button from '../components/Button'

const FlashSales = () => {

  let [allData,setAllData] = useState([])
  let [show,setShow] = useState(4)


  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])



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

          <Flex className="flex-wrap gap-x-7.5">
            {
              allData.slice(0,show).map((item,index)=>(

                <Card
                key={index}
              image={item.image}
              title={item.title}
              salePrice={item.price}
              regularPrice="$160"
              discount="-40%"
              review="(88)"
            />
              ))
            }


          </Flex>

          <div className="py-15 text-center border-b border-black/30">
          {
            show<allData.length?<div onClick={()=>setShow(show+4)}>
              <Button text="View All Products" />
              </div>:<div onClick={()=>setShow(show-4)}>
              <Button text="Less Products" />
              </div>
          }


          </div>
      </Container>
    </section>
  )
}

export default FlashSales
