export const addToCompareReducer=(state={compareItems:[]},action)=>{

    switch(action.type){

        case 'ADD_TO_COMPARE':return{
          compareItems:action.payload
        }
             
        
        

         default:return state
               
}

}