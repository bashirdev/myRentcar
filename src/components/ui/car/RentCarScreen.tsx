'use client'
import { useState,useEffect} from 'react';
import dummyCars from '@/data';
import { Car } from '@/types/type';
import { usePathname } from 'next/navigation'
import Card from '../Card';
import { TbSearch } from 'react-icons/tb';
import Link from 'next/link';


const RentCarScreen = () => {
  const [search,setSearch] =useState('')
  const [searchKeyword, setSearchKeyWord] = useState("0")
  const [value, setValue] = useState(0)
 const [filterItems, setFilterItems] =useState<Car[]>([])
 const [basicActive, setBasicActive] = useState('')

const pathName=usePathname()

//@ts-ignore
const categories = [...new Set(dummyCars?.map(item => item.carName))]; 

const [currentPage, setCurrentPage] = useState(1);
const [countItem, setCountItem] = useState(8)
const indexOfLastItem = currentPage * 8;
const indexOfFirstItem = indexOfLastItem - 8;
const currentItems = dummyCars.slice(indexOfFirstItem, indexOfLastItem);

const handleShowMore = () => {
  
  setCountItem((currentPage * currentItems.length)+8) 
  setCurrentPage(currentPage + 1);
  
  

};

const handleShowLess = () => {
  if (currentPage > 1) {
    setCountItem(countItem - 8)
    setCurrentPage(currentPage - 1);
    
  }
};


const handleFilterItem=(items:string)=>{
    setBasicActive(items)
   let filterItem=dummyCars.filter(item=> item.carName === items)
    setFilterItems(filterItem)
   
}

const itemAllSet=()=>{

   setFilterItems([])
   setBasicActive('All')

}




 const handleValueChange=(e:any)=>{
  setValue(e.target.value)
 let PricefilterItem=dummyCars.filter(item=> item.perDayPrice === Number(value))
  setFilterItems(PricefilterItem)
  
 
 }



useEffect(()=>{
  itemAllSet()
},[])



let content=null;

if(dummyCars?.length > 0){
   
    content=currentItems?.map(item=> <Card  key={item.id} item={item} /> )
    
  }



  if(filterItems?.length > 0){
    content=filterItems?.map(item=> <Card  key={item.id} item={item} /> )
    
  }
 

 
 
    
    return (
      <div className="container py-5">
        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center sm:items-start">
        
       {/* sidebar */}
       <div className="w-full sm:w-3/12  ">
             <div className="w-full flex items-center justify-arround flex-col px-2 relative">
            <div className='items-start  w-full  hidden md:block'>
          <span className='absolute left-4 top-4 text-lg text-gray-400'>
            <TbSearch />
          </span>
          <input type='text' onChange={(e)=> setSearch(e.target.value)} value={search}  className='pl-12 w-full sm:w-3/4     border-primary py-3 rounded-2-md focus:ring-primary' placeholder='Search' />
      
      </div>

            <hr />

            <div className="shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
            <div className='flex  mb-[50px]'>
           <div className=" ">
           <button onClick={itemAllSet} className={` ${basicActive === 'All' ? `tab-active text-blue-800 text-2xl` : ''} text-2xl`}>All</button>
               {categories?.map((items,ind)=>(
                <div key={ind}>
                  <div  className="flex flex-start  py-3">
                    <input checked={basicActive === items} onClick={()=>handleFilterItem(items)} value={items} type="checkbox"   className={`text-primary focus:ring-0 rounded-sm cursor-pointer`} />
                    <label htmlFor={items} className="text-gray-600 ml-3 cursor-pointer uppercase hover:text-primary">{items}</label>
                  
                </div>
                   
                </div>
               ))}
             
        </div>
           </div>

      
        </div>



            <hr />
       <div className="   shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
         <label htmlFor="range" className="font-bold text-gray-600 py-2">Price($ {value})</label>
         <input  type="range" onChange={handleValueChange} name="price" min={Number(0)} max={Number(100)} value={value} 
         className="appearance-none 
         w-full h-0.5 bg-custom text-primary rounded outline-none  " />
        </div>
            <hr />
       <div className="   shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
         <label htmlFor="range" className="font-bold text-gray-600 py-2">Price($ {value})</label>
         <input  type="range" onChange={handleValueChange} name="price" min={Number(0)} max={Number(100)} value={value} 
         className="appearance-none 
         w-full h-0.5 bg-custom text-primary rounded outline-none  " />
        </div>
</div>
            
             </div>
       
{/* sidebar end */}
       
        
        <div className="w-9/12  ">
           <Link href="/rentCarShop" className='text-2xl font-bold '>
            <span className='mb-[40px]'>{pathName}</span>
           </Link>
          <div className='flex flex-wrap  '>
            <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[100%] gap-5'>
              {content}
             
           
             </div>
          </div>
          <div className="flex justify-center items-center gap-5 mt-[50px] ">
  <button onClick={handleShowLess} className="btn btn-outline w-[150px] sm:w-[300px]">Previous page</button>
  <button onClick={handleShowMore} className="btn btn-outline w-[150px] sm:w-[300px]">Next</button>
</div>
        </div>
     </div>
             
    </div>
    );
};

export default RentCarScreen;