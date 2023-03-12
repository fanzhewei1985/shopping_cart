import React from 'react';
import {actionType} from "../const";

const initial = {
    allProducts: [],
    isLoading: false,
    totalQty: 0,
    totalAmt:0,
    id:'',
    count:0,
    isOpen:false,
    selectedItem:[]

}
const shoppingReducer = (state = initial, action) => {
let stateCopy={...state}
    switch (action.type) {
        case actionType.ALL_DATA:
            return {...state, allProducts: action.payload}
        case actionType.LOADING:
            return {...state, isLoading: action.payload}
        case actionType.ADDITEM:
           let qty=state.totalQty+action.payload.count
            let array=stateCopy.allProducts
            let amount=stateCopy.totalAmt
            let item=array.find(arr=>arr.id===action.payload.id*1)
                    amount=amount+item?.price*action.payload.count
            item={...item,count:action.payload.count}
            let array2=stateCopy.selectedItem
            array2.push(item)
            console.log(array2,item)
            return{...state,totalAmt: amount,totalQty: qty,selectedItem: array2}
        case actionType.CLOSE_CART:
            return{...state,isOpen: false}
        case actionType.OPEN_CART:

            return{
                ...state,isOpen: true}

        case actionType.REMOVE_ITEM:
            let qtyR=stateCopy.totalQty-action.payload.count
           let itemR=stateCopy.allProducts.find(arr=>arr.id===action.payload.id*1)
           let amountR=stateCopy.totalAmt-itemR.price*action.payload.count
            let index=stateCopy.selectedItem.findIndex(item=>item.id*1===action.payload.id*1)
            stateCopy.selectedItem.splice(index,1)
            return{
                ...state,count:0,totalQty: qtyR,totalAmt: amountR,id:action.payload.id,selectedItem: stateCopy.selectedItem
            }



        default:
            return state

    }
}

export default shoppingReducer;