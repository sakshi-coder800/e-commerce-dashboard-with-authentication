import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Profile from './components/profile';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
  <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Profile/>}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/update' element={<UpdateProduct/>}/>
  </Routes>
  
  </BrowserRouter></>
  );
}

export default App;
