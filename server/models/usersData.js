import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail],
  },
  password: {
    type: String,
    miniLength: [8, "Password Should be Atleast 8 characters"],
    required: [true, "Please Enter Your Password"],
    select: false,
  },
  confirmPassword: {
    type: String,
    miniLength: [8, "Password Should be Atleast 8 characters"],
    required: [true, "Please Confirm Your Password"],
    select: false,
  },
});

const Users = mongoose.model("users", userSchema);

export default Users;
