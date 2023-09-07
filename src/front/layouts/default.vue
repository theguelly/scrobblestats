<template>
  <NavBar />
  <div class="py-12 sm:py-12">
    <slot />
  </div>
</template>
<script setup>
  useHead({
    title: 'theguelly',
    meta: [
      { name: 'description', content: 'theguelly' }
    ],
    bodyAttrs: {
      class: 'min-h-screen text-slate-200'
    },
    htmlAttrs: {
      class: 'min-h-screen'
    },
    link: [
      {
        rel: 'style',
        href: '/css/inter.css',
        as: 'stylesheet',
      }  
    ],
  })
</script>