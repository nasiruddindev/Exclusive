import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`font-inter font-semibold text-black text-[54px] ${className}`}>{text}</h2>
  )
}

export default Title
