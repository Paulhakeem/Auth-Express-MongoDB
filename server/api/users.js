import Users from "../models/users";

export default defineEventHandler(async (event) => {
  const newUser = await Users.create({
    name: "Paul",
    email: "paulnyamawi18@gmail.com",
    password: "Paul2020",
  });
  console.log(newUser);

  return newUser;
});
