'use client'
import {HiUserCircle} from 'react-icons/hi'
import dummyCars from "@/data";
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {

  //@ts-ignore
    const userTestimonial=dummyCars?.map((item:any)=> item.bookings[0].reviews);
  

    const settings = {
        dots: true,
        infinite: true,
       
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 4000,
      };

    return (
        <div className='container mx-auto px-4'>
<div className="flex  -mx-4">
<div className="w-full border-t-cyan-300 border-b-cyan-300  px-4 mb-8">
<Slider {...settings}>
   
  
      {userTestimonial[0]?.map((item:any,ind:number)=>(
      <div  key={ind} className='flex items-center justify-center flex-col sm:flex-row'>

      <div className='flex items-center justify-center ' >
       <div className='flex justify-center items-center '>
        
       <HiUserCircle className='text-[100px] font-bold ' />
       <div className="flex flex-col">
       <p className='text-1xl font-bold py-2 px-2 text-gray-600 '>{item.username}</p>
       <p className='text-base '>Graphic Designer</p>
       </div>
       </div>
       <div className='flex-1'>
       <p className='p-10 mx-w-[500px]'>{item.comment}</p>
      </div>
      </div>
      
      </div> 

))}

  </Slider>

 </div>
 </div>
 </div>
    );
};

export default Testimonial;