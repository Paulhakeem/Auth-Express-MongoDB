import Users from "~/server/models/User";
export default defineEventHandler(async(event) => {
return await Users.find()
})