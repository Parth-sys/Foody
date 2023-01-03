import React  from "react";
import {useSelector,useDispatch} from 'react-redux';

import { addToCart } from "../actions/Cartaction";
import {deleteFromCart} from "../actions/Cartaction"
import Checkout from "../CheckOut";

function Cart(){


    const cartstate=useSelector(state=>state.addToCartReducer)

     const dispatch=useDispatch();

    const cartItems=cartstate.cartItems

   const Total=cartItems.reduce((x,item)=>x+item.Prices,0)



    return(
        <div>
         <div className="row justify-content-center  shadow-lg   bg-body rounded   ">
             
             <div className="col-md-6 ">

                <h2 style={{fontSize:"30px",fontFamily:"fantasy"}}>My Cart   </h2> 

                 {cartItems.map((m=>{
                  

                  return <div className="d-flex">

                     <div className="     text-left  w-100 m-1">
                       <h6>{m.name}</h6>  
                       <h6> Size: {m.varient}</h6>
                        <h6>Price:{m.Prices}  </h6>
                      
                        <i className="fa fa-plus" aria-hidden="true" style={{color:"green"}} 

                         onClick={()=>{dispatch(addToCart(m,m.quantity+1,m.varient))}}
                         >

                         </i>

                        <h6> Quantity: {m.quantity}</h6>
                      
                        <i className="fa fa-minus" aria-hidden="true" style={{color:"red"}}></i>
                      
                       <hr></hr>

                     </div>

                    <div className=" w-100 m-1">

                      <img  src={m.image} alt={m.name} style={{height:"80px" ,width:"88px"}} ></img>
                    </div>

                     <div className="w-100 m-1">

                        <i className="fa fa-trash" aria-hidden="true" onClick={()=>dispatch(deleteFromCart(m.id))} ></i>

                     </div>






                  </div>



                 }))}

               
             </div>



             <div className="col-md-4 shadow-sm bg-body rounded">
                  <h3>Total :{Total}</h3>
                 <Checkout subtotal={Total} cartItem={cartItems} ></Checkout>
             </div>


             </div>   
      
        </div>
    )
}
export default Cart