<template>
  <div
    class="max-w-md m-auto mt-4 justify-center text-center bg-[#2d334c] rounded-md p-4"
  >
    <h1 class="text-2xl text-[#07d884] font-semibold">Welcome Paul🤗</h1>

    <div class="pt-4">
      <button
        class="p-2 w-36 text-white border border-1 border-[#07d884] rounded-md hover:bg-[#07d884]"
      >
        Edit Your Profile
      </button>
    </div>

    <div class="mt-8 text-center justify-center content-center">
      <p class="text-gray-200 text-sm">Follows Us On The Following Platforms</p>
      <div class="flex justify-center gap-4 pt-3">
        <!-- <font-awesome :icon="['far', 'facebook']" /> -->
        <img src="../assets/img/facebook.png" alt="facebook" class="w-6 cursor-pointer">
        <img src="../assets/img/twitter.png" alt="facebook" class="w-6 cursor-pointer">
        <img src="../assets/img/github.png" alt="facebook" class="w-6 cursor-pointer">
        <img src="../assets/img/linkedin.png" alt="facebook" class="w-6 cursor-pointer">
      </div>
    </div>
  </div>
</template>

<script setup></script>
