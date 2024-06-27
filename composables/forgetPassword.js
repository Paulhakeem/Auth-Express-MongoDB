export default function () {
  const resetPassword = async (email) => {
    await $fetch("/api/users/resetCode", {
        method: "POST",
        body: {email}
    }).then((res) => {
        console.log("token send");
    }).catch((err)=> {
        console.log(err);
    })
  };

  return {
    resetPassword
  }
}
