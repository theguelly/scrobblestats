<template>
  <div class="mx-auto max-w-screen-2xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Recent Blogs</h2>
      <p class="mt-2 text-lg leading-8 text-slate-500">Mixed blog content from web development and<br/>from my hobbies like music production and K-Pop/K-Drama.</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-slate-800 pt-10 sm:mt-8 sm:pt-12   lg:grid-cols-1 lg:mx-0 lg:left-0 lg:right-0 lg:max-w-full pb-6">
      <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time :datetime="post.datetime" class="text-slate-600">{{ post.date }}</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100" v-for="tag, key in post.tags" :key="key">{{ tag }}</a>
        </div>
        <div class="group relative">
          <h3 class="mt-2 text-2xl font-semibold leading-6 text-sky-500">
            <NuxtLink :to="'blogs' + post._path">
              <span class="absolute inset-0"></span>
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p class="mt-4 line-clamp-4 text-base leading-6 text-slate-500">{{ post.description }}</p>
          <p class="text-sm leading-6 text-slate-700 pt-2 group-hover:text-sky-500">Read More...</p>
        </div>
      </article>
    </div>
  </div>
</template>
  
<script setup>
  const posts = await queryContent().find()
</script>