import User from "../../models/User";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = User.findOne(body);
    
    const randomCodes = user.getToken()
    console.log(randomCodes);
    await user.save({ validateBeforeSave: false })
  } catch (error) {
    console.log(error);
  }
});