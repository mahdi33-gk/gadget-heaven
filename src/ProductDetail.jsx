import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    console.log(productId)
    return (
        <div>
            <h1>Here is book detail section.</h1>
        </div>
    );
};

export default ProductDetail;