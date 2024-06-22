import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  // GET DATA FROM BODY
  const body = await readBody(event);

  try {
    const { email, password } = body;

    if (!email || !password) {
      return "User login successfully";
    }
    const userlogin = await User.findOne({ email }).select("+password");
    const matchPassword = await userlogin.comparePassword(
      password,
      userlogin.password
    );

    if (!userlogin || !matchPassword) {
      return "Incorrect Email Or Password";
    }
    return {
      message: "User Login Successfully",
    };
  } catch (error) {
    throw createError({
      message: error.message,
    });
  }
});
