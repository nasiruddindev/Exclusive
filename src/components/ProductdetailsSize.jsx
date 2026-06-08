import React from 'react'

const ProductdetailsSize = ({text}) => {
  return (
     <div className="h-8 w-8 rounded border border-black/50 flex items-center justify-center">
      <p className="font-medium font-pop text-black text-sm ">
        {text}
      </p>
    </div>
  )
}

export default ProductdetailsSize
