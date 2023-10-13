import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate();
    


    const Submit =(e)=>{
        e.preventDefault();
        axios.post('https://student-auth.vercel.app/login',{
            email:email,
            password:password,
        })
        .then((response)=>{
            if(response.data=='Success') 
            navigate('/');
            else
            alert("Incorrect credentials");
        })
        
    }
    

  return (
    <div>
        <div className='container'>
            <form className="form">
                <p className="form-title">Sign in to your account</p>
                    <div className="input-container">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                    </div>
                <div className="input-container">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                    </div>
                    <button type="submit" onClick={Submit} className="submit">
                    Sign in
                </button>

                <p className="signup-link">
                    No account? &nbsp;
                    <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    

    </div>
  )
}

export default Login;