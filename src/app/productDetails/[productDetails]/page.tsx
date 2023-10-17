import ProductDetails from '@/components/ui/ProductDetails';
import dummyCars from '@/data';
import React from 'react';

const ProductDetailsPage = ({params}:any) => {
   
    const productDetailsData=dummyCars.find((item:any)=> item.id === params.productDetails)
  
    
    return (
        <div>
          <ProductDetails productDetailsData={productDetailsData} />
        </div>
    );
};

export default ProductDetailsPage;