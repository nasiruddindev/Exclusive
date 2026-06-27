import React from 'react'


const CategoryList = ({text,icon}) => {
  return (
    <div className='w-40 md:w-42.5 h-36.25 border border-black/30 flex flex-col justify-center items-center rounded group hover:bg-secondary hover:border-transparent duration-300 cursor-pointer'>

      <div className=''>{icon}</div>



      <p className='text-base text-black font-pop font-normal pt-4 group-hover:text-white'>{text}</p>
    </div>
  )
}

export default CategoryList
