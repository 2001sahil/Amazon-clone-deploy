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
  const [confirmpassword,setconfirmpassword]=useState("")
  
  const createaccount=async (event)=>{
    
    event.preventDefault();
    if(name==="" || email==="" || password===""){
      
      setalert(true);setmess("Please Fill All The Details");setOk(false)
      setTimeout(()=>{
        setalert(false);
  
      },1000)
      return
      
    }
    if(password!==confirmpassword){
        setalert(true);setmess("Password and Confirm Password must be same");setOk(false)
      setTimeout(()=>{
        setalert(false);
  
      },1000)
      setconfirmpassword("")
      setpassword("")
      return


    }
    if(password.length<5){
      
      setalert(true);setmess("Password is too short");setOk(false)
      setTimeout(()=>{
        setalert(false);  
      },1000)
      setconfirmpassword("")
      setpassword("")
      return

    }
    
    document.querySelector(".Overlay").style.zIndex = "11";
    setloading(true)
    let res=await functions.CreateAccount({Name:name,password:password,email:email})
    // console.log("data" ,res)
    
    document.querySelector(".Overlay").style.zIndex = "-1";
    if(res===true){

      await functions.LoginAccount({Name:name,password:password,email:email})

      
      .then((mess)=>{setloading(false);setalert(true);setmess("Account Created  Sucessfully");setOk(true)
      setTimeout(()=>{
        setalert(false);
        history("/Login")
  
      },1000)})

    }
    else{
      setloading(false)
      setalert(true);setmess("E-mail Already registered");setOk(false)
      setTimeout(()=>{
        setalert(false);
  
      },1000)

    }
  }
  return (
    <div>




    <Alert showalert={alert} ok={Ok} message={mess}/>

     <div className='loader' style={{'display':loading?"flex":"none",}}><img style={{"width":"50px"}} src={loder} alt="" /></div>


    <div className='Loginpage'>
      
      <Link to='/'><div className='Amazonlogo'><img className='amazonimage'src={amazonimage} alt=""/></div></Link>
      <div className='Container'>
        <div><h1>Sign UP</h1></div>
        <div className='email'><div><b>UserName</b></div><input required value={name}  onChange={(event)=>{ return setname(event.target.value)}} className='textemail' type="text"/></div>
        <div className='email'><div><b>E-mail</b></div><input required value={email}  onChange={(event)=>{ return setemail(event.target.value)}} className='textemail' type="text"/></div>

        <div className='password'><div><b>Password</b></div><input required value={password} onChange={(event)=>{return setpassword(event.target.value)}} className='textemail' type="text"/></div>
        
        <div className='password'><div><b> Confirm Password</b></div><input required value={confirmpassword} onChange={(event)=>{return setconfirmpassword(event.target.value)}} className='textemail' type="password"/></div>
        
        {/* <form type="submit"> */}

        
        <div className='terms'> This letter represents the formal agreement of the partnership between [recipient's company name] and [your company's name]. This agreement recognizes that [your name] is to provide professional expertise on behalf of [your company's name] throughout the project with [Recipient's company name].</div>
        <div className='Confirm'><button className='Create'onClick={(event)=>{createaccount(event)}}>Create Your Amazon Account</button></div>
        <div className="signup" >Already have an account? <Link to='/Login'>Sign In</Link></div>
        


      </div>
    </div>
    

    <div className="Overlay" ></div>
    </div>
  )
}

export default Login
