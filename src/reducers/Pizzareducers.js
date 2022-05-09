export const getallpizzaReducers=(state={pizza:[]},action)=>{

    switch(action.type){
        
        case 'GET_PIZZADATA_REQUEST' :  return {
            loading:true,
            ...state
        }
        case 'GET_PIZZADATA_SUCCESS': return{
            loading:false,
            pizza:action.payload
        }
        case 'GET_PIZZADATA_FAILED' :return{
           error:action.payload,
           loading:false
        }
        default:return state
    }
}