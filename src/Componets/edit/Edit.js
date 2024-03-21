import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Edit = () => {
    const [id, setID] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        axios.put(`https://65c4bcbedae2304e92e338ed.mockapi.io/crud-react-app/${id}`,{
            name,
            age,
            email
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4'>
                        <h1>Update Data</h1>
                    </div>
                    <form onSubmit={handleChange}>
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' placeholder='Enter Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type='text' placeholder='Enter Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email: </label>
                            <input type='text' placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Update' />
                        </div>
                    </form>
                    {/* {name} {age}{email} */}
                </div>

            </div>
        </>

    )
}

export default Edit
