import React from 'react'
import Image from './Image'
import { CiTwitter } from 'react-icons/ci'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const AboutCard = ({src,title,text}) => {
  return (
    <div className='max-w-92.5'>
      <div className="w-full h-107.5 flex justify-center items-end bg-input">
        <Image src={src} className=""/>
      </div>
      <h3 className='text-[32px] font-medium font-inter text-black pt-8'>{title}</h3>
      <p className='text-base font-normal font-pop text-black pt-2 pb-4'>{text}</p>
      <div className='flex gap-x-5'>
        <CiTwitter className='text-2xl'/>
        <FaInstagram className='text-2xl'/>
        <FaLinkedinIn className='text-2xl'/>
      </div>
    </div>
  )
}

export default AboutCard
