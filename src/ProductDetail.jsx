import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    const data = useLoaderData()
    
    console.log(id)
    return (
        <div>
            <h1>Here is ProductId: {productId}</h1>
            
            
        </div>
    );
};

export default ProductDetail;