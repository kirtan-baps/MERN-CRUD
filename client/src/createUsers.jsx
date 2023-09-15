/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const navigate = useNavigate();

    // With Promise Method

    // const submitFunc = (e) => {
    // e.preventDefault();
    // axios.post("http://localhost:3000/createUser", { name, email, age })
    //     .then(result => console.log(result))
    //     .catch(error => console.log("Error is ", error))
    // }

    // With Async/Await Method
    const submitFunc = async (e) => {
        e.preventDefault();
        try {
            const addUser = await axios.post("http://localhost:3000/createUser", { name, email, age })
            console.log(addUser)
            navigate('/');
        } catch (error) {
            console.log("Error is ", error)
        }
    }

    return (
        <div>
            <h1 className="text-center">Create Users</h1><br />
            <form onSubmit={submitFunc}>
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
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default CreateUsers