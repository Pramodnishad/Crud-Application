import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../admin/Wrapper';

function Login() {
    const email= useRef();
    const password = useRef();
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")

    const navigate = useNavigate()

    const handleLogin = ()=>{
        if(email.current.value=="pramod@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","pramod@gmail.com")
            localStorage.setItem("passwordData","12345")
            navigate("/admin/products")
        }
        
    }

   ;
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        {getEmail&&getPassword?
        <Wrapper /> :
        <form >
    <div className='login'>
     <h1>Login</h1>
     <input className='login-input' type='text'  placeholder="Enter  User Name" ref={email}/>
     <input className='login-input' type='password'  placeholder="Enter  Password" ref={password}/>
     <button className="login-button" onClick={handleLogin}>Login</button>
     <span className="forgot">Forgot Password ?</span>
     <span className="no-account">Don't have Account ?</span>
    </div>
    </form>}
    
    </div>
  )
}

export default Login