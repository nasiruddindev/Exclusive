import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-base font-medium text-primary bg-secondary py-4 px-12 font-pop rounded-sm ${className}`}>{text}</button>
  )
}

export default Button
