// import './App.css';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Componets/Cart';
import {useDispatch, useSelector } from 'react-redux';
import Login from './Componets/Login';
import CreateAndLogin from './CreateAndLogin';
import { useContext, useEffect, useState } from 'react';
import {setusername,setauth,setuseremail} from './Componets/store/CartSlice';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Checkout from './Componets/Checkout';
import Orders from './Componets/Orders';
import SignUP from './Componets/SignUP'
// import Context from './context';

const promise=loadStripe('pk_test_51NmLV0SAPwCq4NmNp0UDHweKyrNNoenD0YvMjuyTRsltifijBGKiNDVLkMdFNiyFKUPmKv0ufiXvnrfGI7XIZnOW00SJmMO5qx')

function App() {
  let dispatch=useDispatch();
  // let Username=useSelector((state)=>{return state.lelo.Username})
  let isloggedin=window.localStorage.getItem('username')
  let isloggedinid=window.localStorage.getItem('usermail')
  // console.log("id",isloggedinid)
  let auth=window.localStorage.getItem('AuthToken')
  // let func=useContext(Context);
  
  let authtoken=useSelector((state)=>{return state.lelo.auth});
  // func.getitems();
  useEffect(()=>{
    if(isloggedin){
      dispatch(setusername(isloggedin));
      dispatch(setuseremail(isloggedinid));
      dispatch(setauth(auth));
    
    }
    
  },[])

  return (
    // <Provider store={Store}>
    <BrowserRouter>
    <CreateAndLogin>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<>
            <Navbar />
            <Home />
          </>}/>
        <Route exact path="/cart" element={<><Navbar /><Cart /></>}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/SignUp" element={<SignUP />}/>
        <Route exact path="/orders" element={<><Navbar /><Orders /></>}/>
        <Route path='/checkout' element={<><Navbar /> <Elements stripe={promise}>
            <Checkout/>
          </Elements></>}>
          
        </Route>
      </Routes>
      </CreateAndLogin>
    </BrowserRouter>
  );

}

export default App;
