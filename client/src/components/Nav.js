import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles/ComponentStyle.module.css';
const Nav = () => {
  const auth=localStorage.getItem("user");


  return (
    <>
<ul className={style.navbar}>
    <li><Link to="/"> Home</Link></li>
    <li><Link to="/add"> Add Product</Link></li>
    <li><Link to="/update"> Update Product</Link></li>
    <li><Link to="/profile"> Profile</Link></li>
    <li> 
  {auth ?<Link to="/logout"> Logout</Link> : <Link to="/signup"> Sign Up</Link> }
   </li>
</ul>

    
    </>
  )
}

export default Nav