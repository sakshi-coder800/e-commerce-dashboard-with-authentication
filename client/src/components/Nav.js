import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/ComponentStyle.module.css';
const Nav = () => {
  return (
    <>
<ul className={style.navbar}>
    <li><Link to="/"> Home</Link></li>
    <li><Link to="/add"> Add Product</Link></li>
    <li><Link to="/update"> Update Product</Link></li>
    <li><Link to="/logout"> Logout</Link></li>
    <li><Link to="/profile"> Profile</Link></li>
    <li><Link to="/signup"> Signup</Link></li>
</ul>

    
    </>
  )
}

export default Nav