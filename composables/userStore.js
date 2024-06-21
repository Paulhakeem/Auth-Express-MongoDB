
export default function () {
  const users = useState("user", () => {});

  //  get all users
  const getAllUsers = async () => {
    try {
      const data = await $fetch("/api/users");
      users.value = data;
      return data;
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
    })
      .then(async () => {
        await getAllUsers();
        useNuxtApp().$toast.success("User created successfully!!");
        return navigateTo("/darshboard");
      })
      .catch((error) => {
        useNuxtApp().$toast.error(error.data.message);
      });
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
  const loginUser = async(email, password)=> {
    if(!email || !password){
        return useNuxtApp().$toast.error("Something happens");
    }

    const userInfo = await users.findOne({email}).select("+password")
    console.log(userInfo);
    const matchPassword = await userInfo.comparePassword(password, userInfo.password)

    if(!userInfo || !matchPassword){
        return useNuxtApp().$toast.error("Something went wrong. Please try again!");
    }
    return navigateTo("/darshboard");
  }

  return {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
  };
}
