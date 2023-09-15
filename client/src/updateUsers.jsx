/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams, useNavigate } from 'react-router-dom';

const UpdateUsers = () => {

    // const { idForUpdate } = useParams();
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();


    useEffect(() => {
        // console.log(id);
        axios.get('http://localhost:3000/getUser/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err))
    }, [])

    // With Async/Await Method
    const updateFunc = async (e) => {
        e.preventDefault();
        try {
            const updateUser = await axios.put("http://localhost:3000/updateUser/" + id, { name, email, age })
            console.log(updateUser)
            navigate('/');
        } catch (error) {
            console.log("Error is ", error)
        }
    }
    // const updateFunc = async (e) => {
    //     e.preventDefault();
    //     axios.put("http://localhost:3000/updateUser/" + id, { name, email, age })
    //         .then(result => {
    //             console.log(result)
    //             navigate('/')
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div>
            <h1 className="text-center">Update Users</h1><br />
            <form onSubmit={updateFunc}>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name' className='form-control' ></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Email' className='form-control' ></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} type='text' placeholder='Enter Age' className='form-control' ></input>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    )
}

export default UpdateUsers