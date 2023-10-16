// 'use client'
// import { useEffect,useState  } from 'react';
// import { TbSearch } from 'react-icons/tb';




// const RentCarFilter = ({categories, itemAllSet}:any) => {

//     const [search,setSearch] =useState('')
//    const [value, setValue] = useState(0)
//    const [getByCat , setGetbyCat] = useState('')



 


 
//    const handleValueChange=()=>{
   
//     // dispatch(setPriceValue(value))
//     // setValue(e.target.value)
//     //  if(value > 1){
//     //     hanldeRemoveCatItemFromState()
//     //  }
//    }

//  const hanldeRemoveCatItemFromState=()=>{

//  }

 

//     return ( 
        
// <div className="w-full flex items-center justify-arround flex-col px-2 relative">
// <div className='items-start  w-full  hidden md:block'>
//           <span className='absolute left-4 top-4 text-lg text-gray-400'>
//             <TbSearch />
//           </span>
//           <input type='text' onChange={(e)=> setSearch(e.target.value)} value={search}  className='pl-12 w-full sm:w-3/4     border-primary py-3 rounded-2-md focus:ring-primary' placeholder='Search' />
      
//       </div>

//             <hr />

//             <div className="shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
//             <div className='flex justify-center items-center mb-[50px]'>
//            <div className="tabs ">
//            <button onClick={itemAllSet} className={`tab tab-lifted ${basicActive === 'All' ? `tab-active text-blue-800 text-2xl` : 'tab-lifted'} text-2xl`}>All</button>
//                {categories?.map((items,ind)=>(
//                 <div key={ind}>
//                      <button onClick={()=>handleFilterItem(items)} className={`tab tab-bordered font-bold  ${basicActive === items ? `tab-active text-blue-800 text-2xl ` : 'tab-lifted'}`}>{items}</button> 
//                 </div>
//                ))}
             
//         </div>
//            </div>
//         {/* <div  className="flex items-center py-3">
//                     <input checked={getByCat === 'All'}   onChange={(e)=>setGetbyCat(e.target.value)} value='All' type="checkbox"   id="all" className=" active text-primary focus:ring-0 rounded-sm cursor-pointer" />
//                     <label htmlFor="all" className="text-gray-600 ml-3 cursor-pointer uppercase hover:text-primary">All</label>
                  
//                 </div>
//                <div  className="flex items-center py-3">
//                     <input checked={getByCat === 'Indoor'} onChange={(e)=>setGetbyCat(e.target.value)} value='Indoor' type="checkbox"  id="indore" className={`text-primary focus:ring-0 rounded-sm cursor-pointer`} />
//                     <label htmlFor="indoor" className="text-gray-600 ml-3 cursor-pointer uppercase hover:text-primary">Indoor</label>
                  
//                 </div>
//                <div  className="flex items-center py-3">
//                     <input checked={getByCat === 'Indore'} onChange={(e)=>setGetbyCat(e.target.value)} value='Indore' type="checkbox"  id="indore" className={`text-primary focus:ring-0 rounded-sm cursor-pointer`} />
//                     <label htmlFor="indore" className="text-gray-600 ml-3 cursor-pointer uppercase hover:text-primary">Indore</label>
                  
//                 </div>
//                <div  className="flex items-center py-3">
//                     <input checked={getByCat === 'Outdoor'} onChange={(e)=>setGetbyCat(e.target.value)} value='Outdoor' type="checkbox"  id="outdoor" className={`text-primary focus:ring-0 rounded-sm cursor-pointer`} />
//                     <label htmlFor="outdoor" className="text-gray-600 ml-3 cursor-pointer uppercase hover:text-primary">OutDoor</label>
                  
//                 </div> */}
      
//         </div>



//             <hr />
//        <div className="   shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
//          <label htmlFor="range" className="font-bold text-gray-600 py-2">Price($ {value})</label>
//          <input  type="range" onChange={handleValueChange} name="price" min={Number(0)} max={Number(100)} value={value} 
//          className="appearance-none 
//          w-full h-0.5 bg-custom text-primary rounded outline-none  " />
//         </div>
// </div>


       
//     );
// };

// export default RentCarFilter;