import React, { useEffect, useState } from "react";
import Style from "../styles/ComponentStyle.module.css";
import { useNavigate, useParams } from 'react-router-dom'
// name: String,
// price:String,
// category:String,
// userId:String,
// company:String,
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
const params=useParams()
const navigate= useNavigate()
useEffect(()=>{
  getProductDetails();
},[])

const getProductDetails=async()=>{
    console.log(params)
    let result=await fetch(`http://localhost:8080/product/${params.id}`,{
      method :"get", 
    })
    result = await result.json();
    console.log(result);
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const update_Product=async()=>{
    let result=await fetch(`http://localhost:8080/product/${params.id}`,{
      method :"put", 
      body : JSON.stringify({name,price,category,company}),
      headers :{
        'Content-Type':'application/json'
      },
    })
  result= await result.json();
console.warn(result);
navigate("/")

  }
  return (
    <>
      <div className={Style.form}>
        <h4> Add Product </h4>
        <input
          type="text"
          value={name}
          placeholder=" Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder=" Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={category}
          placeholder=" Enter Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          value={company}
          placeholder=" Enter Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <button type="button" onClick={update_Product}>
          {" "}
          Update Product
        </button>
      </div>
    </>
  );
};

export default UpdateProduct;
