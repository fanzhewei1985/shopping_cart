import React, {useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import {useDispatch, useSelector} from "react-redux";
import action from '../actions/action'
import Product from "./Product";
import {loadingPic} from "../const";


const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(action.getProducts())}, [])
    const dataAll = useSelector(state => state.shoppingReducer.allProducts)
    const isLoading=useSelector(state=>state.shoppingReducer.isLoading)
    const [filterData, setFilterData] = useState(dataAll)
    const filterFunc = (category) => {
        let newData = [...dataAll]
        const filterData = newData.filter(data => data.category === category)
        setFilterData(filterData)
    }

    return (
        <div>
            <div className='btns'>

                <button className="btn btn-outline-dark me-2" onClick={() => setFilterData(dataAll)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterFunc("men's clothing")}>Men's
                    Clothing
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterFunc("women's clothing")}>Women's
                    Clothing
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterFunc("electronics")}>Electronics
                </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterFunc("jewelery")}>Jewelery</button>
            </div>
            {isLoading && <div><img src={loadingPic}/></div>}
            <div className='productContainer'>
                {filterData.map((data, index) => <Product key={index} product={data}/>
                )}

            </div>
        </div>
    )


    // const [data, setData] = useState([])
    // const [filter, setFilter] = useState(data)
    // const [loading, setLoading] = useState(false)
    // let componentMounted = true
//
//     console.log(data, filter)
//     const Loading = () => {
//         return (
//             <>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350}/>
//                 </div>
//             </>
//         )
//     }
//
//     const filterProduct=(cat)=>{
//         const updateList=data.filter((x)=>x.category===cat)
//         setFilter(updateList)
//     }
//     const ShowProducts = () => {
//         return (
//             <div>
//             <div className='buttons'>
//                 <button className="btn btn-outline-dark ME-2" onClick={()=>setFilter(data)} >ALL</button>
//                 <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")} >MEN'S CLOTHES</button>
//                 <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>WOMEN'S CLOTHES</button>
//                 <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>JEWELERY</button>
//                 <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronic")}>ELECTRONIC</button>
//             </div>
//                 <div className='format'>
//                 {filter.map((product)=>{
//                     return(
//                         <div className='col-md-3 mb-4'>
//                             <div className="card h-100 text-center p-4" key={product.id}>
//                                 <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
//                                     <div className="card-body">
//                                         <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
//                                         <p className="card-text fw-bold">${product.price}</p>
//                                     </div>
//
//                                     <div className="card-body">
//                                         <a href="#" className="btn btn-outline-dark">Buy Now</a>
//                                     </div>
//                             </div>
//                         </div>
//                             )})}
//                 </div>
//             </div>
//         )}
//
//
//
//     return (
//         <div>
//             <div className="container my-5 py-5">
//                 <div className="row">
//                     <div className="col-12 mb-5">
//
//                         <hr/>
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {loading ? <Loading/> : <ShowProducts/>}
//                 </div>
//             </div>
//         </div>
//     );
};

export default Products;