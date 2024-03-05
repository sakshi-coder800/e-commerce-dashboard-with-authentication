import React, { useState } from "react";
import Style from "../styles/ComponentStyle.module.css";
// name: String,
// price:String,
// category:String,
// userId:String,
// company:String,
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const add_Product = async () => {
    if (!name || !price || !category || !company || !userId) {
      setError(true);
      return false;
    }

    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userId._id);

    const result = await fetch("http://localhost:8080/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

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
        {error && !name ? (
          <span>
            <strong> *</strong> Enter Invalid Name
          </span>
        ) : (
          ""
        )}

        <input
          type="text"
          value={price}
          placeholder=" Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price ? (
          <span>
            <strong> *</strong> Enter Invalid Price
          </span>
        ) : (
          ""
        )}
        <input
          type="text"
          value={category}
          placeholder=" Enter Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category ? (
          <span>
            <strong> *</strong> Enter Invalid Category
          </span>
        ) : (
          ""
        )}
        <input
          type="text"
          value={company}
          placeholder=" Enter Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        {error && !company ? (
          <span>
            <strong> *</strong> Enter Invalid Company
          </span>
        ) : (
          ""
        )}
        <button type="button" onClick={add_Product}>
          {" "}
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddProduct;
