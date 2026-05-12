import React from 'react'

const ListItem = ({text,className}) => {
  return (


    <li className={`text-black text-base font-normal font-pop border-b border-transparent hover:border-black duration-300 ${className}`}>{text}</li>


  )
}

export default ListItem
