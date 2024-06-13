import Users from "~/models/users";

export default function(){
 const createUser = async(name, email, password, confirmPassword) => {
  const newUser = await Users.create(name, email, password, confirmPassword)
  console.log(newUser);
 }
 return{
    createUser
 }
}