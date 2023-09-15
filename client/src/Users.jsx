/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Users = () => {

    // Static Data
    // const [users, setUsers] = useState([
    //     { Name: "MSM", Email: "msm@psm.com", Age: 90 },
    //     { Name: "PSM", Email: "psm@psm.com", Age: 103 },
    // ]);

    // For Dynamic Data
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const getUser = await axios.get('http://localhost:3000/');
            setUsers(getUser.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();

        // axios.get('http://localhost:3000/')
        //     .then(result => setUsers(result.data))
        //     .catch(err => console.log(err))
    }, [])

    // With Reload
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    // Without Reload not Working

    // const handleDelete = (id) => {
    //     axios.delete('http://localhost:3000/deleteUser/' + id)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="d-flex " >
            <div className="table">
                <Link to='/create' className="btn btn-warning"  >Add User</Link>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <>
                                    <tr key={index} >
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            {/* <button className="btn btn-primary">Edit</button> */}
                                            <Link to={`/update/${user._id}`} className="btn btn-primary"  >Edit</Link>
                                            <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)} >Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </div>
        </div >
    )
}

export default Users
