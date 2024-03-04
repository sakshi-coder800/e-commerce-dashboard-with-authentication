import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles/ComponentStyle.module.css';
const Nav = () => {
  const auth=localStorage.getItem("user");
  const navigate=useNavigate();
const Logout =()=>{
  // console.warn("")
  localStorage.clear();
  navigate("/signup")
}

  return (
    <>
{auth  ? 
  <ul className={style.navbar}>
    <li><Link to="/"> Home</Link></li>
    <li><Link to="/add"> Add Product</Link></li>
    <li><Link to="/update"> Update Product</Link></li>
    <li><Link to="/profile"> Profile</Link></li>
  {auth ?
 <li> <Link to="/signup" onClick={Logout} > Logout  (<small>{JSON.parse(auth).name}</small>) </Link> </li> 
 : <>
 {/* <li><Link to="/signup"> Sign Up</Link> </li>
   <li><Link to="/login"> login</Link></li> */}
</>
    }
</ul> 
:
<ul className={style.navbar}>
<li><Link to="/signup"> Sign Up</Link> </li>
   <li><Link to="/login"> login</Link></li>
</ul>
}

    
    </>
  )
}

export default Nav