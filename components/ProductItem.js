import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
    <div className='shadow-xl mt-2'>
      <Link href={`/product/${product.id}`}>
        <img src={product.main_img} alt='' className='w-48 mx-auto' />
      </Link>
      <div>
        <h4 className='text-center text-sm font-semibold pt-8'>{product.company_name}</h4>
        <p className='text-center font-thin pt-2'>{product.paragraph}</p>
        <p className='text-center text-xl font-bold pt-4'>${product.price}</p>
        <p className='text-center'>reviews</p>
      </div>
      <button className='mt-4 p-2 bg-orange-400 w-full text-center text-sm text-white hover:bg-orange-600'>ADD TO CART</button>
    </div>
  );
}