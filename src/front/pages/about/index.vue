<template>
  <div class="text-slate-200 mx-5 lg:mx-auto lg:max-w-screen-2xl">
    <div class="md:grid md:gap-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 lg:px-8">
      <div class="md:col-span-3">
        <div class="bg-white rounded-lg shadow-md p-5 my-2">
          <img class="w-32 h-32 rounded-full mx-auto object-cover" src="https://github.com/theguelly.png?size=200" alt="Profile picture">
          <h2 class="text-center text-2xl font-semibold mt-3 text-slate-800">Joshua Miguel Magtibay</h2>
          <p class="text-center text-gray-600 mt-1">Software Engineer</p>
          <p class="text-center text-gray-400 mt-2 text-sm">@theguelly</p>
          <div class="flex justify-center mt-2">
            <a href="https://twitter.com/theguelly" title="Twitter" class="text-slate-500 hover:text-slate-700 mx-3">
              <IconBrandTwitter class="h-5 w-5" />
            </a> 
            <a href="https://www.linkedin.com/in/theguelly" title="LinkedIn" class="text-slate-500 hover:text-slate-700 mx-3">
              <IconBrandLinkedIn class="h-5 w-5" />
            </a>
            <a href="https://github.com/theguelly" title="Github" class="text-slate-500 hover:text-slate-700 mx-3">
              <IconBrandGitHub class="h-5 w-5" />
            </a>
          </div>
        </div>
        <div class="hidden md:block w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between pt-4 rounded-md">
          <div>
            <h2 class="text-xl">Work History</h2>
            <div class="grid grid-col-1 gap-4 mt-2">
              <div>
                <span class="text-slate-600 text-sm">June 2019 - June 2023</span>
                <h3 class="font-bold mt-px">Web Developer</h3>
                <div class="flex items-center gap-3 mt-2">
                  <a href="https://cafe24corp.com.ph/" class="text-sky-500 hover:text-sky-700 text-sm flex gap-1 items-center">
                    <span>Cafe24 Philippines, Inc.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-3 lg:col-span-5 xl:col-span-6 2xl:col-span-7">
        <div class="mt-5">
          <h3 class="text-xl font-semibold text-slate-200">Bio</h3>
          <p class="text-slate-400 mt-2 text-justify leading-5 max-w-full">
            I'm a software engineer with 4 years of experience in developing web applications. I'm highly proficient in various programming languages and frameworks such as <b>JavaScript</b>, <b>Typescript</b>, <b>VueJS</b>, <b>NestJS</b>, <b>NodeJS</b>, <b>Laravel/Lumen</b>, and <b>PHP</b>.</p>
          <p class="text-slate-400 mt-2 text-justify leading-5 max-w-full">
            Over the years, I have worked on a variety of projects, including applications for an e-commerce platform. I take great pride in my ability to solve complex problems and implement scalable solutions. I have a strong passion for learning and I'm always enthusiastic about adopting new technologies to enhance my skillset.
          </p>
        </div>
      </div>
      <div class="md:col-span-2">
        <div class="block md:hidden w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between pt-4 rounded-md">
          <div>
            <h2 class="text-xl">Work History</h2>
            <div class="grid grid-col-1 gap-4 mt-2">
              <div>
                <span class="text-slate-600 text-sm">June 2019 - June 2023</span>
                <h3 class="font-bold mt-px">Web Developer</h3>
                <div class="flex items-center gap-3 mt-2">
                  <a href="https://cafe24corp.com.ph/" class="text-sky-500 hover:text-sky-700 text-sm flex gap-1 items-center">
                    <span>Cafe24 Philippines, Inc.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>