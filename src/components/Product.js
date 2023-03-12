import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Product = ({product}) => {
    let navigate=useNavigate()
    return (
        <div>
            <div className='mb-4'>
                <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
                    <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                        <p className="card-text fw-bold">${product.price}</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="btn btn-outline-dark" onClick={()=>navigate(`/products/${product.id}`)} >Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;