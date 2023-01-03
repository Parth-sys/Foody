export const orderReducer=(state={},action)=>{
    
    switch(action.type){
        case "ORDER_REQUEST":return{
            loading:true
            
        }

        case "ORDER_SUCCESS":
            return{
            loading:false,
            success:true
            }
       case "ORDER_FAIL":
           return{
               loading:true,
               error:action.payload
           }

           default :return state
    
        }

}
export const getallordersReducers=(state={orders:[]},action)=>{

    switch(action.type){
        
        case 'GET_ORDERSDATA_REQUEST' :  return {
            loading:true,
            ...state
        }
        case 'GET_ORDERS_SUCCESS': return{
            loading:false,
            orders:action.payload
        }
        case 'GET_ORDERS_FAILED' :return{
           error:action.payload,
           loading:false
        }
        default:return state
    }
}