import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please enter your name."],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Please enter your email address."],
      validate: [validator.isEmail],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      miniLength: [8, "Password shuld be of 8 characters"],
      select: false,
    },
    // confirmPassword: {
    //   type: String,
    //   require: [true, "Please confirm your password"],
    //   select: false,
    // },
})

const User = mongoose.model("User", userSchema);

export default User;