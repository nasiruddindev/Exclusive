import React from 'react'

const Input = ({type, placeholder, onChange, className, value, id}) => {
  return (
    <input
      id={id}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      className={`outline-none px-4 py-2 md:py-4 text-2xl placeholder:text-base placeholder:font-pop placeholder:font-normal placeholder:text-[#00000066] ${className}`}
    />
  )
}

export default Input
