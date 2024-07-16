export default function () {
  const createUser = async (name, email, password) => {
    const res = await $fetch("/api/signUp", {
      method: "POST",
      body: { name, email, password },
    });
    if (res) {
      useNuxtApp().$toast.success("User Created!!");
    }
    useNuxtApp().$toast.error("Something Going wrong");
  };

  return {
    createUser,
  };
}
