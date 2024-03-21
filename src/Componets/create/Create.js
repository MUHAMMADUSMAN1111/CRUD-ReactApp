import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://65c4bcbedae2304e92e338ed.mockapi.io/crud-react-app', {
            name,
            age,
            email
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-success'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type='text' placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email: </label>
                            <input type='text' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Submit' />
                        </div>
                    </form>
                    {name} {age}{email}
                </div>

            </div>
        </>
    )
}

export default Create
