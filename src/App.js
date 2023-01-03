import logo from './logo.svg';
import './App.css';
import 'bootstrap'
import Navbar from './Navbar';
import Homescreen from './screens/Homescreen';
import Cart from './screens/Cartscr';
import Login from './screens/Loginscr';
import Signup from './screens/Signupscr';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  
} from 'react-router-dom'
import {Switch }from 'react-router'
import Orders from './screens/Orders';
import Admin from './screens/Adminscr';
import Access from './screens/Access';
import { useState } from 'react';
import Comparison from './screens/Comparison';

function App() {


  const user=JSON.parse(localStorage.getItem('currentUser'))
   
  
  
  


  



  
  return (
    <div className="App">
    
    
      <Navbar></Navbar>
      

             <BrowserRouter>
           
             <Routes>
             <Route  path="/" exact element={<Homescreen></Homescreen>} ></Route>  
             <Route  path="/cart" exact element={<Cart></Cart>}></Route>
             <Route path="/Login" exact element={<Login></Login>}></Route>
             <Route path="/Signup" exact element={<Signup></Signup>}></Route>
             <Route path="/Orders" exact element={<Orders></Orders>}></Route>
             <Route path="/admin" element={<Admin></Admin>}></Route>
             <Route path="/compare" element={<Comparison></Comparison>}></Route>

             <Route path="*" element={<p> 404 Error</p>}></Route>
             
             </Routes>
             
             </BrowserRouter>

      
    </div>
  );
}

export default App;
