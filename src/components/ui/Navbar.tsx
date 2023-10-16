'use client'
import {useState} from 'react'
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png"

import {AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";
import Link from "next/link";
import Mininav from "./Mininav";

const navLink=[
  {
    id:1,
    title:'Home',
    link:'/'
  },
  {
    id:2,
    title:'RentShop',
    link:'/rentCarShop'
  },
  {
    id:3,
    title:'Services',
    link:'/services'
  },
  {
    id:4,
    title:'Contact Us',
    link:'/contac-us'
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
     <>


        <Mininav />
     
       
        <div className="navbar bg-white shadow-sm inset-0 sticky top-0 z-40">
        <div className='container mx-auto relative'>
  <div className="flex-1">
   <li className='text-white list-none'> 
   <Link href="/" className=" normal-case text-xl">
     <Image src={logo} alt='logo' height={120} width={200} />
    </Link>
    </li>
  </div>
  <div className=" hidden md:flex space-x-4">
    <ul className="menu menu-horizontal px-1 list-none">
      {navLink.map((item,ind)=>(
        <li key={item.id} className='text-[#111] list-none'>
         <Link href={item.link} className='text-[18px] gap-5' >{item.title}</Link>
         </li>
      ))}
      
     
    </ul>
    <div className='flex justify-center items-center cursor-pointer text-[18px]'>
       <AiOutlineShoppingCart />
    </div>
  </div>
  {/* Mobile menu Show */}
 
  <div className="md:hidden ">
      <button
        className=" md:hidden  absolute top-3 z-10 text-white right-3 px-2 py-1  hover:text-gray-600"
        onClick={toggleMenu}
      >
        <AiOutlineMenu />
      </button>
      {isOpen && (
       
        <ul className="flex justify-center items-center menu 
        absolute top-[56px] left-0 w-full bg-white px-1 list-none transition-opacity ease-out duration-300">
        {navLink.map((item,ind)=>(
        <li key={item.id} className='text-[#111] list-none'>
         <Link href={item.link} className='text-[18px] gap-5' >{item.title}</Link>
         </li>
      ))}
    </ul>
     
      )}
    </div>
   {/* Mobile menu Show en  */}
</div> 
        </div>
   
  </>
    );
};

export default Navbar;