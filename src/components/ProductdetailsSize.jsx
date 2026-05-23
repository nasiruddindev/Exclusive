import React from 'react'

const ProductdetailsSize = ({text}) => {
  return (
     <div className="h-8 w-8 rounded border border-black/50 flex items-center justify-center group hover:bg-primary hover:border-transparent duration-300">
      <p className="font-medium font-pop text-black text-sm group-hover:text-white">
        {text}
      </p>
    </div>
  )
}

export default ProductdetailsSize
