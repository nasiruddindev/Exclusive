import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Flex from '../components/Flex'
import Title from '../components/Title'
import Button from '../components/Button'
import Card from '../components/Card'

const BestSelling = () => {
  let [allData, setAllData] = useState([])
  let [show, setShow] = useState(8)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllData(data))
  }, [])

  return (
    <section>
      <Container>
        <SubTitle text="This Month" className="pt-17" />
        <Flex className="pt-5 pb-15 justify-between items-center">
          <div>
            <Title text="Best Selling Products" />
          </div>

          <div onClick={()=>setShow(show+allData.length)}>
            <Button text="View All" />
          </div>
        </Flex>

        <Flex className="flex-wrap gap-x-7.5">
          {allData.slice(4, show).map((item, index) => (
            <Card
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              salePrice={item.price}
              regularPrice="$360"
              review="(65)"
              discountClassName="hidden"
            />
          ))}
        </Flex>

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
