import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Profile from './components/profile';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateComponent from './PrivateComp/PrivateComponent';

function App() {
  return (
  <>
  <BrowserRouter>
  <Nav/>
  <Routes>

    <Route element={<PrivateComponent/>}>
    <Route path='/' element={<Profile/>}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/update' element={<UpdateProduct/>}/>
    </Route>


    <Route path='/signup' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter></>
  );
}

export default App;
