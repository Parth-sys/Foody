import logo from './logo.svg';
import './App.css';
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
  useNavigate
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>

             <BrowserRouter>
             
             <Routes>
             <Route  path="/" exact element={<Homescreen></Homescreen>} ></Route>  
             <Route  path="/cart" exact element={<Cart></Cart>}></Route>
             <Route path="/Login" exact element={<Login></Login>}></Route>
             <Route path="/Signup" exact element={<Signup></Signup>}></Route>
             </Routes>

             </BrowserRouter>

      
    </div>
  );
}

export default App;
