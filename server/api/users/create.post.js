import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  // GET DATA FROM BODY
  const body = await readBody(event);

  try {
    await User.create(body);
    return {
      message: "User Created!!",
    };
  } catch (error) {
    throw createError({
      message: error.message,
    });
  }
});
