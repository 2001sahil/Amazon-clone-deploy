import {React,useContext} from 'react'
import "./CSS/Login.css"
import amazonimage from "./images/logo.png"
import { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import loder from '../Componets/images/ZZ5H.gif'

import {setusername,setauth} from './store/CartSlice';
import { useDispatch } from 'react-redux'
import Context from '../context'
import Alert from './Alert.js'
const Login = () => {
  const [alert,setalert]=useState(false);
  const [Ok,setOk]=useState(true);
  const [mess,setmess]=useState("");
  const [loading,setloading]=useState(false)
  
  const dispatch=useDispatch();
  let functions=useContext(Context);
  // const auth=Auth.auth
  let history=useNavigate();
  
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [name,setname]=useState("")
  const signin=async (event)=>{
    
    event.preventDefault();
    if(name==="" || email==="" || password===""){
      
      setalert(true);setmess("Please Fill All The Details");setOk(false)
      setTimeout(()=>{
        setalert(false);
  
      },1000)
      return

    }
    document.querySelector(".Overlay").style.zIndex = "11";

    setloading(true);
    let res=await functions.LoginAccount({Name:name,password:password,email:email})
    .then((mess)=>{
      setloading(false)
      
      document.querySelector(".Overlay").style.zIndex = "-1";
      if(mess[0]){dispatch(setusername(name));window.localStorage.setItem('username',name);window.localStorage.setItem('usermail',email);window.localStorage.setItem('Loggedin', true);window.localStorage.setItem('AuthToken', mess[1]);dispatch(setauth(mess[1]));setalert(true);setOk(true)
      setmess("Welcome!   Logged in Successfully")
      setTimeout(()=>{
        setalert(false);
        history("/")

      },2000)}
      else{
        setalert(true);
        setmess("OOPS!    Wrong Email and Password")

        setOk(false);
        setTimeout(()=>{
          setalert(false);

        },1000)
      }
  })

  }
  const handleguest=async (event)=>{
    
    event.preventDefault();
    setname("Smith")
    setemail("Smith@gmail.com")
    setpassword("SmithLogin")
  }
  return (
    <div>




    <Alert showalert={alert} ok={Ok} message={mess}/>

     <div className='loader' style={{'display':loading?"flex":"none",}}><img style={{"width":"50px"}} src={loder} alt="" /></div>


    <div className='Loginpage'>
      
      <Link to='/'><div className='Amazonlogo'><img className='amazonimage'src={amazonimage} alt=""/></div></Link>
      <div className='Container'>
        <div><h1>Sign In</h1></div>
        <div className='email'><div><b>UserName</b></div><input required value={name}  onChange={(event)=>{ return setname(event.target.value)}} className='textemail' type="text"/></div>
        <div className='email'><div><b>E-mail</b></div><input required value={email}  onChange={(event)=>{ return setemail(event.target.value)}} className='textemail' type="text"/></div>

        <div className='password'><div><b>Password</b></div><input required value={password} onChange={(event)=>{return setpassword(event.target.value)}} className='textemail' type="password"/></div>
        
        {/* <form type="submit"> */}

        <div className='Confirm'><button className='confirm' onClick={(event)=>{signin(event)}}><b>Sign In</b></button></div>
        <div className='Confirm'><button className='Create'onClick={(event)=>{handleguest(event)}}><b>Get Guest Credentials</b> </button></div>
        <div className="signup">Don't have account? <Link to='/SignUp'>Sign Up</Link></div>
        


      </div>
    </div>
    

    <div className="Overlay" ></div>
    </div>
  )
}

export default Login
