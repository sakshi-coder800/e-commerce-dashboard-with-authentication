import React from 'react'
import{Navigate,Outlet} from 'react-router-dom'


const PrivateComponent = () => { // PrivateRoute
const auth= localStorage.getItem("user");


    return   auth ?   <Outlet/>: <Navigate to="/signup"></Navigate>
}

export default PrivateComponent