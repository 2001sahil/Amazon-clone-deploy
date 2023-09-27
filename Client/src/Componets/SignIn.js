import React from 'react'
import './CSS/SignIn.css'
import { Link,useNavigate } from 'react-router-dom'

const SignIn = (props) => {
    let history=useNavigate();
  return (
    <div style={{"display":`${props.display}`}}>
        <hr/>
        <div className='Sign'>
      
      {props.Home?"See personalized recommendations":""}
      <button className='Signin' onClick={()=>{history("./Login")}}>Sign in</button>
      <div className='new'> New customer?<Link to='/Login'>Start here.</Link> </div>
     
      </div>
      <hr/>
      
    </div>
  )
}

export default SignIn
