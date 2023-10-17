'use client'
import React,{useRef, useState} from 'react';
import { IoMdCheckboxOutline, IoMdTime } from 'react-icons/io';
import Modal from './Modal';
import  BannerShapes  from '../../../public/assets/img/Union.svg'


const BannerCard = () => {
   const [formData, setFormData] = useState([]) as any
   //@ts-ignore
   let pickUpLocationRef:any, dropLocationRef:any, datePickUpRef:any, dropOffDateRef:any,pikupUpTimeRef:any,pickupMinuteRef:any, dropOffTimeRef:any,dropoffMinuteRef:any=useRef() 
   
     const handleSubmit=(e:any)=>{
         e.preventDefault();
        
      let pickUpLocation=pickUpLocationRef.value ;
      let dropLocation=dropLocationRef.value;

       let datePickUp=datePickUpRef.value;
       let pickupUpTime=pikupUpTimeRef.value;
       let pickupMinute=pickupMinuteRef.value;

       let dropOffDate=dropOffDateRef.value;
      let dropOffTime=dropOffTimeRef.value ;
      let dropoffMinute=dropoffMinuteRef.value ;
   
      setFormData({pickUpLocation,dropLocation,datePickUp,pickupUpTime,pickupMinute,dropOffDate,dropOffTime,dropoffMinute})
     }

  
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    
  };

  const ModalOpen=()=>{
   //@ts-ignore
   document.getElementById('my_modal_3').showModal()
  }



    return (
        <div>
             <div className={`bg-white rounded-md bg-center  shadow-md  lg:relative   lg:h-[600px]  overflow-hidden bg-cover z-10  `}>
                         <div  className="relative">
                            {/* <Image src={BannerShapes} alt='shapes' width={600} height={300} /> */}
                            <div className="bg-blue-600 w-[400px] py-5 px-3 ">
                                <h1 className=' text-white text-[12px] sm:text[14px] md:text-2xl '>
                                 LET’S FIND YOUR PERFECT CAR</h1>  
                            </div>
                            
                            <div className='w-full  px-5'>
                              <form onSubmit={handleSubmit}>
                               <div className="my-4 flex flex-col">
                                <label className='mb-2' htmlFor="">PICK-UP LOCATION</label>
                                <input type="text" ref={(input)=> pickUpLocationRef=input} defaultValue='' placeholder="City,Airport, Station etc." 
                                   className="border p-2 w-full " />
                               fo</div>
                               <div className="my-4 flex flex-col w-full">
                                <label className='mb-2' htmlFor="">DROP-OFF LOCATION</label>
                                <input type="text" ref={(input)=> dropLocationRef=input} defaultValue='' placeholder="City,Airport, Station etc." 
                                   className="border p-2 w-full " />
                               </div>

                            {/* DATE */}
                              <div className="flex flex-col md:flex-row gap-3">
                              <div className="mb-4 flex flex-col w-full">
                                <label className='mb-2' htmlFor="">PICK-UP DATE</label>
                                <input type="date" ref={(input)=> datePickUpRef=input} defaultValue='' placeholder="11-05-2023" 
                                   className="border p-2 w-full " />
                               </div>
                               <div className="mb-4 flex flex-col w-full">
                                <label className='mb-2' htmlFor="">DROP-OFF DATE</label>
                                <input type="date" ref={(input)=> dropOffDateRef=input} defaultValue='' placeholder="12-25-2023" 
                                   className="border p-2 w-full " />
                               </div>
                              </div>
                        {/* DATE End */}
                        {/* Time */}

                        <div className="flex flex-col justify-between  w-full sm:flex-col md:flex-row space-y-3">
                          <div className="flex justify-start  w-full sspace-x-0 sm:space-x-2 md:space-x-2 lg:space-x-2 relative">
                          <div className='absolute hidden xl:block  md:left-[90px] top-[30%]'>
                             <IoMdTime className='text-blue-600' /> 
                          </div>
                              <select ref={(input)=> pikupUpTimeRef=input} defaultValue='' className="border  py-2 rounded-md w-full ">
                                <option value="00:00">00:00</option>
                                <option value="01:00">01:00</option>
                                <option value="02:00">02:00</option>
    
                               </select>
                              <span>:</span>
                              <div className='absolute hidden xl:block right-6 top-[30%]'>
                             <IoMdTime className='text-blue-600' /> 
                          </div>
                             <select ref={(input)=> pickupMinuteRef=input} defaultValue='' className="border  py-2 rounded-md w-full ">
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                           </div>
                          <div className="flex justify-start  w-full sspace-x-0 sm:space-x-2 md:space-x-2 lg:space-x-2 relative">
                          <div className='absolute hidden xl:block left-[90px] top-[30%]'>
                             <IoMdTime className='text-blue-600' /> 
                          </div>
                              <select ref={(input)=> dropOffTimeRef=input} defaultValue='' className="border py-2 rounded-md w-full ">
                                <option value="00:00">00:00</option>
                                <option value="01:00">01:00</option>
                                <option value="02:00">02:00</option>
    
                               </select>
                              <span>:</span>
                              <div className='absolute hidden xl:block right-6 top-[30%]'>
                             <IoMdTime className='text-blue-600' /> 
                          </div>
                             <select ref={(input)=> dropoffMinuteRef=input} defaultValue='' className="border py-2 rounded-md w-full">
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                           </div>
                          

                       </div>
                 {/* Time end*/}
              
                 <div className='flex py-5'>
                      <label className='gap-2'>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                       <span className='pl-3 '> Driver age between 30-65</span>
                      </label>
                 
               </div>
               <div className="flex justify-between  space-y-3 flex-col sm:flex-row sm:items-center ">
                <div className='flex-1 items-center  space-x-2'>
                    <label className="">
                       <p className='flex flex-row  w-full items-center'>
                       <IoMdCheckboxOutline /> 
                        <span className='pl-2 text-[12px] sm:text-[16px]'> 24/7 Phone Support</span>
                       </p>
                       <p className='flex flex-row  w-full items-center'>
                       <IoMdCheckboxOutline /> 
                        <span className='pl-2 text-[12px] sm:text-[16px]'>No Credit Card Fees</span>
                       </p>
                       <p className='flex flex-row  w-full items-center'>
                       <IoMdCheckboxOutline /> 
                        <span className='pl-2 text-[12px] sm:text-[16px]'>No Ammendmends Fees</span>
                       </p>
                      
                   </label>
                    </div>
            
                    <div className="flex-1">
                    <button disabled={!isChecked} className={`${isChecked === false ? `disabled bg-gray-100 py-[12px]
                     text-[#101010] rounded-md px-[40px]`: `bg-[#4F5DEC] py-[12px]
                     text-white rounded-md px-[40px] hover:bg-transparent
                      hover:ring-2 hover:text-[#111] hover:ring-[#4F5DEC]`}
                    
                    `}
                    onClick={ModalOpen}
                    >Submit</button>
                    </div>
                    
                  </div>

                  </form>  
                            </div>

                         </div>
                          
                         
                      </div>
                <Modal formData={formData} />      
        </div>
    );
};

export default BannerCard;