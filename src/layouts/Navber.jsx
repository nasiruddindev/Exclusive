import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'

const Navber = () => {
  return (
    <nav>
      <Container>
        <Flex>
          <div className='w-3/12'>
          <Image src={Logo}/>
          </div>
          <div className='w-5/12'></div>
          <div className='w-4/12'></div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber
