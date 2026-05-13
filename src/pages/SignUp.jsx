import React from 'react'
import Offer from '../layouts/Offer'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Button from '../components/Button'
import { FcGoogle } from 'react-icons/fc'
import Image from '../components/Image'
import SignUpBanner from '../assets/signupbanner.png'

const SignUp = () => {
  return (
    <div>
      <Offer/>
      <Navber/>



      <section className='py-30'>
        <Container>
          <Flex className="items-center">
            <div className='w-8/12 pr-10'>
        <Image src={SignUpBanner}/>

            </div>


            <div className='w-4/12'>
            <h4 className='font-medium text-4xl text-black font-inter'>Create an account</h4>
            <p className='font-normal font-pop text-base text-black pt-6'>Enter your details below</p>


            <Input type="text" placeholder="Name" className="w-full outline-none border-b border-[#00000066] mt-10"/>
            <Input type="text" placeholder="Email or Phone Number" className="w-full outline-none border-b border-[#00000066] mt-10"/>
            <Input type="password" placeholder="Password" className="w-full outline-none border-b border-[#00000066] mt-10"/>

            <div className='mt-10 '>
              <Button text="Create Account" className="w-full"/>

              <div className='border border-[#00000066] w-full py-4 mt-4 mb-8 flex justify-center items-center gap-x-3'>
                <FcGoogle className='text-2xl'/>
                <button className=' text-base font-pop font-normal text-black '> Sign up with Google</button>
              </div>
              <p className='font-pop text-base font-normal text-[#00000070]'>Already have account? <span className='font-medium text-black underline pl-2 cursor-pointer'>Log in</span></p>
            </div>
            </div>
          </Flex>
        </Container>
      </section>


      <Footer/>
    </div>
  )
}

export default SignUp
