import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`font-inter font-semibold text-black text-4xl ${className}`}>{text}</h2>
  )
}

export default Title
