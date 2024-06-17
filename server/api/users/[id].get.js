import User from "~/server/models/User";
import users from ".";

export default defineEventHandler(async(event)=> {
    const body = await readBody(event)

    const id = event.context.params.id

    try {
        await User.findById(id, body)
    } catch (error) {
        throw createError({
            message: "User Not Found!"
        })
    }
})