// import React from 'react'
import '../CSS/UserSignUp.css'
import { useNavigate } from 'react-router-dom'
import {useState}from 'react';







function UserSignUp() {
    const navigate = useNavigate();
    const [phone, setphone] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const  check=()=>{
      console.log(phone,username,password);
    }
const  postdetails=()=>{
  fetch('http://localhost:5000/usersignup',{
    method:'POST',
    headers:{"Content-Type" : "application/json"},
    body: JSON.stringify({
      phone:phone,
      username:username,
      password:password,
    }),
  })
  .then(res => res.json())
  .then((data)=>{
    console.log(data);
    navigate('/signin')
  })
}





const gotosignin = ()=>{navigate('/signin')}
  return (
    <div className="signbody">
      <div className='container-signup'>
            <h1 className='signupH1'>Create Account</h1>
            <div className="signup-input-box">
                <input type="text" placeholder='Phone No.' value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
            </div>
            <div className="signup-input-box">
                <input type="text" placeholder='Username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            </div>
            <div className="signup-input-box">
            <input type="password" placeholder='Password'value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <div className="signup-remember-forget">
                  <lable><input type="checkbox"/> remember me</lable>
                  <a href="#">Forgot Password?</a>
            </div>
            <div className="signup-buttontype">
            <button onClick={()=>{postdetails()}}>Sign Up</button>
            <p>did you have an account <span onClick={()=>{gotosignin()}}>Log In</span></p>
            </div>
            
            
    </div>
    </div>

  )
}

export default UserSignUp