"use client"
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useRecoilState } from 'recoil'
import { cartState } from '../atoms/cartState'

const Navbar = () => {

    const [cartItem] = useRecoilState(cartState)

    return (
    <div className='bg-[#546e7a]'>
        <header class="text-white body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">Vulcan</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <Link href='/' legacyBehavior>
                <a class="mr-5 hover:text-gray-900">Home</a>
                </Link>
                <Link href='/about' legacyBehavior>
                <a class="mr-5 hover:text-gray-900">About</a>
                </Link>
                <Link href='/shop' legacyBehavior>
                <a class="mr-5 hover:text-gray-900">Store</a>
                </Link>
                </nav>
                <div className='relative cursor-pointer'>
                    <Link href="/cart">
                        <div>
                            <FiShoppingCart />
                            <span className='absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white'>{cartItem.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    </div>

                

    )
}

export default Navbar