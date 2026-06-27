import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`font-inter font-semibold text-black text-3xl md:text-4xl pl-3 md:pl-0 ${className}`}>{text}</h2>
  )
}

export default Title
