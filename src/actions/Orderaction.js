import axios from "axios"

export  const placeOrder=(token,subTotal)=> async(dispatch,getState)=>{

    dispatch({type:"ORDER_REQUEST"})
    var currentUser=getState().LoginReducer.currentUser;
    var CartItem=getState().addToCartReducer.cartItems;
    //var CartItem=localStorage.getItem('')
    console.log(CartItem)



    
    try {
       var res= await axios.post("http://localhost:5000/payment/order",{token,subTotal,currentUser,CartItem})
       dispatch({type:"ORDER_SUCCESS"});
       console.log(res.data);


    } catch (error) {
        dispatch({type:"ORDER_FAIL"});
        console.log(error);
    }
}


export const getOrders=()=> async (dispatch,getState)=>{

    const currentUser=getState().LoginReducer.currentUser

  console.log(currentUser.email)

    dispatch({type:'GET_ORDERSDATA_REQUEST'})

    try {

      var res=  await axios.post("http://localhost:5000/order/orders",{email:currentUser.email})
       console.log(res.data)
       
      dispatch({type:'GET_ORDERS_SUCCESS' ,  payload:res.data})
      
    } 
    catch (error) {
        dispatch({type:'GET_ORDERS_FAILED' ,payload:error})
    }
}