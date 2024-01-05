import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const SignUp = () => {

    const [namef, setNamef] = useState()
    const [namel, setNamel] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Please enter your Email")
        } else if (namef === "") {
            toast.error("First Name is required");
        } else if (namel === "") {
            toast.error("Last Name is required");
        } else if (password === "") {
            toast.error("Please enter your password");
        } else if (password.length < 6) {
            toast.error("Please enter a valid password with at least 6 characters");
        } else {
            axios.post('https://authen-system-go59.onrender.com/register', { namef, namel, email, password })
                .then(result => {
                    console.log(result)
                    toast.success("Register Successfully!");
                    navigate('/login');
                })
                .catch(response => {
                    if (response.message) {
                        toast.error('The email is already in use');
                    } else {
                        toast.error("Server Error! Please try again later.");
                    }
                });
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} >
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>
                                FirstName
                            </strong>
                        </label>
                        <input className='form-control' type="text" name="email" placeholder="Enter your Firsname" onChange={(e) => setNamef(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>
                                LastName
                            </strong>
                        </label>
                        <input className='form-control' type="text" name="email" placeholder="Enter your LastName" onChange={(e) => setNamel(e.target.value)} />
                    </div>
                    <div>
                        <div className='mb-3'>
                            <label htmlFor='email'>
                                <strong>
                                    Email
                                </strong>
                            </label>
                            <input className='form-control' type="email" name="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <label htmlFor='password'>
                                <strong>
                                    Password
                                </strong>
                            </label>
                            <input className='form-control' type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-warning w-100 '>
                        Register
                    </button>
                </form>
                <Link to="/login" className='text-decoration-none '>
                    <p className='text-center text-dark pt-2'>Already have an account</p>
                </Link>
                <Link to="/login" type='submit' className='btn  w-100 bg-dark text-white text-decoration-none '>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default SignUp
