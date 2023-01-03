
export const UserReducer=(state={},action)=>{
    
    switch(action.type){
        case "REG_USER":return{
            loading:true
            
        }

        case "REG_SUCCESS":
            return{
            loading:false,
            success:true
            }
       case "REG_FAIL":
           return{
               loading:true,
               error:action.payload
           }

           default :return state
    
        }

}

export const LoginReducer=(state={},action)=>{

    switch(action.type){
        
        case "LOGIN_USER":
            return{
                loading:true
            }


        case "LOGIN_SUCCESS":
            return{
                loading:false,
                success:true,
                currentUser:action.payload
            }

         case "LOGIN_FAILED":
             return{
                 loading:false,
                 error:action.payload
             }   

             default: return state
    }

}


export const getallusersReducer=(state={users:[]},action)=>{

    switch(action.type){
        
        case 'GET_USERADATA_REQUEST' :  return {
            loading:true,
            ...state
        }
        case 'GET_USERDATA_SUCCESS': return{
            loading:false,
          users:action.payload
        }
        case 'GET_USERDATA_FAILED' :return{
           error:action.payload,
           loading:false
        }

        case 'DELETE_USERDATA_SUCCESS':return{
            ...state,
            users:state.users.filter(item=>item.email !== action.payload.email)
        }
        default:return state
    }
}

export const deleteuserReducer=(state={},action)=>{

    switch(action.type){
       
        case 'DELETE_USERDATA_SUCCESS': return{
            loading:false,
           success:true
        }
        case 'DELETE_USERDATA_FAILED' :return{
           error:action.payload,
           loading:false
        }
        default:return state
    }
}
export const edituserReducer=(state={},action)=>{

    switch(action.type){
       
        case 'EDIT_SUCCESS': return{
            loading:false,
           success:true
        }
        case 'EDIT_FAILED' :return{
           error:action.payload,
           loading:false
        }
        default:return state
    }
}


