import React from 'react'

const SubTitle = ({text,className}) => {
  return (
    <div className={`flex items-center gap-x-2.5 pl-3 md:pl-0 ${className}`}>
      <div className='bg-secondary h-8 md:h-10 w-6.5 rounded '></div>
      <h4 className='text-base text-secondary font-pop font-semibold'>{text}</h4>
    </div>
  )
}

export default SubTitle
