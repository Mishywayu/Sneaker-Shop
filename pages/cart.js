// import Layout from "@/components/layout";
// import { Store } from "@/utils/Store";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useContext } from "react";

// export default function CartScreen() {
//   const { state, dispatch } = useContext(Store);
//   const {
//     cart: { cartItems },
//   } = state;

//   return (
//     <Layout title="Shopping Cart">
//       <h1 className="mb-4 text-xl">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <div>
//           Cart is empty. <Link href="/">Go Shopping</Link>
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-4 md:gap-5">
//             <div className="overflow-x-auto mdcol-span-3:">
//                 <table className="min-w-full">
//                     <thead className="border-b">
//                         <tr>
//                             <th className="px-5 text-left">Item</th>
//                             <th className="p-5 text-right">Quantity</th>
//                             <th className="p-5 text-right">Price</th>
//                             <th className="p-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cartItems.map((item) => (
//                             <tr key={item.slug} className="border-b">
//                                 <td>
//                                     <Link href={`/product/${item.slug}`}>
//                                         <a className="flex items-center">
//                                             <Image src={item.image} alt={item.name} width={50} height={50}></Image>
//                                             &nbsp;
//                                             {item.name}
//                                         </a>
//                                     </Link>
//                                 </td>
//                                 <td className="p-5 text-right">{item.quantity}</td>
//                                 <td className="p-5 text-right">${item.price}</td>
//                                 <td className="P-5 text-center">
//                                     <button>
//                                         <XCircleIco className="h-5npm"></XCircleIco>
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//       )} 
//     </Layout>
//   );
// }
