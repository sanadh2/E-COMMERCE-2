import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import './signup.css'
const Signup = () => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] =useState("")
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const [errors, setErrors]=[];

    const showToastMessage = () => {
        toast.success('check the email and password are valid!!!', {
            position:'top-right',
            className:'toast-message',
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    const validateEmail =(email)=>{
        if(emailRegex.test(email))
        return true;
        else{
            return false
        }
    }

    const validatePassword =(password)=>{
        const passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
        const passwordRegexArray = [/(?=.*[0-9])/,/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*\W)/,/.{8,20}/];
        const reasons = ["password must contain a single digit from 1 to 9.","password must contain one lowercase letter.",
        "password must contain one uppercase letter.","password must contain one special character.","password must be 8-20 characters long"]
        const isValid =passwordRegex.test(password);
        if (isValid) 
            return true;
        else
            passwordRegexArray.map((el,i)=>{
            if(el.test(password)!=true)
            console.log(reasons[i]);    
            });
        }

    const Enter = (e)=>{
        e.preventDefault();
        const isValidEmail=validateEmail(mail);
        const isValidPassword= validatePassword(password);
        if(isValidEmail &&isValidPassword){
        axios.post('https://student-auth.vercel.app/register',{
            name:name,
            email:mail,
            password:password,
        })
        .then((response)=>{
            console.log(response.data);
            
        })}
        else
        showToastMessage();

    
    }
        
    
  return (
    <div>
        
            <div className='container'>
            <ToastContainer />
                <form className="form">
                    <p className="title">Register </p>
                    <p className="message">Signup now and get full access to our app. </p>
                    
                    <label>
                        <input required="" value={name} onChange={(e)=>setName(e.target.value)} placeholder="" type="text" className="input" />
                        <span>Name</span>
                    </label>
                    <label>
                        <input required="" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="" type="email" className="input" />
                        <span>Email</span>
                    </label>
                    <label>
                        <input required="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="" type="password" className="input" />
                        <span>Password</span>
                    </label>
                    
                    <button className="submit" onClick={Enter}>Submit</button>
                    <p className="signin">
                        Already have an acount ? <Link to="/">Log In</Link>{" "}
                    </p>
                </form>

            </div>
        
    </div>
  )
}

export default Signup;