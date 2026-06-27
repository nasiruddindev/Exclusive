import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Offer = () => {
  return (
    <section className='bg-black py-4'>
      <Container>
        <Flex className='flex-wrap items-center'>


          <div className='w-11/12 text-center'>

          <p className='font-pop font-normal text-primary text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-semibold'>Shop Now</span> </p></div>



          <div className='hidden md:flex w-1/12 pl-7'>
          <Flex className="items-center">
            <p className='font-pop font-normal text-primary text-sm'>English</p>
            <MdKeyboardArrowDown className='text-primary text-xl'/>

          </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Offer
