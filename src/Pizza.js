import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal';

import{useDispatch,useSelector} from 'react-redux';

import { addToCart } from "./actions/Cartaction";


function Pizza({ pizza}) {



    const [varient, setvarient] = useState('small');
    const [quantity, setquantity] = useState(1);

    const [show,setshow]=useState(false)
   

  const handleshow=()=>(setshow(true));
  const handleClose=()=>(setshow(false))


  const dispatch=useDispatch()

// cartItem dispatch
const addtocart=()=>{

dispatch(addToCart(pizza,quantity,varient))

}


    return (
        <div className=" shadow-lg p-3 mb-5 bg-body rounded " style={{ margin: '50px' }}  >
              <div onClick={handleshow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} alt="name" className="img-fluid" style={{ height: '200px', width: '200px' }}></img>
              </div>

            <div className="d-flex">

                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => setvarient(e.target.value)} >
                        {pizza.varients.map((option) => {
                            return <option value={option}>{option}</option>
                        })}
                    </select>

                </div>

              

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => setquantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>  
                        })}
                    </select>
                </div>


            </div>

            <div className="d-flex">

                <div className="m-1 w-100">

                    <h1> Price:{pizza.Prices[0][varient] * quantity}Rs/- </h1>
                </div>

                <div className="m-1 w-100">
                    <button className="btn " onClick={addtocart}>Add to cart</button>
                </div>


            </div>

            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                 <img src={pizza.image} alt={pizza.name} className="img-fluid" style={{height:"300px!important"}}></img>
                 <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button  className="btn"  onClick={handleClose} >Close</button>
                   
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default Pizza;