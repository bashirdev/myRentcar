
import Image from "next/image";
import Rating from "./Rating";


const ProductDetails = ({productDetailsData}:any) => {
    const {carName,bookings, carModel,engineCC,perDayPrice,fuelType,transmissionType,seatingCapacity,mileage, features, imageURLs, availabilityStatus, insuranceInfo }=productDetailsData as any

  const myRating=bookings[0]['reviews'].map((item:any)=> item.rating);
 const featureItem=features.join(' | ')


    
    return (
        <>
        <div className='container pt-4 pb-4 grid lg:grid-cols-2 md:grid-cols-2 gap-6'>
        <div>
            <div className="group relative">
        
                <Image src={imageURLs[0]} alt='' height={100} width={100} className='w-full h-auto' />
                <Image src={imageURLs[1]} alt='' height={100} width={100} className='w-full h-auto opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out absolute inset-0' />
           
             </div>
          
      
            </div>
            <div>
                <h2 className='md:text-3xl text-2xl font-medium uppercase mb-2 text-gray-600'>{carName}</h2>
                <h4 className='md:text-2xl text-1xl font-medium uppercase mb-2 text-gray-500'>Model : <span className="text-primary">{carModel}</span></h4>
               <Rating rating={myRating} />
                      <div className="space-y-2">
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Availability:</span>
                            <span className='text-primary'>{availabilityStatus === true ? `Available text-primary` : 'Already Booked'}</span>
                        </p>
                           <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Engine Capacity:</span>
                            <span className='text-primary'>{engineCC}</span>
                        </p>
                      
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Fuel Type:</span>
                            <span className='text-primary'>{fuelType}</span>
                        </p>
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Transmission Type:</span>
                            <span className='text-primary'>{transmissionType}</span>
                        </p>
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Seat Capacity:</span>
                            <span className='text-primary'>{seatingCapacity}</span>
                        </p>
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>mileage Per Hours:</span>
                            <span className='text-primary'>{mileage}</span>
                        </p>
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Insurance Info:</span>
                            <span className='text-primary'>{insuranceInfo.provider}</span>
                            <span className='text-primary'>{insuranceInfo.coverageType}</span>
                           
                        </p>
                        <p className='text-gray-800 font-semibold space-x-2'>
                        <span>Features : </span>
                        <span className='text-primary'>{featureItem}</span>
                           
                        </p>
                      </div>
                 
                  <div className="text-gray-800 mt-4  ">
                  <h5 className='font-bold text-2xl'>Per Day Price : ${perDayPrice}</h5>
                  {/* <span className='text-primary font-semibold text-xl'>{item.price * qty}</span> */}
                  </div>
                  {/* <p className='mt-4 text-gray-600 text-base'>{item.description}</p> */}

                 
                <div  className="mt-4">
               {availabilityStatus === true ?  <button   className="bg-primary w-2/1  text-white hover:bg-transparent hover:text-primary border hover:border-primary px-5 py-3 rounded">BOOKNOW</button> :  <button   className="bg-red-800 w-full text-white hover:bg-transparent  border  px-3 py-3 rounded">NOT AVAILABLE</button>  } 
                </div>
            </div>
        </div> 
    </>
    );
};

export default ProductDetails;