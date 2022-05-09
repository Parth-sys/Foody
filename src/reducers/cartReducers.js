
export const addToCartReducer=(state={cartItems:[]},action)=>{

    switch(action.type){

        case 'ADD_TO_CART':
          
        
        const alexists=state.cartItems.find(item=>item.name===action.payload.name)

        if(alexists){
          return{
            ...state,
            cartItems:state.cartItems.map(item=>item.name=== action.payload.name? action.payload :item )
          }
        }
        else{
        
        return{
          ...state,
        cartItems:[...state.cartItems,action.payload]
        }

          } 


         case 'DELETE_FROM_CART':
           
            return{
              ...state,
              cartItems:state.cartItems.filter(item=>item._id !==action.payload._id)
            }

         default:return state
               
}

}