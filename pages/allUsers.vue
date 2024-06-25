<template>
  <div class="bg-[] md:h-screen lg:h-screen">
    <div class="p-4 h-14 bg-[#07d884]">
      <!-- component -->
      <div class="flex justify-between">
        <div class="text-[#090c28] font-semibold">P.R.E</div>
        <div class="flex gap-6">
          <!-- not -->
          <div class="relative cursor-pointer">
            <div class="absolute left-0 top-0 bg-red-500 rounded-full mr-4">
              <span class="text-sm text-white p-2">4</span>
            </div>
            <div class="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#090c28"
                  d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
                />
              </svg>
            </div>
          </div>
          <!-- ms -->
          <div class="relative cursor-pointer">
            <div
              class="absolute left-0 top-0 bg-red-500 rounded-full mr-4 text-center items-center"
            >
              <span class="text-sm text-white p-2">3</span>
            </div>
            <div class="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#090c28"
                  d="m5 8.75l-2.75-3.1q-.425-.5-.162-1.075Q2.35 4 3 4h17q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H7q-.825 0-1.412-.587Q5 18.825 5 18ZM9 13h9q.425 0 .712-.288Q19 12.425 19 12t-.288-.713Q18.425 11 18 11H9q-.425 0-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm0 3h6q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16Zm0-6h9q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8H9q-.425 0-.712.287Q8 8.575 8 9t.288.712Q8.575 10 9 10Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- users available -->
      <users-online />
      <!--  -->
      <div
        class="flex flex-wrap mt-14 h-52 bg-gray-200 justify-center text-center m-auto mx-8 my-6 rounded-md sm:h-screen md:h-96 lg:h-52"
      >
        <pie-chart />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
