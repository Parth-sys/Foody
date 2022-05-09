import React, { useState } from "react";

import {LoginUser} from '../actions/Useraction';

import {useDispatch,useSelector} from 'react-redux';
import { LoginReducer } from "../reducers/UserReducer";
import Loading from "./Loding";
import Error from "../Error";


function Login(){
  
  
  



  const dispatch=useDispatch();

 const UserState=useSelector(state=>state.LoginReducer)
const {loading,error}=UserState;

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");



    function login(){

      const user={
        email,
        password
      }

      console.log(user)
     dispatch(LoginUser(user))
      
     


    }



    return(

      <div className="row justify-content-center    mt-5">
       <div className="col-md-5 mt-5  shadow-lg p-3 mb-5 bg-white rounded   ">
            <h3>LOGIN</h3>
         
           {loading &&( <Loading></Loading>)}
           {error && (<Error error="Invalid Credentials"></Error>)}
       <div>

          <input  className="form-control" type="text" placeholder="email" value={email}
           onChange={(e)=>{setemail(e.target.value)}} required></input>
          
          <input   className="form-control" type="password" placeholder="password" value={password} 
          onChange={(e)=>{setpassword(e.target.value)}} required></input>

            <button   className="btn mt-1" onClick={login()}>LOGIN</button>
       </div>
            <a href="/Signup" style={{color:"black"}}> Click here to Signup</a>

       </div>

      </div>

    )
}

export default Login;