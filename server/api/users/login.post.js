import User from "~/server/models/User";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
    const { email, password } = await useBody(event);

    if (!email || !password) {
      useNuxtApp().$toast.error(
        "Email or Password is incorrect. Please try again!"
      );
    }

    const userLogin = await User.findOne({ email });
    const matchPassword = await userLogin.comparePassword(
      password,
      userLogin.password
    );
    // check if use is exist
    if (!userLogin || !matchPassword) {
      useNuxtApp().$toast.error(
        "Email or Password is incorrect. Please try again!"
      );
    }
    // token genereted
    const loginToken = jwt.sign({ id: userlogin._id }, process.env.SECRET_STR, {
      expiresIn: process.env.EXP_DATE,
    });
    console.log("hello");
    return {
      loginToken,
      userLogin
    }
   
    // return loginToken;
});
