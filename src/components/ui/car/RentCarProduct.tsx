import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { TbSearch } from 'react-icons/tb';




const RentCarProduct = ({item}:any) => {


    return (
        <>
        
        <div className='group bg-white  shadow-md overflow-hidden rounded-md relative cursor-pointer h-fit py-2 px-2 '>
                  <div className="relative group ">
                  <div className="relative group overflow-hidden  ">
                        <Image src={item.imageURLs[0]} alt="" height={100} width={100} 
                        layout='responsive' className='smooth-animation infinite-slide animate-slide ease-in-out block object-cover ' />
                        <div className="absolute inset-0 bg-black bg-opacity-0  hover:bg-opacity-10 flex items-center justify-center   ">
                           <Link href={`/productDetails/${item.id}`} className='flex items-center justify-center  '>
                             <span className='text-[#fff]   bg-blue-600  hover:text-[#111] rounded-md  p-[10px] '><TbSearch  /></span>
                           </Link>
                        </div>
                        <div className="absolute inset-0">
                            {/* <Rating rating={item.bookings['reviews']?.rating} /> */}
                        </div>
                        </div>
                        <div className="mt-2 px-3 pb-2">
                          <h4 className='text-base capitalize font-semibold leading-4 pb-2 pt-2'>{item.carName}</h4>
                        
                          <span className='text-primary font-semibold'>Price : $ {item.perDayPrice}</span>
                          {/* <div className="flex items-start gap-2 mt-2">
                               <Rating value={Number(item.star)} text='total reviews'  />
                              <span className='text-orange-400'><AiFillStar /></span>
                              <span className='text-orange-400'><AiFillStar /></span>
                              <span className='text-orange-400'><AiFillStar /></span>
                              <span className='text-orange-400'><AiFillStar /></span>
                              <span className='text-orange-400'><AiFillStar /></span>
                          </div> */}
                        </div> 
                        <div className='mt-2'>
                            <Link  href={`/productDetails/${item.id}`} className='px-3 py-3 flex items-center justify-center text-[#fff] bg-[#111]  hover:bg-blue-600 hover:text-[#111] w-full'>Book Now</Link>
                        </div>
               </div> 
               </div> 
   </>

    );
};

export default RentCarProduct;