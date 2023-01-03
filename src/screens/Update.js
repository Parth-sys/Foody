import React from "react";
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

function Update({users,handleshow,show,handleClose}){

     console.log(users)
   

   // const [show,setshow]=useState(false)
   

   // const handleshow=()=>(setshow(true));
   // const handleClose=()=>(setshow(false))


    return(
        
         <div className="row justify-content-center" >
        <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                 <div >


                <input className="form-control" type="text" value={users.name}  ></input><br/>
                 <input  className="form-control" type="email" value={users.email} ></input><br/>
                 <input  className="form-control" type ="text"  value={users.password}></input><br/>
                 
                 </div>
                 
                </Modal.Body>

                <Modal.Footer>
                    <button  className="btn"  onClick={handleClose} >Close</button>
                   
                </Modal.Footer>
            </Modal>
          </div>
    )
}
export default Update