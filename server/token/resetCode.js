import User from "../models/User";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = User.findOne(body);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});
