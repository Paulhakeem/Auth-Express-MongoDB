import User from "~/server/models/User";
import jwt from "jsonwebtoken";

export default defineEventHandler((event) => {
    const login = async (req, res) => {
      console.log("hello");
      const { email, password } = req.body;

      if(!email || !password) {
       console.log("somethig went wrong");
      }

      const userlogin = await User.findOne({ email });
      const matchPassword = await userlogin.comparePassword(
        password,
        userlogin.password
      );
      // check if use is exist
      if (!userlogin || !matchPassword) {
        useNuxtApp().$toast.error(
          "Email or Password is incorrect. Please try again!"
        );
      }
      // token genereted
      const loginToken = jwt.sign(
        { id: userlogin._id },
        process.env.SECRET_STR,
        {
          expiresIn: process.env.EXP_DATE,
        }
      );

      return loginToken
    };

  return {
    login
  }
});
