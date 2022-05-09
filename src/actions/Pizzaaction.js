import axios from 'axios'


export const getallpizza=()=> async dispatch=>{

    dispatch({type:'GET_PIZZADATA_REQUEST'})

    try {

      var res=  await axios.get("http://localhost:5000/getpizza/getallpizza")
       console.log(res.data)
       
      dispatch({type:'GET_PIZZADATA_SUCCESS' ,  payload:res.data})
      
    } 
    catch (error) {
        dispatch({type:'GET_PIZZA_FAILED' ,payload:error})
    }
}