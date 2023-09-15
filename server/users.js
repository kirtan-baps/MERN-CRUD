const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})
// const UserSchema = new mongoose.Schema({
//     name: { type: String },
//     email: { type: String },
//     age: { type: Number },
// })

const collectionName = 'users';

const UserModel = mongoose.model(collectionName, UserSchema);

module.exports = UserModel;