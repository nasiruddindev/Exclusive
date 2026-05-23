import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CustomerService from '../components/CustomerService'
import { TbTruckDelivery } from 'react-icons/tb'
import { LuHeadset } from 'react-icons/lu'
import { CiBookmarkCheck } from 'react-icons/ci'

const CustomerLayout = () => {
  return (
    <section>
      <Container>
        <Flex className="justify-between my-35">
            <CustomerService
              icon={<TbTruckDelivery />}
              title="FREE AND FAST DELIVERY"
              text="Free delivery for all orders over $140"
            />

            <CustomerService
              icon={<LuHeadset />}
              title="24/7 CUSTOMER SERVICE"
              text="Friendly 24/7 customer support"
            />

            <CustomerService
              icon={<CiBookmarkCheck />}
              title="MONEY BACK GUARANTEE"
              text="We reurn money within 30 days"
            />
          </Flex>
      </Container>
    </section>
  )
}

export default CustomerLayout
