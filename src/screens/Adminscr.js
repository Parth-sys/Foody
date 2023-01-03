import React, { useState } from "react";
import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import Access from "./Access";
import Users from "./Usersdata";
import Modal from 'react-bootstrap/Modal'
import { RegisterUser } from "../actions/Useraction";
function Admin(){

const dispatch=useDispatch()

  const [name,setname]=useState("");
  const[password,setpassword]=useState();
  const [email,setemail]=useState();
  
  

   const [show,setshow]=useState(false)
    

   const handleshow=()=>{
      
      
    setshow(true)
  };
  const handleClose=()=>(setshow(false))
 


   const registerState=useSelector(state=>state.UserReducer)

   const Register=()=>{

    
        const user={
            name,
            email,
            password
        }
       console.log(user)
       dispatch(RegisterUser(user))
       setemail("")
       setname("")
       setpassword("")
       window.location.reload() 
}


    const UserState=useSelector(state=>state.LoginReducer);

    const {currentUser}=UserState

    return (
          <>

             {currentUser.isAdmin?
             <div>
             <button className="btn m-1 justify-content-end" onClick={handleshow}>create user</button>
             <button className="btn">Add new </button>
             </div>
            :(<div></div>)
            }


        <div className="row justify-content-center " >
            

            {currentUser.isAdmin?
            
            (<Users></Users> )
           :
           (<Access></Access>)
        
        }



          
<Modal show={show} >
    <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Create User</Modal.Title>
    </Modal.Header>

    <Modal.Body>
     <div >

        
    <input className="form-control" type="text" placeholder="name"  value={name}
     onChange={(e)=>{setname(e.target.value)}} ></input><br/>

      
     <input  className="form-control" type="email" placeholder="email" value={email}   
        onChange={(e)=>{setemail(e.target.value)}}></input><br/>

     <input  className="form-control" type ="text"  placeholder="password"  value={password} 
      onChange={(e)=>{setpassword(e.target.value)}}></input><br/>
     
     </div>
     
    </Modal.Body>

    <Modal.Footer>
        <button  className="btn"  onClick={()=>{Register()}} >create</button>
       
    </Modal.Footer>
</Modal>




        </div>
    </>
    )
}
export default Admin