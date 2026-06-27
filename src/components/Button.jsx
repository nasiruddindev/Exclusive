import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-sm md:text-base font-medium text-primary bg-secondary py-3 md:py-4 px-6 md:px-12 font-pop rounded-sm border border-transparent hover:border-secondary hover:bg-transparent hover:text-secondary duration-300 cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button
