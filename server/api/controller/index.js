import Users from "./../../models/User"
export default defineEventHandler(async(event) => {
    return Users.find()
})