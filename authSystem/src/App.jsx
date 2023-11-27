// import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
// BroswerRouter,
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
