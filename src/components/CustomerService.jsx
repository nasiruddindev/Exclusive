import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

const CustomerService = ({icon,title,text}) => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="bg-[#00000033] rounded-full p-2">
        <div className="text-[40px] text-white bg-black p-2 rounded-full ">
          {icon}
        </div>
      </div>
      <h4 className="font-semibold font-pop text-black text-xl pb-2 pt-10 ">
        {title}
      </h4>
      <p className="text-sm font-pop text-black font-normal ">
        {text}
      </p>
    </div>
  )
}

export default CustomerService
