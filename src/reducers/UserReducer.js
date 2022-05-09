
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