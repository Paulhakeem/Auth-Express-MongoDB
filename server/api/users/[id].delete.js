import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  try {
    await User.findByIdAndDelete(id);
    return {
      message: "user has been deleted",
    };
  } catch (error) {
    throw createError({
      message: error.message,
    });
  }
});
