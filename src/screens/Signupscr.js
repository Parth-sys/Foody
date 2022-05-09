import React from "react";
import {useState} from 'react';
import { RegisterUser } from "../actions/Useraction";
import {useDispatch, useSelector} from 'react-redux'

import Loading from "./Loding";
import Success from "./Success";
import Error from "../Error";

function Signup(){

const dispatch=useDispatch()


const [name,setname]=useState(" ");
const [email,setemail]=useState( " ");
const [password,setpassword]=useState(" ");
const [confirmpassword,setconfirmpassword]=useState(" ");
const registerState=useSelector(state=>state.UserReducer)

const {error,loading,success}=registerState;

const Register=()=>{

    if(password !=confirmpassword){
        alert("password not Matched")
    }
    else{
        const user={
            name,
            email,
            password
        }
       console.log(user)
       dispatch(RegisterUser(user))
    }
}


return(
    <div className="row justify-content-center mt-5   ">

     <div className="col-md-5  mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded   ">

         {loading && (<Loading></Loading>)}
         {success && (<Success success=" User signup Successful"></Success>)}
          {error && (<Error  error="email alredy registerd"></Error>)}

          <h2 className="text-center m-2"> Register</h2>
         <div >
             <input required  type="text" placeholder="name"    value={name}  className="form-control"   
             onChange={(e)=>{setname(e.target.value)}}></input>
             
             <input  required type="email" placeholder="email"    value={email}  className="form-control" 
             onChange={(e)=>{setemail(e.target.value)}} ></input>

             <input  required  type="password" placeholder="password"  value={password}  className="form-control"
              onChange={(e)=>{setpassword(e.target.value)}}></input>
             
               <input required type="password" placeholder="password" value={confirmpassword} className="form-control"
                onChange={(e)=>{setconfirmpassword(e.target.value) }}
               ></input>

             <button className="btn btn-primary mt-2" onClick={Register}>Signup</button>
         </div>
             <a href="/login">alredy have an account? Click here to Login</a>
     </div>

    </div>
)


}


export default Signup;