import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [dataApi, setDataApi] = useState([])
    const getData = () => {
        axios.get('https://65c4bcbedae2304e92e338ed.mockapi.io/crud-react-app').
            then((res) => {
                setDataApi(res.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://65c4bcbedae2304e92e338ed.mockapi.io/crud-react-app/${id}`).
            then(() => {
                getData()
            });
    }
    const setDataToLocalStorage = (id,name,age,email) =>{
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2'>
                        <Link to='/create'>
                            <button className='btn btn-primary'>Create</button>
                        </Link>
                    </div>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataApi.map((value) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.age}</td>
                                            <td>{value.email}</td>
                                            <td>
                                                <Link to='/edit'>
                                                    <button className='btn btn-primary'
                                                    onClick={ () => setDataToLocalStorage(value.id, value.name, value.age, value.email)}
                                                    >Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger'
                                                    onClick={() => {
                                                        if (window.confirm('ARE YOU SURE TO DELETE DATA ?')) {
                                                            handleDelete(value.id)
                                                        }
                                                    }}>
                                                    Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read
