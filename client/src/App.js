import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateComponent from './PrivateComp/PrivateComponent';
import AllProduct from './components/AllProduct';

function App() {
  return (
  <>
  <BrowserRouter>
  <Nav/>
  <Routes>

    <Route element={<PrivateComponent/>}>
    <Route path='/' element={<AllProduct/>}/>
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
