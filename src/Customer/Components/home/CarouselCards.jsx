import React from 'react'

const CarouselCards = ({product}) => {
  return <>
    <div className='cursor-pointer bg-white flex flex-col items-center shadow-lg overflow-hidden w-60 mx-3 rounded-lg'>
        <div className='h-52 w-40'>
            <img className="object-cover object-top w-full h-full rounded-md mt-2" src={product.imageUrl} alt="" />
        </div>
        <div className="p-4">
            <h2 className='text-lg font-semibold '>{product.brand}</h2>
            <p className='text-gray-600'>{product.title}</p>
        </div>
    </div>
  </>
}

export default CarouselCards