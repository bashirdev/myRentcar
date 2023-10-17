"use client"
import {useState, useEffect} from 'react'
import React from 'react';
import { sliderData } from './../../data';
import BannerCard from './BannerCard';


const Banner = () => {

    const SliderData=sliderData
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      if (currentIndex < SliderData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Wrap around to the first image when at the end of the array
        setCurrentIndex(0);
      }
    };
  

    const prevImage = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        // Wrap around to the last image when at the beginning of the array
        setCurrentIndex(SliderData.length - 1);
      }
    };

  
    useEffect(()=>{

    setInterval(()=>{
     nextImage()
    },5000)
    setInterval(()=>{
      prevImage ()
    },12000)

  },[])



    return (
  <div  className='relative container overflow-x-hidden'>
     
      
        {/* slider */}
      
         
            <div className=" carousel w-full">
         
                    <div  id="slide1" className="carousel-item group relative w-full bg-[#111] bg-blend-overlay"
                    style={{
                      backgroundImage:`url(${SliderData[currentIndex].bgImage})`,
                      backgroundPosition:'center',
                      backgroundRepeat:'no-repeat',
                      height:'800px',
                      backgroundSize:'cover'
                    }}
                    >
                {/* Carousel button */}
                <div className="absolute z-30 flex opacity-0 transition-opacity group-hover:opacity-100 duration-300 justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <button onClick={nextImage} className="btn btn-circle ">❮</button> 
                       <button onClick={prevImage} className="btn btn-circle ">❯</button>
                  </div>

                {/* Carousel button end */}
                  <div className="flex  justify-center items-center relative ">
                     <div className="container grid grid-cols-1 lg:grid-flow-row  lg:grid-cols-2  gap-6 justify-center items-center ">
                             <div className=" text-white pl-5 lg:pl-10  ">
                                  <h1 className='text-[22px] pt-[350px] sm:pt-[215px]  md:pt-[40px] lg:pt-[0px] lg:leading-[60px] sm:text-[30px] md:text-[60px] lg:text-[60px]'>{SliderData[currentIndex].title}</h1>
                                  <p className='text-[16px] max-w-sm py-5'>{SliderData[currentIndex].description}<span className='text-[#4F5DEC] pl-1'>Starting @ $20</span> </p>
                               <div className='flex gap-3 sm:gap-3'>
                               <button className='
                                   px-[15px] py-[5px] sm:px-[18px] md:px-[20px] lg:px[20px]
                                bg-[#4F5DEC] 
                                text-white rounded-md text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]'>
                                     ABout Us
                                 </button>
                               <button className='
                                    px-[15px] py-[10px] sm:px-[18px] md:px-[20px] lg:px[20px]
                               ring-1 border-[#4F5DEC] hover:bg-[#4F5DEC] 
                                text-white rounded-md  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]'>
                                  Contact Us
                                 </button>
                               </div>
                        </div>

                     <BannerCard />
                     </div>

         

                      </div>
                    
                        
                  
                    </div>
               
             </div> 

</div>
       

 

    );
};

export default Banner;