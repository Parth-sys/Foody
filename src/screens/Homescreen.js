import React from "react";
import data from "../Data";
import Pizza from "../Pizza";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getallpizza } from "../actions/Pizzaaction";
import { getallpizzaReducers } from "../reducers/Pizzareducers";

import Loading from "./Loding";
import Error from "../Error";
import Compare from "./Copmare";

function Homescreen() {


      const pizzastate = useSelector(state => state.getallpizzaReducers)

      const { loading, pizza, error } = pizzastate;
   
       
       


      const dispatch = useDispatch();

      useEffect(() => {

            dispatch(getallpizza())

      }, []);







      return (





            <div >
<marquee width="60%" direction="left" height="30%" style={{color:"white",textStyle:"bold" ,backgroundColor:"blue",fontSize:"20px"}}>
    10% off on Fridays 
    </marquee>

                  <div className="row justify-content-center">

                        {loading ? <Loading></Loading> : error ?<Error error="Something Went Wrong"></Error>  : (


                              pizza.map((p, index) => {

                                    return <div className="col-md-4 " key={index}  >
                                          <div >
                                                <Pizza pizza={p}></Pizza>
                                          </div>
                                         
                                          <div >
                                          <Compare pizza={p}></Compare>
                                          </div>

                                    </div>
                              })

                        )}



                  </div>
            </div>
      )
}

export default Homescreen