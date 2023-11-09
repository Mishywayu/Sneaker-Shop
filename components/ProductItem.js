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
      <button className='mt-4 p-2 bg-orange-400 w-full text-center text-sm text-white hover:bg-orange-800'>ADD TO CART</button>
    </div>
    // <div className='h-96 bg-white shadow-xl'>
    //   <Link href={`/product/${product.id}`}>
    //     <div className='h-52'>
    //       <img src={product.main_img} alt='' className='w-48 mx-auto pt-2' />
    //     </div>
    //   </Link>
    //   <div className='pt-2'>
    //     <h4 className='text-center text-sm font-semibold'>{product.company_name}</h4>
    //     <p className='text-center font-thin pt-1'>{product.paragraph}</p>
    //     <p className='text-center text-2xl pt-4'>${product.price}</p>
    //   </div>
    //   <button className='bg-orange-600 text-white text-center text-sm font-thin w-full p-2 mt-3'>ADD TO CART</button>
    // </div>
  )
}






// <main>
// <div className='flex p-40 pt-0 w-full'>
//   <div className='w-1/2'>
//     <div className='m-8'>
//       <img src='images/image-product-1.jpg' alt='sneaker' className='w-full h-full rounded-xl' />
//       <div className='flex pt-5 gap-7'>
//         <div className='w-20 h-20'><img src='images/image-product-1-thumbnail.jpg' alt='' className='w-full h-full rounded-xl' /></div>
//         <div className='w-20'><img src='images/image-product-2-thumbnail.jpg' alt='' className='w-full h-full rounded-xl' /></div>
//         <div className='w-20 rounded-xl'><img src='images/image-product-3-thumbnail.jpg' alt='' className='w-full h-full rounded-xl' /></div>
//         <div className='w-20 rounded-xl'><img src='images/image-product-4-thumbnail.jpg' alt='' className='w-full h-full rounded-xl'  /></div>
//       </div>
//     </div>
//   </div>

//   <div className='w-1/2 p-20'>
//     <h4 className='text-sm text-orange-400 font-bold'>SNEAKER COMPANY</h4>
//     <h1 className='pt-2 text-3xl font-bold'>Fall Limited Edition Sneakers</h1>
//     <p className='pt-8 text-sm text-slate-400 leading-normal'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable ruber outer sole, 
//       they'll withstand everything the weather can offer.
//     </p>
//     <div className='pt-2'>
//       <p className='flex text-xl font-semibold gap-4'>$125.00 <span className='bg-orange-100 p-1 text-center text-sm text-orange-500 rounded'>50%</span></p>
//       <p className='pt-1 text-sm text-slate-400 line-through'>$250.00</p>
//     </div>
//     <div className='flex pt-8 gap-4'>
//       <div className='flex text-center justify-center gap-4 p-2 bg-slate-100 rounded'>
//         <div className='text-orange-400'>-</div>
//         <div>0</div>
//         <div className='text-orange-400'>+</div>
//       </div>
//       <button className='flex p-2 w-48 text-sm text-white text-center justify-center font-semibold bg-orange-500 gap-2 rounded'><span><svg width="21" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fill-rule="nonzero"/></svg></span>Add to cart</button>
//     </div>
//   </div>
// </div>
// </main>