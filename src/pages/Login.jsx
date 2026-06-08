import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import SignUpBanner from '../assets/signupbanner.png'
import Input from '../components/Input'
import Button from '../components/Button'
import Flex from '../components/Flex'

const Login = () => {
  return (
    <section className='py-30'>
      <Container>
        <Flex className="items-center">
            <div className='w-8/12 pr-10'>
        <Image src={SignUpBanner}/>

            </div>


            <div className='w-4/12'>
            <h4 className='font-medium text-4xl text-black font-inter'>Login to Exclusive</h4>
            <p className='font-normal font-pop text-base text-black pt-6'>Enter your details below</p>

            <Input type="text" placeholder="Email or Phone Number" className="w-full outline-none border-b border-[#00000066] mt-10"/>
            <Input type="password" placeholder="Password" className="w-full outline-none border-b border-[#00000066] mt-10"/>

            <div className='mt-10 flex justify-between items-center'>
              <Button text="Log In" />
              <p className='font-normal texl-base font-pop text-secondary'>Forget Password?</p>

            </div>
            </div>
          </Flex>
      </Container>
    </section>
  )
}

export default Login
