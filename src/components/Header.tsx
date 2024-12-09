"use client"
import Image from "next/image";
import Link from "next/link";
import { Search, User, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {
 const [open, setOpen] = useState(false);
 const toggle = () => {
 setOpen(!open);
 };

 return (
 <main className='border-b-2 bg-neutral-100'>
 <div className='w-full flex items-center justify-center bg-white h-[70px]'>
 {/* all content */}
 <div className='sm:w-full md:w-[80%] flex items-center justify-between h-[50px]'>

 <div className="lg:-ml-20 md:-ml-10 sm:-ml-20">
    <Image
    src={"/header.image/logo.img.png"}
    alt="Logo"
    width={185}
    height={41}/>
 </div>

 {/* links - animated sliding nav */}
 <div
 className={`${
 open ? "translate-x-0" : "-translate-x-full"
 } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
 >
 <ul className='flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black '>
 <li className='p-4 hover:underline underline-offset-2'>
 <Link href="/">Home</Link>
 </li>
 <li className='p-4 hover:underline underline-offset-2'>
 <Link href="/shop">Shop</Link>
 </li>
 <li className='p-4 hover:underline underline-offset-2'>
 <Link href="/blog">Blog</Link>
 </li>
 <li className='p-4 hover:underline underline-offset-2'>
 <Link href="/contact">Contact</Link>
 </li>
 </ul>
 </div>
 <div className='flex gap-x-4 items-center'>

            <button className="w-8 h-8 flex items-center justify-center">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
        <Link href="/cart"><ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span></Link>
            </button>
          </div>

 
<button
 className="text-black block md:hidden text-3xl z-50"
 onClick={toggle}
 >
<GiHamburgerMenu />
 
 </button>
 
 </div>

 </div>
 </main>
 );
}


