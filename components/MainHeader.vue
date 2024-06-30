<template>
  <header
    class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0 bg-[#07d884]"
  >
    <nav
      class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="relative md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <a
            class="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
            >P.R.E</a
          >
          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div
            class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            <div
              class="flex flex-col divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700"
            >
              <div
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:px-3 md:py-6"
              >
                <button
                  type="button"
                  class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-neutral-200 dark:hover:text-neutral-500"
                >
                  Home
                </button>
              </div>

              <a
                class="font-medium text-gray-800 hover:text-gray-600 py-3 md:px-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-500"
                href="#"
              >
                Perfomance
              </a>

              <nuxt-link to="/users">
                <a
                  class="font-medium text-gray-800 hover:text-gray-600 py-3 md:px-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-500"
                  href="#"
                >
                  Users
                  <span
                    class="py-0.5 px-2 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600"
                    >10</span
                  >
                </a>
              </nuxt-link>

              <div class="pt-3 md:pt-0">
                <a
                  class="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold text-white disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#2d334c"
                      d="M15.9 13.2c-.1 0-.1-.1-.2-.1C17.2 12 18 10.3 18 8.4v-.7l.3-2.4c.2-1.6-.9-3-2.4-3.3l-.9-.2c-2-.3-4-.3-6 0l-.8.2c-1.6.3-2.7 1.7-2.5 3.3L6 7.7v.7c0 1.8.8 3.6 2.3 4.7c-.1 0-.1.1-.2.1c-3.3 1.4-5.6 4.5-6 8.1c-.1.5.3 1 .9 1.1c.6.1 17.5 0 18 0h.1c.5-.1.9-.6.9-1.1c-.5-3.6-2.8-6.7-6.1-8.1M12 16.3l-1.7-1.7c1.1-.2 2.2-.2 3.3 0zm0-3.9c-2.2 0-3.9-1.7-4-3.9h8c-.1 2.2-1.8 3.9-4 3.9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
