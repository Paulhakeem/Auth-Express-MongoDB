import express from "express";
import helmet from "helmet";
import User from "~/server/models/User";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const app = express();
  // Use Helmet!
  app.use(helmet());
  // GET DATA FROM BODY
  const body = await readBody(event);

  try {
    const newUser = await User.create(body);
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_STR, {
      expiresIn: process.env.EXP_DATE,
    });
    await token.save()
    return {
      token,
      message: "User Created!!",
    };
  } catch (error) {
    throw createError({
      message: error.message,
    });
  }
});
