import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

})

const users = mongoose.model("Users", userSchema)


export default users