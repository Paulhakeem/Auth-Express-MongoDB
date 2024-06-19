import { defineStore } from "pinia";
import User from "~/server/models/User";

export default function(){
  const users = useState("user", () => {});

  //  get all users
  const getAllUsers = async () => {
    try {
      const data = await $fetch("/api/users");
      users.value = data;
      return data
    } catch (error) {
      useNuxtApp().$toast.error(error.message);
    }
  };

  //   get specific user
  const getUser = async (id, name, email) => {
    try {
      await $fetch(`/api/users/${id}`, {
        method: "GET",
        body: { name, email },
      });
    } catch (error) {
      useNuxtApp().$toast.error(error.message);
    }
  };

  //   create user
  const createUser = async (name, email, password) => {
      await $fetch("/api/users/create", {
        method: "POST",
        body: { name, email, password },
      }).then(async()=> {
        await getAllUsers()
        useNuxtApp().$toast.success("User created successfully!!");
      }).catch((error) => {
        useNuxtApp().$toast.error(error.data.message);
      })
   
  };

  //   update user
  const updateUser = async (id, name) => {
    await $fetch(`/api/users/${id}`, {
      method: "PUT",
      body: { name },
    })
      .then(async () => {
        await getAllUsers();
        useNuxtApp().$toast.success("User Updated successfully!!");
      })
      .catch((error) => {
        useNuxtApp().$toast.error(error.data.message);
      });
  };

  //   delete user
  const deleteUser = async (id) => {
    await $fetch(`/api/users/${id}`, {
      method: "DELETE",
    })
      .then(async () => {
        await getAllUsers();
        useNuxtApp().$toast.success("User Deleted successfully!!");
      })
      .catch((error) => {
        useNuxtApp().$toast.error(error.data.message);
      });
  };


//   LOGIN USER
const loginUser = async(req, email, password) => {
    const {email, password} = req.body
    if (!email || !password) {
        return useNuxtApp().$toast.error(error.data.message);
    }

    const userInfo = User.findOne({email}).select("+password")
    const matchPassword = await comparePassword(password, userInfo)

    if(!userInfo || !matchPassword){
        return  useNuxtApp().$toast.error("Something went wrong. Please try again!")
    }else{
        return  useNuxtApp().$toast.success("User LoggedIn!")
    }

}

  return {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
  };
};
