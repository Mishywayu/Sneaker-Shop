import React from 'react'
import Navbar from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ title, children }) {
  return (
    <>
    <Head>
        <title>{title ? title + ' - Sneaker Shop' : 'Sneaker Shop'}</title>
        <meta name='description' content='Generated by create next app' />
    </Head>
    <div className='flex min-h-screen flex-col justify-between'>
        <header className='p-4 border-b-2 border-orange-500 shadow-lg'>
            <Navbar />
        </header>
        <main className='container m-auto mt-4 px-4'>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    </>
  )
}
