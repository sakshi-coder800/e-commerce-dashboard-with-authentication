import React, { useState } from "react";
import Style from "../styles/ComponentStyle.module.css";
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

  const update_Product=async()=>{

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
