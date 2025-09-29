import e from "express";
import { Schema } from "mongoose";
import mongoose from "mongoose";
// Define the User schema
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

let UserModel = mongoose.model('User', UserSchema);
export default UserModel;