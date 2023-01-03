import React from "react";

import { useEffect,useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { getallusersReducer} from "../reducers/UserReducer";
import {deleteuser, getallusers} from '../actions/Useraction'
import { edituser } from "../actions/Useraction";
import Loading from "./Loding";
import Error from "../Error";
import Success from "./Success";
import Update from "./Update";
import Modal from 'react-bootstrap/Modal';



function Users(){

    const userstate = useSelector(state => state.getallusersReducer)
   const deleuser=useSelector(state=>state.deleteuserReducer)
 
   const edituse=useSelector(state=>state.edituserReducer);

  
    const dispatch = useDispatch();

    const{loading,users,error}=userstate;
   
    const [show,setshow]=useState(false)
   
    const [name,setname]=useState();

   const [name1,setname1]=useState("")
   const [email1,setemail1]=useState("")
   const [password1,setpassword1]=useState("")





    const handleshow=()=>{
      
      
      setshow(true)
    };
    const handleClose=()=>(setshow(false))
   
 
   const edit1=(name)=>{
    setname(name)
   }

    const {success}=deleuser;
   
 
    useEffect(()=>{
        dispatch(getallusers())
        
    },[])
    
    
    const dele=(email)=>{
      dispatch(deleteuser(email))
    
  }

const update=(email)=>{
  
  const data={name1,email1,password1};


  dispatch(edituser(email,data))
   dispatch(getallusers())
}
   



    return(
       <div>
           <div className="row justify-content-center m-1" style={{ overFlow:"auto" }}>
        {loading && <Loading></Loading>}
        {error && <Error></Error>}
        {success && <Success success={"user deleted"}></Success>}
            <div className="col-md-8">
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
      {users.map((r,index)=>(
    <tr key={index} onClick={handleshow} >
      <td>{r.name}</td>
      <td>{r._id}</td>
      <td>{r.email}</td>
      <td>{r.password}</td>
      <td>{`${r.isAdmin}`}</td>
      <button className=" btn-primary btn-default " style={{color:"dodgerblue"}} onClick={()=>{edit1(`${r.name}`)}}>Edit</button>
      <button className=" btn-danger btn-default" style={{color:"red" ,margin:"1rem"}} onClick={()=>dele(`${r.email}`)}>delete</button>    
   
    </tr>





))}

  

</tbody>

                
      
            </table>
            </div>
            

            {users.filter(c=>c.name === name).map((t)=>(


<Modal show={show} >
    <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Update User</Modal.Title>
    </Modal.Header>

    <Modal.Body>
     <div >


    <input className="form-control" type="text" placeholder={t.name}  value={name1}
     onChange={(e)=>{setname1(e.target.value)}} ></input><br/>

     <input  className="form-control" type="email" placeholder={t.email} value={email1}   
        onChange={(e)=>{setemail1(e.target.value)}}></input><br/>

     <input  className="form-control" type ="text"  placeholder={t.password}  value={password1} 
      onChange={(e)=>{setpassword1(e.target.value)}}></input><br/>
     
     </div>
     
    </Modal.Body>

    <Modal.Footer>
        <button  className="btn"  onClick={()=>{update(`${t.email}`)}} >update</button>
       
    </Modal.Footer>
</Modal>
))}

           </div>
           






           
          

       </div>
    )
}
export default Users