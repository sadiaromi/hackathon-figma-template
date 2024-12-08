"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
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
 <li className='p-4 hover:underline underline-offset-2'>Blog
 </li>
 <li className='p-4 hover:underline underline-offset-2'>
 <Link href="/contact">Contact</Link>
 </li>
 </ul>
 </div>

 <div className='flex gap-x-4 items-center'>
 <VscAccount className="w-10 h-6 flex-none flex-grow-0 order-1"/>
 <CiSearch className="w-10 h-6 flex-none flex-grow-0 order-1"/>
<FaRegHeart className="w-10 h-6 flex-none flex-grow-0 order-1"/>
<Link href="/cart"><IoCartOutline className="w-10 h-6 flex-none flex-grow-0 order-1"/></Link>
<button
 className="text-black block md:hidden text-3xl z-50"
 onClick={toggle}
 >
<GiHamburgerMenu />
 
 </button>
 
 </div>

 </div>
 </div>
 </main>
 );
}


