import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ShoppingCart from "./ShoppingCart";
import action from '../actions/action'
const Navbar = () => {
    const quantity=useSelector(state=>state.shoppingReducer.totalQty)
    const isOpen=useSelector(state => state.shoppingReducer.isOpen)
    const dispatch=useDispatch()
    return (
      <div>
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="container">
                  <Link className="navbar-brand fw-bold fs-4" to={'/'}>
                      MY FIRST SHOP
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to={''}>Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to={'/products'}>Product</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to={'/about'}>About</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to={'/contact'}>Contact</Link>
                          </li>

                      </ul>
                     <div className='buttons'>
                     <Link to='/login' className='btn btn-outline-dark'>
                         <i className='fa fa-sign-in me-1'></i>Login
                     </Link>
                         <a herf='' className='btn btn-outline-dark ms-2'>
                             <i className='fa fa-user-plus me-1'></i>Register</a>

                         <a onClick={()=>dispatch(action.openCart())} herf='' className='btn btn-outline-dark'>
                             <i className='fa fa-shopping-cart me-1'></i>Cart({parseInt(quantity)})</a>
                     </div>
                  </div>
              </div>
          </nav>
          {isOpen && <ShoppingCart/>}
      </div>
    );
};

export default Navbar;