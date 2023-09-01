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
      class: 'h-full bg-slate-900 text-slate-200'
    },
    htmlAttrs: {
      class: 'h-full'
    }
  })
</script>