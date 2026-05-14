import React from 'react'
import Image from './Image'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { LuEye } from 'react-icons/lu'

const Card = ({image,title,salePrice,regularPrice,discount,review}) => {
  return (
    <div className='max-w-67.5 cursor-pointer'>
      <div className='relative group overflow-hidden w-full h-62.5 bg-input flex justify-center items-center'>
        <Image src={image}/>

        <div className='absolute top-3 left-3 bg-secondary px-3 py-1 rounded '><p className='text-primary'> {discount}</p></div>


        <div className='absolute top-3 right-3 bg-white p-2 rounded-full'><FaRegHeart className='text-2xl'/></div>
        <div className='absolute top-15 right-3 bg-white p-2 rounded-full'><LuEye className='text-2xl'/></div>



        <div className='absolute -bottom-10 group-hover:bottom-0 duration-300 w-full bg-black py-2'>
          <p className='text-white text-base `font-pop font-medium text-center'>Add To Cart</p>
        </div>
      </div>






      <h4 className='font-pop font-medium text-base text-black pt-4 pb-2'>{title}</h4>
      <p className='font-pop font-medium text-base text-secondary'>{salePrice} <span className='text-black/50 pl-3'>{regularPrice}</span></p>

      <ul className='flex pt-2'>
        <li><FaStar className='text-star'/></li>
        <li><FaStar className='text-star'/></li>
        <li><FaStar className='text-star'/></li>
        <li><FaStar className='text-star'/></li>
        <li><FaStar className='text-star'/></li>
        <p className='font-pop font-semibold text-sm text-black/50 pl-2'>{review}</p>
      </ul>

    </div>
  )
}

export default Card
