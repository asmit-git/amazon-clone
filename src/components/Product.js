import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'


function Product({ id, title, price, description, category, image, rating }) {
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} width={200} height={200} objectFit="contain" />
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {
                    Array(Math.round(rating.rate, 1))
                        .fill()
                        .map((_, i) => (
                            <StarIcon className='h-5 text-yellow-500' />
                        ))
                }
                <p className='ml-2 text-sm text-gray-500'>{" "}{rating.count} Reviews</p>
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <p>${price}</p>
            </div>
            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500'>Free Next Day Delivery</p>
                </div>
            )}
            <button className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product