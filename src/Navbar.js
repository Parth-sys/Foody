import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {addToCartReducer} from './reducers/cartReducers'
import { LoginReducer } from "./reducers/UserReducer";
import { LogoutUser } from "./actions/Useraction";
import { NavLink } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';


function Navbar(){


const cartState=useSelector(state=>state.addToCartReducer)




const UserState=useSelector(state=>state.LoginReducer);
console.log(UserState)

const dispatch=useDispatch()

const{currentUser}=UserState

console.log(currentUser)


    return(
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded " >
  <div className="container-fluid" >
    <a className="navbar-brand" href="/">Foody</a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ml-auto">

        {currentUser?(
                    <ul className="navbar-nav">          
                <li className="nav-item"><a className="nav-link" href="/" >{currentUser.name}</a></li>
                <li className="nav-item"><a className="nav-link"  href="/Orders" > Orders </a></li>
                <li className="nav-item"><button className=" btn nav-link"   onClick={dispatch(LogoutUser)} >Log out</button></li>
               </ul>


        ):(
          

         <li className="nav-item"><a className="nav-link" href="/Login"> Login</a></li>

        )}
   

        <li className="nav-item">
          <a className="nav-link  " href="/cart">Cart<span><Badge pill bg="info">
          {cartState.cartItems.length}
      </Badge></span></a>
        </li>
  
      </ul>
    
    </div>
    </div>
</nav>

    )
}
export default Navbar;