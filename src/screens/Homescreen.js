import React from "react";
import data from "../Data";
import Pizza from "../Pizza";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getallpizza } from "../actions/Pizzaaction";
import { getallpizzaReducers } from "../reducers/Pizzareducers";
import Loading from "./Loding";
import Error from "../Error";
function Homescreen() {


      const pizzastate = useSelector(state => state.getallpizzaReducers)

      const { loading, pizza, error } = pizzastate;

      console.log(pizza)

      const dispatch = useDispatch();

      useEffect(() => {

            dispatch(getallpizza())

      }, []);







      return (





            <div >
                  <div className="row justify-content-center">

                        {loading ? <Loading></Loading> : error ?<Error error="Something Went Wrong"></Error>  : (


                              pizza.map((p, index) => {

                                    return <div className="col-md-4 " key={index}>
                                          <div>
                                                <Pizza pizza={p}></Pizza>
                                          </div>
                                    </div>
                              })

                        )}



                  </div>
            </div>
      )
}

export default Homescreen