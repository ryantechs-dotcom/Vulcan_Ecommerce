"use client"
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState'

const Navbar = () => {

    const [cartItem] = useRecoilState(cartState)

    return (
    <div className='bg-[#2a3135]'>
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl text-white">Vulcan</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <Link href='/' legacyBehavior>
                <a className="mr-5 hover:text-gray-900">Home</a>
                </Link>
                <Link href='/about' legacyBehavior>
                <a className="mr-5 hover:text-gray-900">About</a>
                </Link>
                <Link href='/shop' legacyBehavior>
                <a className="mr-5 hover:text-gray-900">Store</a>
                </Link>
                </nav>
            
            </div>
        </header>
    </div>

                

    )
}

export default Navbar


