import { Store } from '@/utils/Store';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const CartCard = ({ cartItems }) => (
  <div className='bg-white p-4 shadow-md absolute right-0 mt-10'>
    <h3 className='text-lg font-bold mb-2'>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </h3>
  </div>
);

export default function Navbar() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='md:grid md:grid-cols-3 sm:flex sm:items-center sm:justify-between sm:px-4 md:px-8'>
        <h1 className='font-bold text-4xl md:mx-auto sm:mx-0 text-center mb-4'>
          <Link href="/">Sneakers</Link>
        </h1>
        <nav className={`sm:block ${isMenuOpen ? 'hidden' : 'hidden'}`}>
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

        {/* Cart and Profile Buttons */}
        <div className='md:mx-auto flex float-right gap-5'>
            <button><img src='/images/icon-cart.svg' alt='cart' />
            {cart.cartItems.length > 0 && (
              <span className='absolute top-0 right-0 bg-red-500 text-white p-1 runded-full'>
                {cart.cartItems.length}
              </span>
            )}
            {cart.cartItems.length > 0 && <CartCard cartItems={cart.cartItems}/>}
            </button>
            <button><img src='/images/image-avatar.png' alt='profile' width={50} /></button>
        </div>

        {/* Mobile menu button  */}
        <div className='sm:hidden pt-2'>
          <button className='text-gray-600 focus:outline-none' onClick={toggleMenu}>
          <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
          </button>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* Add mobile menu items here */}
          <ul className='Pt-2 pb-4 space-y-1'>
            <li className='font-thin'><Link href='/collections'>Collections</Link></li>
            <li className='font-thin'><Link href='/men'>Men</Link></li>
            <li className='font-thin'><Link href='/women'>Women</Link></li>
            <li className='font-thin'><Link href='/about'>About</Link></li>
            <li className='font-thin'><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
    </div>
  );
}
