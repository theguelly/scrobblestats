<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-sky-500">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-slate-500">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink to="/" class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Go back home</NuxtLink>
      </div>
    </div>
  </main>
</template>
<script setup>
  useHead({
    title: '404 - Page Not Found',
    meta: [
      { name: 'description', content: 'Error 404 - Page Not Found' }
    ],
    bodyAttrs: {
      class: 'h-full'
    },
    htmlAttrs: {
      class: 'h-full'
    }
  })
</script>