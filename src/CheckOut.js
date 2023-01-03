import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch,useSelector} from 'react-redux';
import { placeOrder } from "./actions/Orderaction";
import Error from "./Error";
import Success from "./screens/Success";
import Loading from "./screens/Loding";


function Checkout({subtotal,cartItem}){


   const dispatch=useDispatch();
    const orderstate=useSelector((state)=>state.orderReducer);

    const{error,loading,success}=orderstate;

    const tokenHandler=(token)=>{

         console.log(token)
         
         dispatch(placeOrder(token,subtotal))
    }

    

    return(
        <div>


            {loading && (<Loading></Loading>)}

            {error && (<Error  error="something went wrong"></Error>)}

            {success && (<Success success="Your Order Placed Successfully"></Success>)}
            

          {cartItem.length===0?
            < div style={{display:"none"}}>
         <StripeCheckout
         amount={subtotal*100}
         shippingAddress
         token={tokenHandler}
         currency="INR"
         stripeKey="pk_test_51KxQ2RSCCd96m68DJKyFihgeLvzeXayqCjV9ineGgHUj7Jf63yrm60eo3RF2R4a3SLdA8sw5QqfSE2Iq6TxolYMe00gtWvfXAe"
        
         
        >

       
             
             <button className="btn" disabled="true">Pay Now</button>
             
             
            </ StripeCheckout>
    </div>:



<div>
<StripeCheckout
         amount={subtotal*100}
         shippingAddress
         token={tokenHandler}
         currency="INR"
         stripeKey="pk_test_51KxQ2RSCCd96m68DJKyFihgeLvzeXayqCjV9ineGgHUj7Jf63yrm60eo3RF2R4a3SLdA8sw5QqfSE2Iq6TxolYMe00gtWvfXAe"
         >

       
             
             <button className="btn" >Pay Now</button>
             
             
            </StripeCheckout>


</div>
}
        </div>
    )
}
export default Checkout;