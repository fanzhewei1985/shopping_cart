import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import action from '../actions/action'

const ShoppingCart = () => {
    const allProducts = useSelector(state => state.shoppingReducer.allProducts)
    // const id = useSelector(state => state.shoppingReducer.id)
    // const count = useSelector(state => state.shoppingReducer.count)
    const totalAmt = useSelector(state => state.shoppingReducer.totalAmt)
    const selectItem = useSelector(state => state.shoppingReducer.selectedItem)
    const dispatch = useDispatch()
    console.log(selectItem,totalAmt)
    return (
        <div className='shoppingCart'>
            <div className='cartTop'>
                <h3>Cart</h3>
                <button className='btn btn-outline-dark' onClick={() => dispatch(action.closeCart())}>X</button>
            </div>
            {/*{count && */}
                <div>
            { selectItem.map(arr =>
                <div className='itemList'>
                    <div><img height='50px' src={arr.image}/></div>
                    <div style={{width: '200px'}}>
                        <p style={{fontSize: '12px'}}>{arr.title} <span style={{fontSize: '10px'}}>X {arr.count}</span></p>
                        <p>$ {arr.price}</p>
                    </div>

                    <button className='btn btn-danger'onClick={()=>{dispatch(action.removeItem(arr.id,arr.count))}}>X</button>
                </div>
            )}
                    <div>Total:${Number(totalAmt).toFixed(2)}</div>
            <div>
                <button className='btn btn-dark'>Check Out</button>
            </div>
            </div>
            {/*// }*/}
        </div>
    );
};

export default ShoppingCart;