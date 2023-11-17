import Layout from '@/components/Layout'
import { Store } from '@/utils/Store';
import data from '@/utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

export default function ProductScreen() {
    const { state, dispatch } = useContext(Store);
    const [quantity, setQuantity] = useState(0);

    const { query } =useRouter();
    const { id } = query;
    const product = data.products.find((x) => x.id === id);

    // Counter/Quantity functionality 
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleReset = () => {
        setQuantity(quantity);
    };

    // Add to Cart functionality
    const handleAddToCart = () => {
        const newItem = { quantity, }
        dispatch({ type: 'CART_ADD_ITEM', payload: newItem });
    };

    // Products from data.js
    if (!product) {
        return(
            <Layout>
                <div className=''>
                    <div className='w-72 h-64 mx-auto'>
                        <img src='/images/found.png' alt='' className='w-full h-full animate-bounce' />
                    </div>
                    <div className='mt-4 flex flex-col items-center justify-center'>
                        <p className='text-center text-4xl font-semibold'>Oooops!!! <span className='text-orange-500'>Sneaker</span> Not Found.</p>
                        <Link href='/' className='bg-orange-400 mt-4 p-2 text-center text-white text-sm font-thin hover:bg-orange-600 rounded-lg'>Check out other Products</Link>
                    </div>
                </div>
            </Layout>
        );
    }
  return (
    <Layout title={product.title}>
        <div className='flex md:flex-row md:p-40 md:pb-0 md:pt-0 flex-col w-full'>
            {/* image div */}
            <div className='md:w-1/2'>
                <div className='md:m-8'>
                    <img src={product.main_img} alt='' className='w-full h-full md:rounded-xl' />
                    <div className='hidden md:flex md:pt-5 md:gap-7'>
                        <div className='w-20 rounded-xl'><img src={product.img_1} alt='' className='w-full h-full rounded-xl' /></div>
                        <div className='w-20 rounded-xl'><img src={product.img_2} alt='' className='w-full h-full rounded-xl' /></div>
                        <div className='w-20 rounded-xl'><img src={product.img_3} alt='' className='w-full h-full rounded-xl' /></div>
                        <div className='w-20 rounded-xl'><img src={product.img_4} alt='' className='w-full h-full rounded-xl' /></div>
                    </div>
                </div>
            </div>

            {/* description div */}
            <div className='md:w-1/2 md:p-20 pt-12'>
                <h4 className='text-sm text-orange-400 font-bold'>{product.company_name}</h4>
                <h1 className='pt-2 text-3xl font-bold'>{product.title}</h1>
                <p className='pt-8 text-sm text-slate-400 leading-normal'>{product.description}</p>
                <div className='pt-2'>
                    <p className='flex text-xl font-semibold gap-4'>${product.price} <span className='bg-orange-100 p-1 text-center text-sm text-orange-500'>{product.price_off}</span></p>
                    <p className='pt-1 text-sm text-slate-400 line-through'>${product.price_before}</p>
                </div>
                <div className='flex pt-8 gap-4'>
                    {/* quantity counter */}
                    <div className='flex text-cenetr justify-center gap-4 p-2 bg-slate-100 cursor-pointer rounded'>
                        <button className='text-orange-400' onClick={handleDecrement}>-</button>
                        <button onClick={handleReset}>{quantity}</button>
                        <button  className='text-orange-400' onClick={handleIncrement}>+</button>
                    </div>
                    {/* add to cart button */}
                    <button onClick={handleAddToCart}className='flex p-2 w-48 text-sm text-white text-center justify-center fonr-semibold bg-orange-400 hover:bg-orange-600 gap-2 rounded'><span><svg width="21" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fill-rule="nonzero"/></svg></span>Add to cart</button>
                </div>
            </div>
        </div>
    </Layout>
  );
}