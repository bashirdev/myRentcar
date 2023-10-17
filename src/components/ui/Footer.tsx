'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from "../../../public/assets/img/logo.png"

const Footer = () => {
  let content=null
  //@ts-ignore
  const [show, setShow] = useState(false)

  useEffect(()=>{
   window.addEventListener('scroll', ()=>{
     if(window.scrollY > 100){
       setShow(true)
     }else{
       setShow(false)
     }
     return()=>{
      //@ts-ignore
      window.removeEventListener('scroll') 
    }
   })
 
 },[])
    return (
   <>
     <footer className="bg-white pt-16  border-t border-gray-300 " >
          <div className="container">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
               <div className="xl:col-span-1 ">
                    {/* logo start */}
                    <Link href="/" className=" normal-case text-xl">
                       <Image src={logo} alt='logo' height={120} width={200} />
                   </Link>
               {/*End  logo start */}
                    <p className="text-gray-500 text-base font-roboto " >
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.
                    </p>
                    <div className="flex space-x-5">
                         <Link href="/" className="text-gray-400 hover:text-gray-500" >
                         <FaFacebook />
                         </Link>

                         <Link href="/" className="text-gray-400 hover:text-gray-500" >
                              <FaInstagram />
                         </Link>

                         <Link href="/" className="text-gray-400 hover:text-gray-500" >
                         <FaWhatsapp />
                         </Link>


                    </div>

               </div>




     <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
     <div className="md:grid md:grid-cols-2 md:gap-8 ">
          <div>
               <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase " > Solutions </h3>
               <div className="mt-4 space-y-4 ">
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Marketing
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Analytics
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Commerce
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Insights
                    </Link> 
               </div>
          </div>



          <div className="mt-12 md:mt-0">
               <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase " > Support </h3>
               <div className="mt-4 space-y-4 ">
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Pricing 
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Documentation
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Guides
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         API Status
                    </Link> 
               </div>
          </div> 


     </div>


     <div className="md:grid md:grid-cols-2 md:gap-8 ">
          <div>
               <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase " > Company </h3>
               <div className="mt-4 space-y-4 ">
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         About
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Blog
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Jobs
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Service
                    </Link> 
               </div>
          </div>



          <div className="mt-5">
               <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase " > Legal </h3>
               <div className="mt-4 space-y-4 ">
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Claim 
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Privacy
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Policy
                    </Link>
                    <Link href="/" className="text-base text-gray-500 hover:text-gray-900 block font-semibold " >
                         Terms
                    </Link> 
               </div>
          </div> 


     </div>  
       <Link href='/' className={show === true ? 'back2Top smooth-scroll p-3 z-110' : 'back2Top hide'}>TOP</Link>
     </div>





          </div>

     </div>


     <div className="text-center pb-5">
    <small className=" ">
    &copy;{new Date().getFullYear()}  Designed 
       
       by Bashir Ahammed
        
    </small>
</div>

</footer>
     
  
   </>
    );
};

export default Footer;