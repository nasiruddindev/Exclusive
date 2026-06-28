import React from 'react'

const Input = ({type,placeholder,className}) => {
  return (
    <input type={type} placeholder={placeholder} className={`outline-none px-5 py-2 md:py-4 text-2xl placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-[#00000066]  ${className}`} />
  )
}

export default Input
