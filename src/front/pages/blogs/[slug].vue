<script setup>
const route = useRoute()
const blog = await useAsyncData(route.params.slug, () => queryContent('/' + route.params.slug).findOne())
const { data, toc } = blog
console.log(blog)
console.log(toc)
</script>

<template>
  <ContentRenderer :value="data">
    <template #empty>
      <Error404 />
    </template>
    <div class="text-slate-200 mx-auto max-w-screen-2xl px-6 lg:px-8 py-12 sm:py-12 grid grid-cols-4 gap-4">
      <article class="max-w-full items-start justify-between grid-cols-8 col-span-3">
        <time :datetime="data.datetime" class="text-slate-600">Last updated: {{ data.date }}</time>
        <ContentRendererMarkdown :value="data" class="prose prose-slate prose-h1:text-slate-200 prose-h2:text-slate-200 prose-p:text-slate-200 prose-a:text-slate-200 max-w-none" />
      </article>
      <section class="grid-cols-4">
        <ul>
          <li
            v-for="link of data.body.toc.links"
            :key="link.id"
            :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </ContentRenderer>
  
</template>