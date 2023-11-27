import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name,email,password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} > 
                    <div className='mb-3'> 
                        <label htmlFor='email'>
                            <strong>
                                Name
                            </strong>
                        </label>
                        <input className='form-control' type="text" name="email"  placeholder="Enter your name" onChange={(e)=> setName(e.target.value)} required/>
                    </div>
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
                            <input className='form-control' type="password" name="password"  placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-warning w-100 '>
                        Register
                    </button>
                </form>
                <p>Already have an account</p>
                <Link to="/login" type='submit' className='btn  w-100 bg-dark text-white text-decoration-none '>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default SignUp
