import React from 'react'
import Image from './Image'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { LuEye } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/addToCartSlice'

const Card = ({id,image,title,salePrice,regularPrice,discount,review,discountClassName,ulClassName,heartIconclassName,eyeIconClassName,deleteIcon,cartIconClassName}) => {

  let dispatch = useDispatch()

  let addcartItem = ()=>{
    dispatch(addtocart(
      {
        title:title,
        src:image,
        price:salePrice,
        quantity:1
      }
    ))
  }

  return (
    <div className='w-67.5 cursor-pointer'>
      <div className='relative group overflow-hidden w-full h-62.5 bg-input flex justify-center items-center'>
        <Link to={`/productdetails/${id}`}>
        <Image src={image}/>
        </Link>

        <div className={`absolute top-3 left-3 bg-secondary px-3 py-1 rounded ${discountClassName}`}><p className='text-primary'> {discount}</p></div>


        {
        deleteIcon&&
          <div className={`absolute top-3 right-3 bg-white p-2 rounded-full`}><RiDeleteBinLine className='text-2xl'/></div>
        }

        <div className={`absolute top-3 right-3 bg-white p-2 rounded-full ${heartIconclassName}`}><FaRegHeart className='text-2xl'/></div>

        <div className={`absolute top-15 right-3 bg-white p-2 rounded-full ${eyeIconClassName}`}><LuEye className='text-2xl'/></div>



        <div
        onClick={addcartItem}
        className='absolute -bottom-10 group-hover:bottom-0 duration-300 w-full bg-black py-2'>
          <div className='flex items-center justify-center gap-x-2'>
            {
              cartIconClassName&&
              <IoCartOutline className={`text-white text-2xl`}/>
            }

            <p className='text-white text-base `font-pop font-medium text-center'>Add To Cart</p>
          </div>
        </div>


      </div>






      <Link to={`/productdetails/${id}`}>
      <h4 className='font-pop font-medium text-base text-black pt-4 pb-2'>{title}</h4>
      </Link>
      <p className='font-pop font-medium text-base text-secondary'>{salePrice} <span className='text-black/50 pl-3'><del>{regularPrice}</del></span></p>

      <ul className={`flex pt-2 ${ulClassName}`}>
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
