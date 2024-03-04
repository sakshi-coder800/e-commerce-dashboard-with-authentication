import React, { useState } from "react";
import Style from "../styles/ComponentStyle.module.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const collectData=()=>{
  console.log(name,email,password)
}
  return (
    <>
      <div className={Style.form}>
        <h4> Register </h4>
        <input type="text" value={name} placeholder=" Enter Name" onChange={(e)=>setName(e.target.value)} />
        <input type="email" value={email} placeholder=" Enter Email"onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder=" Enter Password"onChange={(e)=>setPassword(e.target.value)} />
        <button type="button" onClick={collectData}> Sign up</button>
      </div>
    </>
  );
};

export default Signup;
