<template>
  <header
    class="bg-[url('/assets/img/sci.jpg')] opacity bg-cover bg-no-repeat bg-center h-auto bg-fixed"
  >
    <main
      class="flex justify-center items-center pt-20 pb-20 sm:flex-wrap md:flex-wrap"
    >
      <!-- form content -->
      <div class="w-80 h-auto bg-black opacity-70 justify-center items-center">
        <div class="pt-8 mb-4">
          <div class="text-center">
            <h4 class="text-center text-white font-semibold">
              Forget Your Password
            </h4>
            <p class="text-gray-200 text-pretty text-sm pt-3">
              Write your email to get reset code to create new password
            </p>
          </div>
          <div class="flex flex-col justify-center items-center pt-6">
            <form @submit.prevent="" method="post">
              <label
                class="font-semibold text-xs text-white"
                for="usernameField"
                >Email</label
              >
              <input
                v-model="email"
                class="flex items-center h-9 px-4 w-72 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="email"
              />
              <div class="text-center">
                <button
                  class="h-10 px-6 w-64 bg-[#07d884] mt-8 rounded font-semibold text-sm text-blue-100"
                >
                  Send Reset Code
                </button>
              </div>
              <div class="flex justify-center text-xs text-white pt-4">
                <nuxt-link to="/">
                  <a class="font-semibold hover:text-[#07d884]">Go Back</a>
                </nuxt-link>
              </div>
            </form>
            <!-- Component End  -->
          </div>
        </div>
      </div>
    </main>
  </header>
</template>

<script setup>
</script>
