import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/Orderaction";
import Error from "../Error";
import Loading from "./Loding";


function Orders() {

   const dispatch = useDispatch();

   useEffect(() => {

      dispatch(getOrders())

   }, [])


   const Os = useSelector(state => state.getallordersReducers)

   const { loading, orders, error } = Os
   console.log(orders.order)
   

    const check=()=>{
          
    }


   const convert=()=>{
      var timestamp=orders.updatedAt
      var date=new Date(timestamp)
      return "Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear();

   }

   return (



      <div style={{ fontSize: "20px", fontFamily: "sanserif" ,color:"white" }} >
              <h2 style={{color:"black"}}> My Orders</h2>
              <hr/>
         <div className=" row justify-content-center"  style={{border:"1px solid white"}}>

            {loading && <Loading></Loading>}
            {error && <Error></Error>}

            {orders && orders.map(or => {

               return <div className="col-md-8 m-2"  style={{backgroundColor:"dodgerblue"}}>


                  <div  className="d-flex">

                     <div  className="text-left  w-100 m-1" >
                         
                        {or.OrderItems.map(item => {
                           return <div>
                              <h2  style={{fontSize:"20px"}}> Orderd Items</h2>
                              <hr></hr>
                              <p style={{fontSize:"20px"}}>
                                 {item.name} [{item.varient}] *{item.quantity}={item.Prices}

                              </p>
                           </div>
                        })}

                     </div>


                      <div  className="text-left w-100 m-1">

                        <h2 style={{fontSize:"20px"}}>Address</h2>

                        <hr></hr>

                        <p style={{fontSize:"20px"}}>   Street: {or.shippingAddress.street}</p>
                        <p style={{fontSize:"20px"}}>    City: {or.shippingAddress.city} </p>
                       <p style={{fontSize:"20px"}}> Country:  {or.shippingAddress.country}</p>
                         
                         
                         </div>
 
                         <div className="text-left w-100 m-1">
                         <p style={{fontSize:"20px"}}>Order Summary</p>
                         <hr></hr>
                          <h4 style={{fontSize:"20px"}}>   Amount:   {or.orderAmount} </h4>
                          <h4 style={{fontSize:"20px"}}>  Date:  { or.updatedAt.substring(0,10). split("-").reverse().join("-") }  </h4>
                         <h4 style={{fontSize: "20px"}}>    Transaction Id {or.T}</h4>
                        
                         </div>










                  </div>



               </div>

            })}




         </div>
      </div>
   )
}

export default Orders