import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getallpizza } from "../actions/Pizzaaction";
import { getallpizzaReducers } from "../reducers/Pizzareducers";
import Loading from "./Loding";
import Error from "../Error";
import { addToCompare } from "../actions/Compareaction";




function Compare({pizza}){

    const [varient, setvarient] = useState('small');
    const [quantity, setquantity] = useState(1);

   
   

  


  const dispatch=useDispatch()

// cartItem dispatch
const Comp=()=>{

dispatch(addToCompare(pizza,quantity,varient))

}
 
    


    return(
        <div className=" shadow-lg p-3 mb-5 bg-body rounded " style={{ margin: '50px' ,backgroundColor:"skyblue"}}   >
              <div>
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
                    <button className="btn "  href="/compare"  onClick={Comp}>Compare</button>
                </div>


            </div>

       


    </div>
    )
}
export default Compare