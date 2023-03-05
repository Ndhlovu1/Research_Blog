import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register'>

    <span className='registerTitle'>REGISTER</span>

    <form className='registerForm'>
         
            <label> USERNAME</label>
            <input type="text" placeholder='Enter a Username' className='registerInput'/>
            <label>EMAIL</label>
            <input type="email" placeholder='Enter your email' className='registerInput'/>
            <label>PASSWORD</label>
            <input type="text" placeholder='Enter a password' className='registerInput'/>

            <button className='registerBtn'>REGISTER</button>
            <button className='loginBtn'>LOGIN</button>            
        
        </form>
    </div>
  )
}

export default Register
