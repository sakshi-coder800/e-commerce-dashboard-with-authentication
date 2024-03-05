import React, { useEffect, useState } from "react";
import Style from "../styles/ComponentStyle.module.css";
const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:8080/products", {
      method: "get",
    });
    result = await result.json();
    setProducts(result);
  };
  console.warn("products", products);
  return (
    <>
      <div className={Style.table}>
        <h4>Product List</h4>
<table>
<tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>

        { products.map((item,index)=>{
          <tr>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.category}</td>
      </tr>
    })}
</table>      </div>
    </>
  );
};

export default AllProduct;
