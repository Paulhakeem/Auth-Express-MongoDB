import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "crypto";

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
  passwordResetToken: String,
  passwordResetTokenExp: Date,
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// compare password
userSchema.methods.comparePassword = async function (pwd, pwdDB) {
  return await bcrypt.compare(pwd, pwdDB);
};

// RESET PASS TOKEN
userSchema.methods.getToken = async function () {
  const resetCode = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetCode)
    .digest("hex");
  // code exp in 10min
  this.passwordResetTokenExp = Date.now() + 10 * 60 * 1000;

  console.log(resetCode, this.passwordResetToken);

  return resetCode
};

const User = mongoose.model("User", userSchema);

export default User;
