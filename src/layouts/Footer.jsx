import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FooterLogo from '../assets/footerlogo.png'
import { VscSend } from 'react-icons/vsc'
import FooterList from '../components/FooterList'
import Qr from '../assets/qr.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'
import { RiFacebookFill } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Grid from '../components/Grid'
// flex-col md:flex-row items-center md:items-start gap-y-10 md:gap-y-0

const footer = () => {
  return (
    <section className="bg-black pt-20 pb-15">
      <Container>

        <Grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-5 md:px-0 mx-auto">

          <div>
            <Image src={FooterLogo} />
            <p className="text-primary font-pop font-medium text-xl py-6">
              Subscribe
            </p>
            <p className="text-base font-pop font-normal text-primary pb-4">
              Get 10% off your first order
            </p>

            <div className="flex items-center justify-between py-2 px-3  border border-primary ">
              <input
                type="text"
                placeholder="Enter your email"
                className="placeholder:text-xs placeholder:text-primary outline-none"
              />

              <VscSend className='text-primary text-xl'/>

            </div>
          </div>

          <div>
          <h3 className='font-pop font-medium text-xl text-white pb-6'>Support</h3>
          <ul className='flex flex-col gap-y-4'>
            <FooterList text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."/>
            <FooterList text="exclusive@gmail.com"/>
            <FooterList text="+88015-88888-9999"/>
          </ul>
          </div>

          <div>
          <h3 className='font-pop font-medium text-xl text-white pb-6'>Account</h3>
          <ul className='flex flex-col gap-y-4'>
            <FooterList text="My Account"/>
            <FooterList text="Login/Register"/>
            <FooterList text="Cart"/>
            <FooterList text="Wishlist"/>
            <FooterList text="Shop "/>
          </ul>
          </div>

          <div>
          <h3 className='font-pop font-medium text-xl text-white pb-6'>Quick Link</h3>
          <ul className='flex flex-col gap-y-4'>
            <FooterList text="Privacy Policy"/>
            <FooterList text="Terms Of Use"/>
            <FooterList text="FAQ"/>
            <FooterList text="Cotact"/>
          </ul>
          </div>

          <div >
          <h3 className='font-pop font-medium text-xl text-white pb-6'>Download App</h3>
          <p className='text-primary text-xs font-medium font-pop pb-2'>Save $3 with App New User Only</p>


            <div className='flex gap-x-2'>
              <div>
            <Image src={Qr}/>
            </div>
            <div className='flex flex-col gap-y-3'>
            <Image src={Google}/>
            <Image src={Apple}/>
            </div>
            </div>

            <div className='pt-6 flex gap-x-6'>
              <RiFacebookFill className='text-primary text-xl'/>
              <FiTwitter className='text-primary text-xl'/>
              <FaInstagram className='text-primary text-xl'/>
              <FaLinkedinIn className='text-primary text-xl'/>
            </div>

          </div>
        </Grid>


      </Container>
    </section>
  )
}

export default footer
