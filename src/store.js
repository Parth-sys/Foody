import {combineReducers}  from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { getallpizzaReducers } from "./reducers/Pizzareducers";
import { addToCartReducer } from "./reducers/cartReducers";
import { deleteuserReducer, getallusersReducer, UserReducer ,edituserReducer} from "./reducers/UserReducer";
import { LoginReducer } from "./reducers/UserReducer";
import { orderReducer ,getallordersReducers} from "./reducers/OrderReducer";
import { addToCompareReducer } from "./reducers/CompareReducers";

const finalReducers=combineReducers({
    getallpizzaReducers : getallpizzaReducers,
    addToCartReducer:addToCartReducer,
    UserReducer:UserReducer,
    LoginReducer:LoginReducer,
    orderReducer:orderReducer,
    getallordersReducers:getallordersReducers,
    getallusersReducer:getallusersReducer,
    deleteuserReducer:deleteuserReducer,
    edituserReducer:edituserReducer,
    addToCompareReducer:addToCompareReducer
})

const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];
const comparetItems=localStorage.getItem('comparetItems')?JSON.parse(localStorage.getItem('comparetItems')):[];

const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;

const initialState={

   addToCartReducer:{
       cartItems:cartItems,
   },
 
   addToComapareReducer:{
    comparetItems:comparetItems,
   },

  LoginReducer:{
     currentUser:currentUser
  }
 

 

};

const composeEnhancers=composeWithDevTools({});

const store=createStore(finalReducers,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;