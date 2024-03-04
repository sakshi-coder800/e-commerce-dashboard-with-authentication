import React, { useState,useEffect } from "react";
import {  useNavigate } from 'react-router-dom'

import Style from "../styles/ComponentStyle.module.css";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
//   useEffect(()=>{
//     const auth=localStorage.getItem("user");
//     if(auth){
// navigate("/") 
//     }
//   })
const collectData= async()=>{

  // console.log(name,email,password)
  let result=await fetch('http://localhost:8080/register',{
    method :"post", 
    body : JSON.stringify({name,email,password}),
    headers :{
      'Content-Type':'application/json'
    },
  })
  result= await result.json();
  // console.warn(await result.json());
  if(result){
    console.log("registered");
    localStorage.setItem("user",JSON.stringify(result))
  }else{
    console.log("not")

  }

}
  return (
    <>
      <div className={Style.form}>
        <h4> Login </h4>
        <input type="email" value={email} placeholder=" Enter Email"onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder=" Enter Password"onChange={(e)=>setPassword(e.target.value)} />
        {/* <button type="button" onClick={collectData}> Sign up</button> */}
      </div>
    </>
  );
};

export default Login;
