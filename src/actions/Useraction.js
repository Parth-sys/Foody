import axios from "axios";

export const RegisterUser = (user) => async dispatch => {

    dispatch({ type: "REG_USER" });
    try {

        var res = axios.post('http://localhost:5000/signup/users', user)
        console.log(res);

        dispatch({ type: "REG_SUCCESS" })

    } catch (error) {

        console.log(error)
        dispatch({ type: "REG_FAIL", paylaod: error })
    }

}


export const LoginUser=(user)=> async dispatch =>{
    
    dispatch({type:"LOGIN_USER"});

    try {
        var res= await axios.post('http://localhost:5000/userlogin/login',user)

          console.log(res.data)

        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    
       localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href="/"

        if(res.data.isAdmin === true)
        {
            window.location.href="/admin"

        }
        
    } catch (error) {
        console.log(error)
        dispatch({type:"LOGIN_FAILED",payload:error})
    }
}



export const LogoutUser=()=>dispatch=>{
    localStorage.removeItem("currentUser");

    window.location.href="/"
}


export const getallusers=() => async dispatch=>{
    dispatch({type:'GET_USERDATA_REQUEST'})

    try {
        const res= await axios.get('http://localhost:5000/users/getallusers')
          console.log(res.data)

           dispatch({type:'GET_USERDATA_SUCCESS', payload:res.data});

    } catch (error) {
        dispatch({type:'GET_USERDATA_FAILED', payload:error})
    }

}

export const deleteuser=(email) => async dispatch=>{
    dispatch({type:'DELETE_USERDATA_REQUEST'})

    try {
        const res= await axios.delete(`http://localhost:5000/delete/${email}`)
          console.log(res.data)

           dispatch({type:'DELETE_USERDATA_SUCCESS', payload:res.data});
                
    } catch (error) {
        dispatch({type:'DELETE_USERDATA_FAILED', payload:error})
    }

}

export const edituser=(email,data)=> async dispatch=>{
 
    dispatch({type:"EDIT_USER"})
  try {

    const res=await axios.patch(`http://localhost:5000/e/edit/${email}`,data);

      console.log(res);

       dispatch({type:"EDIT_SUCCESS" ,payload:res.data})
       
  } catch (error) {
    dispatch({type:"EDIT_FAILED",payload:error})
  }
      

}