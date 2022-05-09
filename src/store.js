import {combineReducers}  from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { getallpizzaReducers } from "./reducers/Pizzareducers";
import { addToCartReducer } from "./reducers/cartReducers";
import { UserReducer } from "./reducers/UserReducer";
import { LoginReducer } from "./reducers/UserReducer";


const finalReducers=combineReducers({
    getallpizzaReducers : getallpizzaReducers,
    addToCartReducer:addToCartReducer,
    UserReducer:UserReducer,
    LoginReducer:LoginReducer
})

const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];

//const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;

const initialState={

   addToCartReducer:{
       cartItems:cartItems,
   },
   
   //LoginReducer:{
     //  currentUser:currentUser
 //  }
 

 

};

const composeEnhancers=composeWithDevTools({});

const store=createStore(finalReducers,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;