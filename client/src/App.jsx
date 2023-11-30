// import {useState} from 'react'
import SignUp from './SignUp'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
// BroswerRouter,
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
