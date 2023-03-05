import React from 'react'
import "./login.css"
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="login">

      <span className='loginTitle'>LOGIN</span>

      <form className='loginForm'>
      
      <label> EMAIL</label>
      <input type="email" placeholder='Enter Email' className='loginInput'/>
      
      <label> PASSWORD</label>
      <input type="password" placeholder='Password!' className='loginInput'/>
      
      <button className="LoginBtn">      
        <Link to="Login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
      </button>
      <button className="RegisterBtn">
        
        <Link to="/Register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
      
      </button>
      </form>
    
    </div>
  )
}

export default Login
