import { defineStore } from "pinia";

export const userStore = defineStore("user-store", () => {
  const user = useState("user", () => []);

  //  get all users
  const getAllUsers = async () => {
    try {
      const data = await $fetch("/api/users");
      user.value = data;
    } catch (error) {
      useNuxtApp().$toast.error(error.message);
    }
  };

  //   create user
  const createUser = async (name, email, password) => {
    try {
      await $fetch("/api/users/create", {
        method: "POST",
        body: { name, email, password },
      });
    } catch (error) {
      useNuxtApp().$toast.error(error.data.message);
    }
  };

  return {
    getAllUsers,
    createUser,
  };
});
