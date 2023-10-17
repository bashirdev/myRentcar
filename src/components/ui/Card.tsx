"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbSearch } from 'react-icons/tb';
import Rating from './Rating';
import { BsFillBagFill, BsFillTagFill } from 'react-icons/bs';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import whatsappIcon from '../../../public/assets/img/whatsapp.png'




const Card = ({item}:any) => {


const myRating=item.bookings[0]['reviews'].map((item:any)=> item.rating);

const randomNumber=Math.floor(Math.random() * 6) + 1
let webLink='https://myrent-car-bashirdev.vercel.app/'
    return (
        <div>
            <div className='group bg-white  shadow-md overflow-hidden rounded-md relative cursor-pointer h-fit duration-1000 '>
                       <div className="relative group overflow-hidden  ">
                           <Image src={item.imageURLs[0]} alt="" height={100} width={100} 
                            layout='responsive' className='smooth-animation infinite-slide animate-slide ease-in-out block object-cover ' />
                          <div className="z-50 absolute inset-0 bg-black bg-opacity-0  hover:bg-opacity-10 flex items-center justify-center   ">
                          
                             <Link href={`/productDetails/${item.id}`} className='flex items-center justify-center  '>
                             <span className='bg-primary hover:bg-green-800 p-2 text-white rounded-md  '><TbSearch  /></span>
                            </Link>
                             <Link className='  p-2 text-white ' href={`https://wa.me/78356135?text=${webLink+item.id}`} target="_blank" rel="noopener noreferrer">
                               <Image src={whatsappIcon} alt='whatsapp' height={100} width={100} className='w-[35px] h-[35px] hover:-rotate-90 transition-all duration-300'  />
                             </Link>
                      
                            </div>
                           <div className="absolute top-0 inset-0">
                            <Rating rating={myRating} />
                          </div>
                        </div>
                        <div className="mt-2 px-3 pb-2 text-center">

                          <div className='border-b-[1px] border-gray-100 py-3  font-semibold text-[#4F5DEC] flex justify-center items-center relative'>
                            <p className='absolute top-0 left-4 inset-0'><BsFillTagFill className='text-[#4F5DEC] font-semibold' />
                          </p> 
                           <p>15% off Deal</p>
                          </div>
                          <div className='border-b-[1px] border-gray-100 py-3 flex items-center justify-center'>
                          <h4 className='text-bold text-[40px] text-[#4F5DEC]  italic '>${item. perDayPrice}</h4>
                          <div className="flex flex-col pl-2">
                          <p>FROM</p>
                           <p>/DAY</p>
                          </div>
                          </div>
                          <h4 className='text-[22px] capitalize font-bold  leading-4 pb-2 pt-2'>{item.carName}</h4>
                          <p className='text-gray-400 text-center text-[18px] py-2'>{item?.transmissionType}</p>
                          <div className='flex justify-around items-cneter text-[#4F5DEC] border-b-[1px] border-t-[1px] border-gray-100 py-3'>
                          <p className=' flex items-center justify-center'><AiOutlineUsergroupAdd className='pr-2 text-bold text-[30px]' />{item.seatingCapacity}</p>
                            <p className='flex items-center justify-center'><BsFillBagFill className='pr-2 text-bold text-[30px]' />{randomNumber}</p>
                          </div>
                         
                        </div> 
                        <div className='mt-2 flex justify-center items-center'>
                            <Link  href={`/productDetails/${item.id}`} className='px-3 py-3 flex items-center justify-center text-[#fff] bg-gray-800  hover:bg-blue-600 hover:text-[#fff] w-full'>BOOKNOW</Link>
                            <Link  href={`/productDetails/${item.id}`} className='px-3 py-3 flex items-center justify-center text-[#4F5DEC] bg-gray-100  hover:bg-blue-600 hover:text-[#fff] w-full'>Details</Link>
                        </div>
             </div> 
        </div>
    );
};

export default Card;
