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
        var res=axios.post('http://localhost:5000/userlogin/login',user)

          console.log(res)

        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
    
       localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href='/'

    } catch (error) {
        console.log(error)
        dispatch({type:"LOGIN_FAILED",payload:error})
    }
}

export const LogoutUser=()=>dispatch=>{
    localStorage.removeItem("currentUser");
    window.location.href="/login"
}