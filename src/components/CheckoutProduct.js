import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';


function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) {
    const dispatch = useDispatch();
    const addItemToBasket = () =>{
        const product = {
            id, 
            title,
            price,
            description,
            category, 
            image, 
            rating,
            hasPrime
        };
        dispatch(addToBasket(product));    
    }
    const RemoveFromBasket = () =>{
        dispatch(removeFromBasket({id}));  
    }
    return (
        <div className='grid grid-cols-5'>
            {/* Checkout product Image section */}
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* Checkout product Description section */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {
                        Array(Math.round(rating.rate, 1))
                            .fill()
                            .map((_, i) => (
                                <StarIcon key={i} className='h-5 text-yellow-500' />
                            ))
                    }
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <div className='mb-5'>
                    <p>${price}</p>
                </div>
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading="lazy" className='w-12' src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500'>Free Next Day Delivery</p>
                    </div>
                )}
            </div>
            {/* Add and Remove Button */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button' onClick = {addItemToBasket}>Add to Basket</button>
            <button onClick = {RemoveFromBasket} className='button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct