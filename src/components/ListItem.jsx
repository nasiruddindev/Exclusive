import React from 'react'

const ListItem = ({text,className}) => {
  return (


    <li className={`text-black text-base font-normal font-pop ${className}`}>{text}</li>


  )
}

export default ListItem
