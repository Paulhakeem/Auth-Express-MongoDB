<template>
  <div>
    <div class="text-center pt-14">
      <h2 class="text-[#07d884] font-semibold text-xl">
        Welcome to P.R.E Epowering System
      </h2>
    </div>

    <!-- spinner -->

    <!-- spinner -->

    <!--  -->
    <div class="pt-6">
      <div  class="flex flex-wrap gap-4 justify-center">
        <div v-for="user in allUsers" :key="user.id" class="flex gap-2 bg-gray-200 p-5 w-56 h-20 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="#888888"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
              />
            </g>
          </svg>
          <div>
            <h4 class="text-[#07d884] text-md font-semibold">{{user.name}}</h4>
            <p class="text-gray-600 text-sm">{{user.email}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const allUsers = useState("users", () => {})
onMounted(async () => {
  try {
    const data = await $fetch("/api/users");
    const users = await data.res.data.users
    console.log(users);
    if (users) {
      allUsers.value = users
    }
  } catch (error) {
    console.log(error.message);
  }
});
</script>

<style lang="scss" scoped></style>
