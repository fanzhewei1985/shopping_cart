import React, {useEffect} from 'react';
import Products from "./Products";
import {useDispatch} from "react-redux";


const Home = () => {


    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0" >
                <img src="https://shop-present.com/wp-content/uploads/2022/01/Shopping-7.jpg" className="card-img-top" alt="..." height='550px'/>
                    <div className="card-img-overlay flex-column justify-content-center">
                        <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className='card-text lead fa-2x'>CHECK OUT ALL THE TRENDS</p>

                        </div>

                    </div>
            </div>
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <Products/>
        </div>
    );
};

export default Home;