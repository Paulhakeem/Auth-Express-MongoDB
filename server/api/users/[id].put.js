import User from "~/server/models/User";
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const id = event.context.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(id, body);
    const token  = jwt.sign({id: updateUser._id}, process.env.SECRET_STR, {
      expiresIn: process.env.EXP_DATE
    })
    return {
      token,
      message: "User Updated!!",
    };
  } catch (error) {
    throw createError({
      message: error.message,
    });
  }
});
