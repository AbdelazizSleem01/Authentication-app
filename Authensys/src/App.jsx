// import {useState} from 'react'
import SignUp from './SignUp'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Login from './Login'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

// BroswerRouter,
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
