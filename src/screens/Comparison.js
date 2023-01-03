
import React from "react";
import {useSelector,useDispatch} from 'react-redux';




  function Comparison(){

    const comparestate=useSelector(state=>state.addToCompareReducer)

    const dispatch=useDispatch();

   const compareItems=comparestate.compareItems
   
 console.log(compareItems)
  //const Total=cartItems.reduce((x,item)=>x+item.Prices,0)


    return(
   
          <div className="row">
           <div>
    
         

        <table className="table table-responsive ">
                
                <thead>    
          <tr>
            <th scope="col">name</th>
            <th scope="col">id</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">isAdmin</th>
            <th scope ="col">Action</th>
      
          </tr>
                  </thead>  
        
             <tbody> 
            {compareItems.map((r,index)=>(
          <tr key={index} >
            <td>{r.name}</td>
            <td>{r._id}</td>
            <td>{r.Prices}</td>
            <td>{}</td>
            <td>{}</td>
        
         
          </tr>
      
      
      
      
      
      ))}
      
        
      
      </tbody>
      
                      
            
                  </table>
                 



    </div>


   </div> 
   
    )
  }
  export default Comparison