import { Store } from '@/utils/Store';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const CartCard = ({ cartItems, onClose, onCheckout }) => (
  <div className='bg-white p-4 shadow-md absolute right-50 mt-5'>
    <h3 className='text-lg font-bold mb-2'>Cart</h3>
    <hr />
    {cartItems.length === 0 ? (
      <p className='text-center'>Your cart is empty.</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <div>
            <div className='flex items-center justify-center gap-1'>
              <div className='bg-black w-12 h-12'>1</div>
              <div>
<p className='text-left text-sm font-thin'>Lightweight Marathon Racers</p>
<p className='text-left text-sm font-thin'>$125 * 3</p>
<p className='text-left text-lg text-orange-500 font-bold pt-2'>Total:$375</p>
              </div>
              <div><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></div>
            </div>
            <button>Checkout</button>
          </div>
        ))}
      </ul>
    )}
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
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
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
