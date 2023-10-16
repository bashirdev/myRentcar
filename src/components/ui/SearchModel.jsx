import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbSearch } from 'react-icons/tb';
import Card from './Card';

const SearchModel = ({searchData}) => {
    let content=null
    if(searchData?.length > 0){
        content=searchData?.map(item=> <Card key={item.id} item={item} /> )
        
      }
    return (
        <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_4" className="modal w-full container">
<div className="modal-box max-w-[100%] py-[30px]">
<form method="dialog">
  {/* if there is a button in form, it will close the modal */}
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
</form>
<h1 className="text-bold text-3xl text-green-800 border-b-2 border-indigo-800 inline-block">{searchData.length > 0 ? `Total matched : ${searchData.length}`:"Not Matching"}</h1>

<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 ease-in-out">
         {content}
             
           
</div>

</div>
</dialog>
    </div>
    );
};

export default SearchModel;