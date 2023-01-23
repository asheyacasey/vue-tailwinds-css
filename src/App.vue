<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>




    <nav
      class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src="./assets/logo.svg" class="h-13 mr-3 sm:h-15" alt="Flowbite Logo">
        </a>
        <div class="flex md:order-2">

          <button type="button"
            class="text-blue font-Inter-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
            In</button>

          <button type="button"
            class="text-white bg-light-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join
            Now</button>



          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between text-base font-Inter-medium hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul
            class="  text-blue  flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Solution</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <div class="flex flex-row h-[32rem] bg-gradient-to-r from-dark-blue to-sky-blue ">
      <div></div>
      <div class=" w-[36rem] ml-[10rem] pr-10">
        <h2 class="pt-40 text-4xl text-white font-Inter font-semibold dark:text-white">The Only <bold class="italic">
            FREE</bold> <br /> Martial Arts Software <br /> in the World!</h2>
        <p class="pt-4  text-sm text-white font-Inter font-normal">Make management easy and friendly with Axis. Track
          your <br /> school's performance, student's progress and a lot more in <br /> just few clicks without paying
          per month!</p>
        <button
          class="mt-10 pt-5 pb-5 pr-20 pl-20 rounded-xl drop-shadow-md font-Inter text-1xl font-semibold text-blue bg-white">Join
          Now</button>
      </div>
      <div class=" ml-110 w-[52rem]] pt-[48px]">
        <div class="pt-20">
          <img src="./assets/karategirl.svg" class="h-13 mr-3 sm:h-96" alt="Flowbite Logo ">
        </div>
      </div>


    </div>
    <div class="h-96">
      <div class="bg-white h-20 mt-[30px] grid place-items-center font-Inter font-bold ">TRUSTED BY OVER 249 MARTIAL
        ARTS SCHOOLS AND ORGANIZATION</div>
      <div class="bg-white grid place-items-center h-36">
        <img src="./assets/sponsors.svg" class="h-13 mr-3 sm:h-20 " alt="Flowbite Logo ">
      </div>
    </div>

    <div class="flex flex-row h-[40rem]">
      <div class="mt-[5rem] ml-[10rem] text-blue">
        <p class="text-4xl font-semibold font-Inter">User-friendly and<br /> Detailed Dashboard</p>
        <p class="pt-4 text-sm font-Inter font-normal">Pleasing Dashboard with complete necessary<br />information for
          your school. Get Up to Date with the<br />status weekly, monthly or yearly.</p>
        <button
          class="mt-10 pt-3 pb-3 pr-10 pl-10 rounded-md drop-shadow-md font-Inter text-sm font-semibold text-white bg-light-blue">Learn
          More</button>
      </div>
      <div class="h-36">
        <img src="./assets/Dashboard.svg" class="h-15 ml-[3rem] sm:h-62 " alt="dashboard">
      </div>
    </div>

    <div class="flex flex-row h-[34rem] bg-no-repeat  object-fill bg-[url('./assets/mobile.svg')] ">
      <div class="mt-[10rem] ml-[45rem] text-blue">
        <p class="text-4xl font-semibold font-Inter">Mobile-Friendly</p>
        <p class="pt-4 object-fill text-sm font-Inter font-normal">We make sure you can manage everything even on your
          <br />phone. Axis provides Mobile responsiveness for easy<br />accessibility. </p>
        <button
          class="mt-10 pt-3 pb-3 pr-10 pl-10 rounded-md drop-shadow-md font-Inter text-sm font-semibold text-white bg-light-blue">Learn
          More</button>
      </div>



    </div>

    <div class="bg-[#527AF5] h-[40rem]">
      <p class="pt-[4rem] text-center text-white font-Inter text-4xl font-semibold ">Our Features</p>
      <div class="flex flex-row mt-[3rem] text-white font-Inter">
        <div class=" ml-[14rem] ">
          <img src="./assets/icon1.svg" class="h-10" alt="dashboard">
            <h1 class="pt-2 font-bold">Dashboard</h1>
            <ul class="pl-5 list-disc text-sm">
              <li>Student & Lead Attendance</li>
              <li>Membership Status</li>
              <li>Program Status</li>
              <li>Heat Map</li>
              <li>Birthday Tracker</li>
            </ul>
        </div>
        <div class="ml-[9rem]">
          <img src="./assets/icon2.svg" class="h-10" alt="profile">
            <h1 class="pt-2 font-bold">Student & Lead  Profile</h1>
            <ul class="pl-5 list-disc text-sm">
              <li>Daily Attendance</li>
              <li>Performance Status</li>
              <li>Grade Management</li>
              <li>Membership Status</li>
              <li>Digital Agreements</li>
            </ul>
        </div>
        <div class="ml-[10rem]">
          <img src="./assets/icon3.svg" class="h-10" alt="programs">
            <h1 class="pt-2 font-bold">Programs and Ranks</h1>
            <ul class="pl-5 list-disc text-sm">
              <li>Custom Programs</li>
              <li>Subranks</li>
              <li>Grade Management</li>
              <li>Membership Status</li>
              <li>Digital Agreements</li>
            </ul>
        </div>
      </div>

      <div class="flex flex-row mt-[3rem] text-white font-Inter">
        <div class=" ml-[14rem]">
          <img src="./assets/icon1.svg" class="h-10" alt="dashboard">
            <h1 class="pt-2 font-bold">Manage Grading System</h1>
            <ul class="pl-5 list-disc text-sm">
              <li>Student & Lead Attendance</li>
              <li>Membership Status</li>
              <li>Program Status</li>
              <li>Heat Map</li>
              <li>Birthday Tracker</li>
            </ul>
        </div>
        <div class="ml-[9rem]">
          <img src="./assets/icon4.svg" class="h-10" alt="profile">
            <h1 class="pt-2 font-bold">Syllabus</h1>
            <ul class="pl-5 list-disc text-sm">
              <li>Daily Attendance</li>
              <li>Performance Status</li>
              <li>Grade Management</li>
              <li>Membership Status</li>
              <li>Digital Agreements</li>
            </ul>
        </div>
        <div class="ml-[12rem]">
          <img src="./assets/icon5.svg" class="h-10" alt="programs">
            <h1 class="pt-2 font-bold">Attendance Tracker</h1>
            <ul class="pl-5 list-disc text-sm">
              <li>Custom Programs</li>
              <li>Subranks</li>
              <li>Grade Management</li>
              <li>Membership Status</li>
              <li>Digital Agreements</li>
            </ul>
        </div>
      </div>


      
    </div>

    <div class="flex flex-row h-[28rem] bg-no-repeat  object-fill bg-[url('./assets/whyAxis.svg')] ">

      <div class=" h-[400px] w-[38rem] mt-[40px] ml-[10rem]">
        <div class="h-[60px] ">
          <p class="text-4xl font-Inter font-semibold  text-white">Why Axis?</p>
        </div>
        <div>
          <p class=" text-white text-base font-Inter">Aside that it's FREE, we are top notched software making sure
            accessiblity and speed is well provided.
            Additional features like Syllabus and Grading makes your management easier. More features with easier
            interface.</p>
        </div>


        <div class="  h-[250px] w-[40rem] mt-[20px]">
          <div class="flex h-[130px] ">
            <div class=" h-30 w-80">
              <p class="text-3xl font-Inter font-bold  text-darker-blue">249+</p>
              <p class="pt-[10px] text-white font-Inter text-sm pr-5">We are former Whitebelt. These Schools trusted us
                for 5 years.</p>
            </div>
            <div class=" h-30 w-80">
              <p class="text-3xl font-Inter font-bold  text-darker-blue">5 years</p>
              <p class="pt-[10px] text-white font-Inter text-sm  pr-5">In Martial Arts Business software providing high
                maintenance and security.</p>
            </div>
          </div>
          <div class="flex h-[130px] ">
            <div class="h-30 w-80">
              <p class="text-3xl font-Inter font-bold  text-darker-blue">98%</p>
              <p class="pt-[10px] text-white font-Inter text-sm  pr-5">Happy users based on our yearly survey. We are
                here to even improve our app more.</p>
            </div>
            <div class=" h-30 w-80">
              <p class="text-3xl font-Inter font-bold  text-darker-blue">50,000+</p>
              <p class="pt-[10px] text-white font-Inter text-sm  pr-5">Students Logged in over the last 5 years.</p>
            </div>
          </div>

        </div>


      </div>      
    </div>

    <div class="flex flex-row bg-gradient-to-r from-dark-blue to-sky-blue h-[10rem]">
      <h1 class="mt-[3rem] ml-[15rem] text-white text-2xl font-Inter font-bold ">Ready to get started?<br/>Get in touch and Join Us!</h1>
      <button type="button"
            class="mt-[4rem] mb-[3rem] ml-[15rem] pl-[4rem] pr-[4rem] rounded-lg drop-shadow-md font-Inter text-lg font-semibold text-light-blue bg-white">Join
            Now</button>     
    </div>

    <div class="h-[20rem] bg-white">
      <div class="flex flex-row text-sm">
      <img src="./assets/Logo-white.svg" class="h-[5rem] mt-[3rem] ml-[10rem]" alt="logo">

      <div class="mt-[3rem] ml-[5rem]">
        <h1 class="text-gray font-medium">QUICK LINKS</h1>
        <ul class="text-blue pt-4">
          <li class="pb-3">Solution</li>
          <li class="pb-3">Product</li>
          <li>About</li>
        </ul>
      </div>

      <div class="mt-[3rem] ml-[5rem]">
        <h1 class="text-gray font-medium">LEGAL</h1>
        <ul class="text-blue pt-4">
          <li class="pb-3">Claim</li>
          <li class="pb-3">Privacy</li>
          <li>Terms</li>
        </ul>        
      </div>

      <div class="mt-[3rem] ml-[5rem]">
        <h1 class="text-gray font-medium">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p class="text-blue pt-4">The latest news, articles, and resources, sent <br/>to your inbox.</p>
        <button type="button"
            class="mt-[3rem] mb-[3rem] ml-[13rem] pt-2 pb-2 pl-[2rem] pr-[2rem] rounded-lg drop-shadow-md font-Inter text-sm font-semibold text-white bg-light-blue">Get Started</button>
      </div>

      </div>

      <div class="text-gray ml-[10rem] mt-3">
        <p>@2021 Axis, Inc. All rights reserved</p>
      </div>
      
    </div>

  </div>

</template>

<style scoped>

</style>
