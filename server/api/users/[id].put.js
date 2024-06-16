import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const id = event.context.params.id;

  try {
    await User.findByIdAndUpdate(id, body);
    return {
      message: "User Updated!!",
    };
  } catch (error) {
    throw createError({
      message: error.message,
    });
  }
});
