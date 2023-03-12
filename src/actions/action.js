import {URL,actionType} from '../const'
const getProducts = ()=>async dispatch => {
    dispatch({type:actionType.LOADING,payload:true})
    try{
    const response = await fetch(URL)
    const data= await response.json()
 console.log(data)
    dispatch({
        type:actionType.ALL_DATA,
        payload:data
    })

        dispatch({type:actionType.LOADING,payload:false})
}catch (e) {console.log(e)
        dispatch({type:actionType.LOADING,payload:false})
    }}

const getQtyFunc=(id,count)=>{
    return{
        type:actionType.ADDITEM, payload:{id,count}
    }
}
const closeCart=()=>{
    return{
        type:actionType.CLOSE_CART
    }
}
const openCart=()=>{

    return{
        type:actionType.OPEN_CART
    }
}
const removeItem=(id,count)=>{
    return{
        type:actionType.REMOVE_ITEM,
        payload:{id,count}
    }


}
export default {getProducts,getQtyFunc,openCart,closeCart,removeItem}
// const filterFunc=(dataAll)=>{
//
//     const menData=dataAll.filter(data=>data.category==="men's clothing")
//     console.log(menData)
//     return{
//         type:actionType.MEN_DATA,
//         payload:menData
//     }
//
// }
// const filterFuncW=(dataAll)=>{
//
//     const womenData=dataAll.filter(data=>data.category==="women's clothing")
//     console.log(womenData)
//     return{
//         type:actionType.WOMEN_DATA,
//         payload:womenData
//     }
