import React from 'react'

const Input = ({type,placeholder,className}) => {
  return (
    <input type={type} placeholder={placeholder} className={`outline-none px-5 py-4 text-2xl placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-[#00000066] p-2 ${className}`} />
  )
}

export default Input
