import React from 'react'

const Input = ({type,placeholder,className}) => {
  return (
    <input type={type} placeholder={placeholder} className={`placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-[#00000066] p-2 ${className}`} />
  )
}

export default Input
