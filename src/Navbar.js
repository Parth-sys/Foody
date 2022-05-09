import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {addToCartReducer} from './reducers/cartReducers'
import { LoginReducer } from "./reducers/UserReducer";
import { LogoutUser } from "./actions/Useraction";
function Navbar(){


const cartState=useSelector(state=>state.addToCartReducer)
const UserState=useSelector(state=>state.LoginReducer);

const dispatch=useDispatch()
const{currentUser}=UserState

    return(
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Foody</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">

        {  currentUser ? (
        
        <div className="dropdown">
  <a className="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {currentUser.name}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <a className="dropdown-item" type="button">orders</a>
    <a className="dropdown-item" type="button" onClick={()=>{dispatch(LogoutUser())}}>logout</a>
  </div>
</div>    
        )
        
        
        
        :(
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/Login">Login</a>

        </li>

        )}

        <li className="nav-item">
          <a className="nav-link" href="/cart">Cart  {cartState.cartItems.length}</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;