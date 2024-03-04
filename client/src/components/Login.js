import React, { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom'
import Style from "../styles/ComponentStyle.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
const LoginData= async()=>{

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
navigate("/") 
    }
  },[])

  // console.log(email,password)
  let result=await fetch('http://localhost:8080/login',{
    method :"post", 
    body : JSON.stringify({email,password}),
    headers :{
      'Content-Type':'application/json'
    },
  })
  result= await result.json();
  // console.log(result)
  if(result.name){
    console.log("Login done");
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/")
  }else{
alert("Please enter Correct Details")
  }

}
  return (
    <>
      <div className={Style.form}>
        <h4> Login </h4>
        <input type="email" value={email} placeholder=" Enter Email"onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder=" Enter Password"onChange={(e)=>setPassword(e.target.value)} />
        <button type="button" onClick={LoginData}> Login</button>
      </div>
    </>
  );
};

export default Login;
