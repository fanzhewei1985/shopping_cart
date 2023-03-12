import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import action from '../actions/action'
const Item = () => {
    const navigate=useNavigate()
    const index = useParams()
    const data = useSelector(state => state.shoppingReducer.allProducts)
    const i = index.id - 1
   const [count,setCount]=useState(0)
    const dispatch=useDispatch()
    return (
        <div className='item'>
            <div className='productPic'>
                <div><img src={data[i]?.image} width='250px' alt=""/></div>
                <div>
                    <h3>{data[i]?.title}</h3>
                    <p>$ {data[i]?.price}</p>
                    <div className='priceBtns'>
                        <button  onClick={()=>setCount((prev)=>{let newV=prev+1
                            return newV})
                        } className="btn btn-outline-dark me-2">+</button>
                        <p>{count}</p>
                        <button  onClick={
                            ()=>setCount((prev)=>{
                            if (prev>0){ let newV=prev-1
                            return newV} else {return 0}}
                            )} className="btn btn-outline-dark me-2">-</button>
                    </div>
                    <button className="btn btn-dark me-2"
                    onClick= {()=>dispatch(action.getQtyFunc(index.id,count))}>Add to Cart</button>

                </div>
            </div>
            <div><p>{data[i]?.description}</p></div>
            <button  className="btn btn-outline-dark me-2"  onClick={() => navigate(-1)}>Return</button>
        </div>
    );
};

export default Item;