import React, { useState } from 'react'
import Style from "../styles/ComponentStyle.module.css";
// name: String,
// price:String,
// category:String,
// userId:String,
// company:String,
const AddProduct = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");


const addProduct=()=>{
  console.log(name,email,price,category,company);


  
}

  return (
    <>
 <div className={Style.form}>
        <h4> Add Product </h4>
        <input type="text" value={name} placeholder=" Enter Name"onChange={(e)=>setName(e.target.value)} />
        <input type="email" value={email} placeholder=" Enter Email"onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" value={price} placeholder=" Enter Price"onChange={(e)=>setPrice(e.target.value)} />
        <input type="text" value={category} placeholder=" Enter Category"onChange={(e)=>setCategory(e.target.value)} />
        <input type="text" value={company} placeholder=" Enter Company"onChange={(e)=>setCompany(e.target.value)} />
        <button type="button" onClick={addProduct}> Add Product</button>
      </div>


    </>
  )
}

export default AddProduct

