import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const CategoryList = ({text,type}) => {
  return (
    <div className='flex justify-between items-center cursor-pointer'>
      <li className='font-pop font-normal text-black text-base'>{text}</li>
      {
        type && <IoIosArrowForward />
      }
    </div>
  )
}

export default CategoryList
