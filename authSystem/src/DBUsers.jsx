import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DBUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getUsers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <div className='p-2 float-end'>
            <Link to='/login' >
                <button className='btn bg-success text-white  m-2  fw-bold'>login</button>
            </Link>
            <Link to='/register'>
                <button className='btn bg-warning fw-bold hover-none'>register</button>
            </Link>
        </div>
            <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
                <div className='w-75'>
                    <table className='table table-striped table-secondary table-bordered '>
                        <thead>
                            <tr>
                                <th  className='pe-5'>
                                    FirstName (&#8497;)
                                </th>
                                <th  className='pe-5'>
                                    LastName (&#8466;)
                                </th>
                                <th  className='pe-5'>
                                    Email &#128221;
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}className='table-success' >
                                    <td >{user.namef}</td>
                                    <td>{user.namel}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DBUsers
