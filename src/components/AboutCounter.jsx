import React from 'react'
import Image from './Image'

const AboutCounter = ({src,title,text}) => {
  return (
    <div className='w-67.5 border border-[#00000080] rounded py-7 px-5 flex flex-col justify-center items-center group hover:bg-secondary hover:border-transparent duration-300'>
      <div className='bg-[#00000033] rounded-full p-2'>
        <div className="text-[40px] text-white bg-black p-2 rounded-full group-hover:bg-white group-hover:text-black duration-300">{src}</div>
        </div>
      <h4 className='font-bold font-inter text-black text-[32px] pb-3 pt-6 group-hover:text-white duration-300'>{title}</h4>
      <p className='text-base font-pop text-black font-normal group-hover:text-white duration-300'>{text}</p>
    </div>
  )
}

export default AboutCounter
