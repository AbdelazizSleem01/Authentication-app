import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/login', {email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }

    

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} > 
                    <div>
                        <div className='mb-3'> 
                            <label htmlFor='email'>
                                <strong>
                                    Email
                                </strong>
                            </label>
                            <input className='form-control' type="email" name="email"  placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)} required/>
                        </div>
                    </div>
                    <div>
                        <div className='mb-3'> 
                            <label htmlFor='email'>
                                <strong>
                                    Password
                                </strong>
                            </label>
                            <input className='form-control' type="password" name="password" color='blue'  placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-warning w-100 '>
                        Login
                    </button>
                </form>
                <Link to="/register" type='submit' className='btn mt-2 w-100 bg-dark text-white text-decoration-none '>
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default Login
