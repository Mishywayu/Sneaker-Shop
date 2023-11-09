// import { Store } from '@/utils/Store';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function Navbar() {
  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;

  return (
    <div className='grid grid-cols-3'>
        <h1 className='font-bold text-4xl mx-auto'>
          <Link href="/">Sneakers</Link>
        </h1>
        <nav>
            <ul className='flex gap-6 pt-4'>
                <li className='font-thin'>
                  <Link href="/collections">Collections</Link>
                </li>
                <li className='font-thin'>
                  <Link href="/men">Men</Link></li>
                <li className='font-thin'>
                  <Link href="/women">Women</Link>
                </li>
                <li className='font-thin'>
                  <Link href="/about">About</Link>
                </li>
                <li className='font-thin'>
                  <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='mx-auto flex gap-5'>
            <button><img src='/images/icon-cart.svg' alt='cart' />
            {/* {cart.cartItems.length > 0 && (
              <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-sm font-bold text-white'>
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )} */}
            </button>
            <button><img src='/images/image-avatar.png' alt='profile' width={50} /></button>
        </div>
    </div>
  )
}
