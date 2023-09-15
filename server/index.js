const express = require('express');
const app = express()
const mongoose = require('mongoose');

const UserModel = require('./users');

// to Connect frontend with backend

const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());


// Connect with Database
const dbName = 'crud';
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);



// ---------
// To Insert User
// ---------

app.post('/createUser', async (req, res) => {
    try {
        const users = await UserModel.create(req.body)
        res.json(users)
    } catch (error) {
        res.json(error);
        console.error('Error creating user:', error);
    }
})


// With Promise
// promise.then(onFulfilled)
// .then is callback method


// app.post('/createUser', (req, res) => {
//     UserModel.create(req.body)
//         .then(users => res.json(users))
//         .catch(error => res.json(error))
// })

// ---------
// To Display User
// ---------

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// ---------
// To Display User with specific ID 
// For Update
// ---------

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// app.get('/getUser/:idForUpdate', (req, res) => {
//     const id = req.params.idForUpdate;
//     UserModel.findById({ id })
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })


// ---------
// To Update User
// ---------

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// ---------
// To Delete User
// ---------


// With Reload
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})

// Without Reload not Working

// app.delete('/deleteUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndRemove({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err))
// })



// ----------------
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});