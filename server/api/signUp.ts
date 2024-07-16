export default defineEventHandler(async (event) => {
  const res = await $fetch("http://localhost:5000/api/signUp");
  return {
    res,
  };
});
