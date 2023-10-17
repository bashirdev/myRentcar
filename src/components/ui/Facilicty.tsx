"use client"
import React from 'react';
import { BsGlobeAmericas, BsJournalBookmark, BsSearch } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';

const Facilicty = () => {
    return (
        <div id='service'>
            <div className="container mx-auto pt-[80px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
  
    <div className="bg-white p-4 ">
        <div className="flex gap-3">
           <BsSearch className='text-3xl font-bold text-[#4F5DEC]' />
           <h4 className='text-1xl font-bold text-[#111]'>24/7 CAR SUPPORT</h4> 
        </div>
      <p className='text-base text-gray-800'>Proin gravida nibh vel velit auctor
aliquet. Aenean sollicitudin, lorem
quis bibendum auctor.</p>
    </div>
    <div className="bg-white p-4 ">
        <div className="flex gap-3">
           <BsGlobeAmericas className='text-3xl font-bold text-[#4F5DEC]' />
           <h4 className='text-1xl font-bold text-[#111]'>LOTS OF LOCATION</h4> 
        </div>
      <p className='text-base text-gray-800'>Proin gravida nibh vel velit auctor
aliquet. Aenean sollicitudin, lorem
quis bibendum auctor.</p>
    </div>
    <div className="bg-white p-4 ">
        <div className="flex gap-3">
           <BsJournalBookmark className='text-3xl font-bold text-[#4F5DEC]' />
           <h4 className='text-1xl font-bold text-[#111]'>RESERVATION ANYTIME</h4> 
        </div>
      <p className='text-base text-gray-800'>Proin gravida nibh vel velit auctor
aliquet. Aenean sollicitudin, lorem
quis bibendum auctor.</p>
    </div>
    <div className="bg-white p-4 ">
        <div className="flex gap-3">
           <FaCarSide className='text-3xl font-bold text-[#4F5DEC]' />
           <h4 className='text-1xl font-bold text-[#111]'>RENTALS CARS</h4> 
        </div>
      <p className='text-base text-gray-800'>Proin gravida nibh vel velit auctor
aliquet. Aenean sollicitudin, lorem
quis bibendum auctor.</p>
    </div>
   

   
  </div>
</div>

        </div>
    );
};

export default Facilicty;