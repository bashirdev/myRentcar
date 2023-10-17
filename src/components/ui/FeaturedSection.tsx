"use client";
import React from 'react';
import dummyCars, { sliderData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import car from '../../../public/assets/img/slider3.jpg'
import Facilicty from './Facilicty';

const FeaturedSection = () => {
   
    const images1=dummyCars?.map(item => item).slice(1,5)
    const images2=dummyCars?.map(item => item).slice(2,6)
    const images3=dummyCars?.map(item => item).slice(3,7)
    const images4=dummyCars?.map(item => item).slice(4,8)
   
    const settings = {
        dots: false,
        infinite: true,
       
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 7000,
      };



    return (
        <>
        <Facilicty />
        <div className='py-[100px] text-center'>
        <h2 className='text-[#111] border-b-2 border-indigo-800 inline-block text-2xl font-bold '>Brand</h2>
        <p className='text-[16] max-w-[400px] text-center m-auto py-2 '>Proin gravida nibh vel velit auctor  aliquet. Aenean sollicitudin, lorem
           quis bibendum auctor.</p>
 <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-[50px]">
        
  <div className="col-span-12 sm:col-span-1  md:col-span-1 lg:col-span-1">
      {/* images */}
      <div className="col-span-5  overflow-hidden md:block lg:block sm:block   text-gray-700 ">
          <div className="flex flex-1 flex-wrap items-center justify-center">
                <div className="flex flex-wrap w-full ">
                    <div className="w-1/2 p-1 md:p-2">

                        <Slider {...settings}>
                            {images1?.map((item,ind)=>(

                        <div key={item.id}>

                        <div className='relative flex items-center justify-center text-center' >
                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={`${item.imageURLs[0]}`} height={200} width={200} />
                        
                        <Link href={`/productDetails/${item.id}`} className="absolute w-full px-5 py-2 text-[#fff] opacity-70 bg-[#111]  hover:bg-blue-600 hover:text-[#111] transition rounded-md">{item.carName}</Link>
                        </div>
                    
                        </div> 
                        ))}
                    </Slider>

                <Slider {...settings}>
                        {images2?.map((item,ind)=>(

                <div key={item.id}>

                    <div className='relative flex items-center justify-center text-center' >
                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={`${item.imageURLs[0]}`} height={200} width={200} />
                    
                    <Link href={`/productDetails/${item.id}`} className="absolute w-full px-5 py-2 text-[#fff] opacity-70 bg-[#111]  hover:bg-blue-600 hover:text-[#111] transition rounded-md">{item.carName}</Link>
                    </div>
                
                    </div> 
                ))}
                    </Slider>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">

                        <Slider {...settings}>
                            {images3?.map((item,ind)=>(

                        <div key={item.id}>

                        <div className='relative flex items-center justify-center text-center' >
                        <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={`${item.imageURLs[0]}`} height={200} width={200} />
                        
                        <Link href={`/productDetails/${item.id}`} className="absolute w-full px-5 py-2 text-[#fff] opacity-70 bg-[#111]  hover:bg-blue-600 hover:text-[#111] transition rounded-md">{item.carName}</Link>
                        </div>
                    
                        </div> 
                        ))}
                    </Slider>

  <Slider {...settings}>
        {images4?.map((item,ind)=>(

   <div key={item.id}>

     <div className='relative flex items-center justify-center text-center' >
         <Image alt="gallery" className="block object-cover object-center w-full  rounded-lg"
        src={`${item.imageURLs[0]}`} height={200} width={200} />
     
     <Link href={`/productDetails/${item.id}`} className="absolute w-full px-5 py-2 text-[#fff] opacity-70 bg-[#111]  hover:bg-blue-600 hover:text-[#111] transition rounded-md">{item.carName}</Link>
      </div>
  
       </div> 
   ))}
    </Slider>
                    </div>
   
    
                    
              </div>
         </div>

     </div>
        {/*end images */}
  </div>

  <div className="col-span-12 sm:col-span-1  md:col-span-1 lg:col-span-1  ">

  
  <Slider {...settings}>
     
    
        {sliderData?.map((item,ind)=>(
        <div  key={item.id}>

        <div className='relative flex items-center justify-center text-center ' >
       
        <Image alt="gallery" className="block object-cover object-center w-full h-[250px] rounded-lg "
        src={`${item.bgImage}`} height={250} width={370} />
        <div className=' text white flex justify-center items-center absolute w-full px-5 py-[10px] flex-col'>
           <h2 className='text-1xl font-bold py-2 bg-[#111] px-2 text-white'>{item.title}</h2>
         
           <Link href={`/productDetails/${item.id}`} className=" text-white my-2 hover:bg-blue-600 hover:text-white transition rounded-md">
           <button className='ring-1 border-[#fff] bg-[#4F5DEC] py-[12px]
                                text-white rounded-md px-[40px]'>
                                  Details
                                 </button>
           </Link>
        </div>
        </div>
        </div> 

))}

    </Slider>
  
  </div>

</div>

  
            

        </div>
        </>
    );
};

export default FeaturedSection;